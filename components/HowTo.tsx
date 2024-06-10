'use client';

import * as React from 'react';

export default function HowTo() {
  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div className="flex flex-col items-center px-4 py-5 bg-white shadow-md rounded-md text-center h-full">
            <div className="text-sm font-bold py-1 px-2 bg-blue-100 text-blue-600 rounded mb-2">Upload</div>
            <h2 className="pb-4 text-lg font-bold text-gray-900">Upload Seamlessly</h2>
            <p className="text-sm text-gray-700">
              Receiptify allows you to seamlessly upload your receipts, and saves you time so you can focus on the bigger tasks.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 py-5 bg-white shadow-md rounded-md text-center h-full">
            <div className="text-sm font-bold py-1 px-2 bg-green-100 text-green-600 rounded mb-2">Extraction</div>
            <h2 className="pb-4 text-lg font-bold text-gray-900">Organize faster</h2>
            <p className="text-sm text-gray-700">
              Utilizing OCR processing and AI, Receiptify handles the uploading, organizing, and categorizing of your expenses into a handy excel-style sheet.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 py-5 bg-white shadow-md rounded-md text-center h-full">
            <div className="text-sm font-bold py-1 px-2 bg-yellow-100 text-yellow-600 rounded mb-2">Visual Editor</div>
            <h2 className="pb-4 text-lg font-bold text-gray-900">Click, edit, publish</h2>
            <p className="text-sm text-gray-700">
              Edit your sheets on the web, and publish it to the world. Receiptify allows for you to export and share your sheets with ease.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a href="/dashboard" className="bg-blue-600 text-white py-2 px-4 rounded text-sm font-bold hover:bg-blue-700 transition">
            Explore the Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}
