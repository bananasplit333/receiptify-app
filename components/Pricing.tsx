'use client';

import * as React from 'react';

const PricingPlans: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h4 className="text-2xl font-bold mb-5">Pricing Plans</h4>
        <p className="text-lg text-gray-700 mb-5">
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </p>
        <div className="flex justify-center mb-10">
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Monthly billing
            </button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">
              Yearly billing
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h6 className="text-xl font-bold mb-4">Hobby</h6>
            <p className="text-gray-700 mb-4">
              Get up to 30 receipt uploads per month! Excel exporting, in-app sheet editing, and more.
            </p>
            <p className="text-2xl font-bold mb-4">$8/month</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition w-full">
              Subscribe
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h6 className="text-xl font-bold mb-4">Freelancer</h6>
            <p className="text-gray-700 mb-4">
              All the basics for keeping track of your bills. Unlimited uploads, stress-free management.
            </p>
            <p className="text-2xl font-bold mb-4">$13/month</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition w-full">
              Subscribe
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h6 className="text-xl font-bold mb-4">Enterprise</h6>
            <p className="text-gray-700 mb-4">
              Tailored OCR solutions for your business, including customizable dashboards and additional features.
            </p>
            <p className="text-2xl font-bold mb-4">Contact</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition w-full">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
