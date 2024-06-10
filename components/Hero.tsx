'use client';

import * as React from 'react';

export default function Hero() {
  return (
      <div className="items-center bg-blue container mx-auto px-4">
        <p>hihi</p>
      </div>
  );
}

/**
 * <div className="container mx-auto flex flex-col items-center pt-14 sm:pt-20 pb-8 sm:pb-12 px-4">
          <div className="flex flex-col items-center w-full sm:w-9/10 space-y-6">
            <h1 className="flex flex-col items-center text-center text-4xl sm:text-6xl md:text-5xl font-bold mb-6">
              Automate your 
              <span className="text-indigo-500 inline-flex flex-col overflow-hidden h-14 sm:h-20 md:h-16 leading-tight">
                <ul className="block animate-text-slide-4 leading-tight">
                  <li>bills</li>
                  <li>receipts</li>
                  <li>expenses</li>
                  <li>transactions</li>
                  <li aria-hidden="true">bills</li>
                </ul>
              </span>
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 w-full md:w-4/5 mb-6">
              Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full sm:w-auto">
              <input
                id="outlined-basic"
                type="text"
                aria-label="Enter your email address"
                placeholder="Your email address"
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoComplete="off"
              />
              <a href="/dashboard" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition shadow-md">
                Start now
              </a>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm opacity-80 mt-6">
              By clicking &quot;Start now&quot; you agree to our&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
              .
            </p>
          </div>
          <div
            id="image"
            className="mt-10 w-full h-64 sm:h-96 bg-cover bg-center rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg"
            style={{
              backgroundImage: 'url("/ss_dashboard.png")',
            }}
          />
        </div>
 */