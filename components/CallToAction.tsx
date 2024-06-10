'use client';

import * as React from 'react';
import { SignIn, useClerk } from '@clerk/nextjs';

export default function CallToAction() {
    const { openSignIn } = useClerk();

    return (
        <div className="bg-blue-600 text-white pb-8 pt-14 sm:pt-20 text-center">
            <div className="flex flex-col items-center pb-8 sm:pb-12">
                <h2 className="text-4xl mb-4">Start streamlining your expense tracking today!</h2>
                <a 
                    href="/dashboard" 
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group"
                    onClick={() => openSignIn()}
                >
                    
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        Upload Your First Receipt
                    </span>
                    <span className="relative invisible">Upload Your First Receipt</span>
                </a>
            </div>
        </div>
    );
}
