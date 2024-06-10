'use client';

import * as React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton, useClerk, useUser } from '@clerk/nextjs';

const pages = ['Pricing', 'Contact'];

function ResponsiveAppBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="hidden md:block h-8 w-8 mr-2 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 001 1h1v2h-2v2h4v-4a1 1 0 00-1-1h-1V7h1V5h-2z"
              clipRule="evenodd"
            />
          </svg>
          <a
            href="/"
            className="hidden md:block text-white font-mono text-xl font-bold tracking-widest"
          >
            RECEIPTIFY
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={handleToggleNav}
            className="text-white"
          >
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14M3 10h14m-7 5h7"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className={`${isNavOpen ? 'block' : 'hidden'} md:flex flex-grow items-center justify-between`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {pages.map((page) => (
              <a
                key={page}
                href={`#${page.toLowerCase()}`}
                className="text-white my-2 md:my-0"
                onClick={() => setIsNavOpen(false)}
              >
                {page}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <SignedOut>
              <button
                onClick={() => openSignIn()}
                className="bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-700 transition"
              >
                DASHBOARD
              </button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
