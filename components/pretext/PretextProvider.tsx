import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

// Minimal typings for Pretext results. The real library may have richer types.
type Prepared = any;

type LayoutResult = {
  height: number;
  lineCount: number;
  lines?: string[]; // lines of text (best-effort fallback)
};

type PrepareOptions = {
  whiteSpace?: 'normal' | 'pre' | 'nowrap';
};

type PretextContextValue = {
  ready: boolean;
  prepare: (text: string, font?: string, options?: PrepareOptions) => Promise<Prepared>;
  layout: (prepared: Prepared, width: number, lineHeight?: number) => Promise<LayoutResult>;
  prepareWithSegments: (text: string, font?: string, options?: PrepareOptions) => Promise<Prepared>;
  layoutWithLines: (prepared: Prepared, width: number, lineHeight?: number) => Promise<LayoutResult>;
  clearCache: () => void;
};

export const PretextContext = createContext<PretextContextValue | null>(null);

const cache = new Map<string, Prepared>();

function cacheKey(text: string, font?: string, options?: PrepareOptions) {
  return JSON.stringify({ text, font, options });
}

// Helper: Configure CDN URLs here or via NEXT_PUBLIC_PRETEXT_CDN env var (comma-separated).
// Change this constant to point to a different CDN or package version as needed.
const DEFAULT_CDN_URLS = [
  'https://unpkg.com/@chenglou/pretext@0.0.2/dist/pretext.umd.js',
  'https://cdn.jsdelivr.net/npm/@chenglou/pretext@0.0.2/dist/pretext.umd.js',
];

const getCdnUrls = () => {
  if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_PRETEXT_CDN) {
    try {
      const v = process.env.NEXT_PUBLIC_PRETEXT_CDN;
      return v.split(',').map(s => s.trim()).filter(Boolean);
    } catch (e) {
      // fall through to defaults
    }
  }
  return DEFAULT_CDN_URLS;
};

// Configurable timeout (ms) for loading CDN script
const CDN_TIMEOUT_MS = 10000;

export const PretextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pretext, setPretext] = useState<any | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function tryLoadGlobal(): Promise<any | null> {
      // detect known global names used by UMD bundle
      if (typeof window === 'undefined') return null;
      // Prefer explicit global var lookups
      if ((window as any).__pretext__) return (window as any).__pretext__;
      if ((window as any).Pretext) return (window as any).Pretext;
      if ((window as any).pretext) return (window as any).pretext;
      return null;
    }

    function loadScript(src: string, timeout = CDN_TIMEOUT_MS) {
      return new Promise<void>((resolve, reject) => {
        if (typeof document === 'undefined') return reject(new Error('No document'));
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        let done = false;
        const onLoad = () => {
          if (done) return; done = true; cleanup(); resolve();
        };
        const onError = (ev?: any) => {
          if (done) return; done = true; cleanup(); reject(new Error('Script load error: ' + src));
        };
        const timer = setTimeout(() => onError(new Error('timeout')), timeout);
        function cleanup() {
          clearTimeout(timer);
          s.removeEventListener('load', onLoad);
          s.removeEventListener('error', onError);
        }
        s.addEventListener('load', onLoad);
        s.addEventListener('error', onError);
        document.head.appendChild(s);
      });
    }

    async function init() {
      // Only run in browser
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      try {
        // Wait for document fonts to be ready so measurement is accurate
        try {
          if ((document as any).fonts && (document as any).fonts.ready) {
            await (document as any).fonts.ready;
          }
        } catch (e) {
          // ignore
        }

        // 1) prefer an already-present global UMD bundle
        let g = await tryLoadGlobal();
        if (g) {
          if (!mounted) return;
          setPretext(g);
          setReady(true);
          return;
        }

        // 2) attempt to inject CDN scripts (in order) and wait for global to appear
        const cdnUrls = getCdnUrls();
        let loadedGlobal: any = null;
        for (const url of cdnUrls) {
          try {
            await loadScript(url);
            // after load, check for globals
            const maybe = await tryLoadGlobal();
            if (maybe) {
              loadedGlobal = maybe;
              break;
            }
            // If script loaded but didn't define expected global, continue to next CDN
          } catch (e) {
            // try next CDN URL
            // eslint-disable-next-line no-console
            console.warn('Pretext CDN script failed to load:', url, e);
          }
        }

        if (loadedGlobal) {
          if (!mounted) return;
          setPretext(loadedGlobal);
          setReady(true);
          return;
        }

        // 3) fallback to dynamic import of the package (only if CDN didn't provide global)
        try {
          const mod = await import('@chenglou/pretext');
          const exported = (mod && (mod.default || mod)) || null;
          // prefer exported module if it exposes expected functions
          if (exported && (exported.prepare || exported.prepareWithSegments)) {
            if (!mounted) return;
            setPretext(exported);
            setReady(true);
            return;
          }
        } catch (e) {
          // dynamic import failed; fall through to shim
          // eslint-disable-next-line no-console
          console.warn('Dynamic import of @chenglou/pretext failed, falling back to shim:', e);
        }

        // 4) final fallback: leave pretext null which will cause provider to use shim implementations
        if (!mounted) return;
        setPretext(null);
        setReady(true);
      } catch (e) {
        console.error('Failed to initialize Pretext:', e);
        if (!mounted) return;
        setPretext(null);
        setReady(true);
      }
    }
    init();

    return () => {
      mounted = false;
    };
  }, []);

  const prepare = useCallback(async (text: string, font?: string, options?: PrepareOptions) => {
    const key = cacheKey(text, font, options);
    if (cache.has(key)) return cache.get(key) as Prepared;

    // wait for fonts again just in case
    try {
      if (typeof document !== 'undefined' && (document as any).fonts && (document as any).fonts.ready) {
        await (document as any).fonts.ready;
      }
    } catch (e) {
      // ignore
    }

    if (pretext && pretext.prepare) {
      const p = await pretext.prepare(text, { font });
      cache.set(key, p);
      return p;
    }

    // fallback shim: return text as-is
    const shim = { text };
    cache.set(key, shim);
    return shim;
  }, [pretext]);

  const prepareWithSegments = useCallback(async (text: string, font?: string, options?: PrepareOptions) => {
    const key = cacheKey(text, font, options) + '|segments';
    if (cache.has(key)) return cache.get(key) as Prepared;

    try {
      if (typeof document !== 'undefined' && (document as any).fonts && (document as any).fonts.ready) {
        await (document as any).fonts.ready;
      }
    } catch (e) {}

    if (pretext && pretext.prepareWithSegments) {
      const p = await pretext.prepareWithSegments(text, { font });
      cache.set(key, p);
      return p;
    }

    // shim: a single "segment" containing the whole text
    const shim = { segments: [{ text }] };
    cache.set(key, shim);
    return shim;
  }, [pretext]);

  const layout = useCallback(async (prepared: Prepared, width: number, lineHeight = 16) => {
    if (pretext && pretext.layout) {
      const r = await pretext.layout(prepared, width, { lineHeight });
      return {
        height: r.height ?? 0,
        lineCount: r.lines ? r.lines.length : (r.lineCount ?? 0),
        lines: r.lines ?? undefined,
      } as LayoutResult;
    }

    // naive layout: split by words and wrap
    const text = (prepared && prepared.text) || (prepared && prepared.segments && prepared.segments.map((s: any) => s.text).join(' ')) || '';
    const words = text.split(/\s+/);
    const ctx = (document.createElement('canvas') as HTMLCanvasElement).getContext('2d')!;
    ctx.font = lineHeight + 'px sans-serif';
    const lines: string[] = [];
    let cur = '';
    for (const w of words) {
      const candidate = cur ? cur + ' ' + w : w;
      const wlen = ctx.measureText(candidate).width;
      if (wlen > width && cur) {
        lines.push(cur);
        cur = w;
      } else {
        cur = candidate;
      }
    }
    if (cur) lines.push(cur);
    return { height: lines.length * lineHeight, lineCount: lines.length, lines } as LayoutResult;
  }, [pretext]);

  const layoutWithLines = useCallback(async (prepared: Prepared, width: number, lineHeight = 16) => {
    if (pretext && pretext.layoutWithLines) {
      const r = await pretext.layoutWithLines(prepared, width, { lineHeight });
      return {
        height: r.height ?? 0,
        lineCount: r.lines ? r.lines.length : (r.lineCount ?? 0),
        lines: r.lines ?? undefined,
      } as LayoutResult;
    }

    // fallback to layout() implementation which returns lines in shim
    return layout(prepared, width, lineHeight);
  }, [pretext, layout]);

  const clearCache = useCallback(() => {
    cache.clear();
  }, []);

  const value = useMemo(() => ({ ready, prepare, layout, prepareWithSegments, layoutWithLines, clearCache }), [ready, prepare, layout, prepareWithSegments, layoutWithLines, clearCache]);

  return <PretextContext.Provider value={value}>{children}</PretextContext.Provider>;
};

export default PretextProvider;
