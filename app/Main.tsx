import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Hero from '@/components/Hero';
import { AppBar } from '@mui/material';
import ResponsiveAppBar from '@/components/AppBar';
import HowTo from '@/components/HowTo';

//TODO: add landing page photo 
function App() {
  return (
    <div className="">
      <Head>
        <title>Receiptify - Automate Your Expense Tracking</title>
        <meta name="description" content="Transform your receipts into expense insights with Receiptify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header className="flex justify-left">
        <ResponsiveAppBar />
      </header>

      <main className="bg-white flex flex-col justify-center mb-4">
        <Hero />
        <HowTo />
        <BenefitsSection />
        <CallToActionSection />  
      </main>

      <footer className="flex justify-center mb-4">
        <p className="text-sm text-gray-500">Copyright 2024 Receiptify. All rights reserved.</p>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/js/fontawesome.min.js" />
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Streamline Your Expense Tracking</h2>
      <ul className="flex flex-wrap justify-center mb-4">
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-clock text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Save Time</h3>
          <p className="text-gray-600">Automate expense tracking and focus on what matters most – growing your business.</p>
        </li>
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-chart-bar text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Gain Insights</h3>
          <p className="text-gray-600">Make data-driven decisions with accurate and categorized expense reports.</p>
        </li>
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-shield-alt text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Reduce Errors</h3>
          <p className="text-gray-600">Minimize errors and discrepancies with Receiptify&apos;s accurate transcription and categorization.</p>
        </li>
      </ul>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="bg-orange-500 py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Start Streamlining Your Expense Tracking Today</h2>
      <button className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-2 px-4 rounded">
        Upload Your First Receipt
      </button>
    </section>
  );
}

export default App;