import Head from 'next/head';
import Script from 'next/script';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Hero from '@/components/Hero';
import ResponsiveAppBar from '@/components/AppBar';
import HowTo from '@/components/HowTo';
import ResponsiveBenefitsSection from '@/components/BenefitsSection';

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
        <ResponsiveBenefitsSection />
        <CallToActionSection />  
      </main>

      <footer className="flex justify-center mb-4">
        <p className="text-sm text-gray-500">Copyright 2024 Receiptify. All rights reserved.</p>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/js/fontawesome.min.js" />
    </div>
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