'use client';
import * as React from 'react';
import Image from 'next/image';

export default function ResponsiveBenefitsSection() {
    return (
        <div className="bg-white pb-20">
            <div className="flex flex-col items-center pt-14 sm:pt-20 pb-8 sm:pb-12">
                <h3 className="text-3xl font-bold mb-2">Save Time</h3>

                <h6 className="text-xl text-center mb-4">
                    Automate expense tracking and focus on what matters most - growing your business.
                </h6>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 text-left pl-10 pb-5">
                        
                        <h5 className="text-2xl font-bold pt-5">Enhance Productivity</h5>
                        <p className="text-lg pt-3">
                            Automate your expense tracking to eliminate tedious tasks, allowing you to focus on what truly matters:
                            growing your business, maximizing productivity, and enjoying streamlined financial processes.
                        </p>
                    </div>
                    <div className="bg-gray-100 text-left pl-10 pb-5">
                        
                        <h5 className="text-2xl font-bold pt-5">Gain Insights</h5>
                        <p className="text-lg pt-3">
                            Make data-driven decisions with accurate, categorized expense reports that help streamline your financial management.
                        </p>
                    </div>
                    <div className="bg-gray-100 text-left pl-10 pb-5">
                        
                        <h5 className="text-2xl font-bold pt-5">Reduce Errors</h5>
                        <p className="text-lg pt-3">
                            Minimize errors and discrepancies with Receiptify&apos;s accurate transcription and categorization, ensuring
                            seamless financial management and providing peace of mind for your business operations.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image
                            className="max-w-full h-auto"
                            src="/receipt_vector.jpg"
                            width={50}
                            height={50}
                            alt="Benefit Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
