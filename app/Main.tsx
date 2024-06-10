import Head from 'next/head';
import Script from 'next/script';
import Hero from '@/components/Hero';
import ResponsiveAppBar from '@/components/AppBar';
import HowTo from '@/components/HowTo';
import ResponsiveBenefitsSection from '@/components/BenefitsSection';
import CallToAction from '@/components/CallToAction';
import PricingPlans from '@/components/Pricing';

// TODO: add landing page photo 
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Receiptify</title>
        <meta name="description" content="Streamline your expense tracking with Receiptify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full">
      </header>

      <main className="bg-black flex flex-col items-center justify-center w-full mb-4">
        <Hero />
        <HowTo />
        <ResponsiveBenefitsSection />
        <PricingPlans />
        <CallToAction />
      </main>

      <footer className="flex justify-center w-full py-4">
        <p className="text-sm text-gray-500">Copyright 2024 Receiptify. All rights reserved.</p>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/js/fontawesome.min.js" />
    </div>
  );
}

export default App;
