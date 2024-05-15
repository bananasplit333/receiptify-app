import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

function App() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <Head>
        <title>Receiptify - Automate Your Expense Tracking</title>
        <meta name="description" content="Transform your receipts into expense insights with Receiptify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-center mb-4">
        <Link href="/">
            <Image src="/logo.svg" alt="Receiptify Logo" width={120} height={30} />
        </Link>
      </header>

      <main className="flex flex-col justify-center mb-4">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialSection />
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
    <section className="flex flex-col justify-center bg-gray-100 py-12">
      <h1 className="text-3xl text-black font-bold text-center mb-4">Transform Your Receipts into Expense Insights</h1>
      <p className="text-lg text-black text-center mb-8">Automate your expense tracking with Receiptify</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Upload Your First Receipt
      </button>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">Unlock the Power of Your Receipts</h2>
      <ul className="flex flex-wrap justify-center mb-4">
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-magnifying-glass text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Accurate Transcription</h3>
          <p className="text-gray-600">Receiptify's AI-powered engine extracts data from your receipts with high accuracy, saving you time and effort.</p>
        </li>
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-chart-bar text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Expense Categorization</h3>
          <p className="text-gray-600">Automatically categorize your expenses into predefined categories, making it easy to track your spending.</p>
        </li>
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-shield-alt text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Secure Storage</h3>
          <p className="text-gray-600">Your receipts are stored securely in the cloud, protected by robust encryption and access controls.</p>
        </li>
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <i className="fas fa-clock text-2xl text-gray-500" />
          <h3 className="text-lg font-bold mb-2">Real-Time Updates</h3>
          <p className="text-gray-600">Get instant updates on your expense reports, so you can make informed decisions on the go.</p>
        </li>
      </ul>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-gray-100 py-12">
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

function TestimonialSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <ul className="flex flex-wrap justify-center mb-4">
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <Image src="/testimonial-1.jpg" alt="Customer Testimonial" width={120} height={120} className="rounded-full" />
          <p className="text-lg text-gray-600 mb-2">"Receiptify has revolutionized the way we track expenses. It's saved us hours of manual work!"</p>
          <p className="text-gray-500">— [Customer Name]</p>
        </li>
        <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <Image src="/testimonial-2.jpg" alt="Customer Testimonial" width={120} height={120} className="rounded-full" />
          <p className="text-lg text-gray-600 mb-2">"The accuracy and speed of Receiptify's transcription have exceeded our expectations."</p>
          <p className="text-gray-500">— [Customer Name]</p>
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