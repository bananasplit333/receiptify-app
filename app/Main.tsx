import Head from 'next/head';
import Script from 'next/script';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Hero from '@/components/Hero';
import ResponsiveAppBar from '@/components/AppBar';
import HowTo from '@/components/HowTo';
import ResponsiveBenefitsSection from '@/components/BenefitsSection';
import CallToAction from '@/components/CallToAction';
import { useRouter } from 'next/router';
import { SignedOut, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

//TODO: add landing page photo 
function App() {
  return (
    <div className="">
      <header>
        <ResponsiveAppBar />
      </header>

      <SignedOut>
        <main className="bg-white flex flex-col justify-center mb-4">
          <Hero />
          <HowTo />
          <ResponsiveBenefitsSection />
          <CallToAction />
        </main>
      </SignedOut>


      <footer className="flex justify-center mb-4">
        <p className="text-sm text-gray-500">Copyright 2024 Receiptify. All rights reserved.</p>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/js/fontawesome.min.js" />
    </div>
  );
}

export default App;