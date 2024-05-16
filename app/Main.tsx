import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

function App() {
  return (
    <div className="bg-white container mx-auto p-12 pt-6 md:p-6 lg:p-12">
      <Head>
        <title>Receiptify - Automate Your Expense Tracking</title>
        <meta name="description" content="Transform your receipts into expense insights with Receiptify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header className="flex justify-left mb-4">
        <Link href="/">
            <Image src="/logo.svg" alt="Receiptify Logo" width={120} height={30} />
        </Link>
      </header>

      <main className="bg-white flex flex-col justify-center mb-4">
        <HeroSection />
        <HowToSection />
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

function HeroSection() {
  return (
    <section className="flex flex-col justify-center py-12">
      <h3 className="text-l text-gray-600 text-center mb-3">MEET RECEIPTIFY</h3>
      <h1 className="text-3xl text-black font-bold text-center mb-4">Make Your Receipts Work Harder</h1>
      <p className="text-lg text-gray-600 text-center mt-2">Transcribe your receipts with ease. Less time, less mistakes.</p>
      <p className="text-m text-gray-600 text-center mb-2">From your browser - with</p>
      <p className="text-m text-gray-600 text-center mb-8">zero setup</p>
      <div className="flex justify-center w-1/3 mx-auto">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Upload Your First Receipt
        </button>
      </div>
    </section>
  );
}

function HowToSection() {
  return (
    <section className="py-20 grid grid-cols-4">
      <div>
      <Card className="rounded-lg w-4/5 h-full flex items-center">
        <CardHeader className="justify-center overflow-visible py-2">
          <Image
            alt="Screenshot icon"
            className="object-cover rounded-xl"
            src="/ss_icon.svg"
            width={100}
            height={50}
          />
        </CardHeader>
        <CardBody className="flex items-center">
          <h1>1. Upload</h1>
          <p>Upload your receipt onto receiptify.</p>
        </CardBody>
      </Card>
      </div>

      <div>
      <Card className="rounded-lg w-4/5 h-full flex items-center">
        <CardHeader className="justify-center overflow-visible py-2">
            <Image
              alt="Magnifying glass icon"
              className="object-cover rounded-xl"
              src="/scan_icon.svg"
              width={100}
              height={50}
            />
          </CardHeader>
        <CardBody className="flex items-center">
          <h1>2. Analyze</h1>
          <p>Receiptify's OCR extracts relevant data</p>
        </CardBody>
      </Card>
      </div>

      <div>
      <Card className="rounded-lg w-4/5 h-full flex items-center">
        <CardHeader className="justify-center overflow-visible py-2">
            <Image
              alt="Brush icon"
              className="object-cover rounded-xl"
              src="/format_icon.svg"
              width={100}
              height={50}
            />
          </CardHeader>
        <CardBody className="flex items-center">
          <h1>3. Organize</h1>
          <p>Data is organized and categorized based on user requirements</p>
        </CardBody>
      </Card>
      </div>

      <div>
        <Card className="rounded-lg w-4/5 h-full flex items-center">
          <CardHeader className="justify-center overflow-visible py-2">
            <Image
              alt="Document picture"
              className="object-cover rounded-xl"
              src="/manage_icon.svg"
              width={100}
              height={50}
            />
          </CardHeader>
          <CardBody className="flex items-center">
            <h1>4. Manage</h1>
            <p>View, manage, and export your budget from your dashboard.</p>
          </CardBody>
        </Card>
      </div>
    </section>
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
          <p className="text-gray-600">Minimize errors and discrepancies with Receiptify's accurate transcription and categorization.</p>
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