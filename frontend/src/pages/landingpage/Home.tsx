import React from "react";
import HeroImage from "../../assets/heroimage.webp";

function HomePage() {
  return (
    <>
      {/* Hero Section   */}
      <div
        style={{ backgroundImage: `url(${HeroImage})` }}
        className="relative bg-center bg-green-100 bg-no-repeat bg-contain"
      >
         
        <div className="absolute inset-0 "></div>

         
        <div className="relative max-w-7xl mx-auto px-6 py-20">
           
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* LEFT: content + illustration */}
            <section className="flex-1 flex flex-col justify-center text-center md:text-left">
              <div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">
                  Take Control Of Your Finances
                </h1>
                <p className="mt-4 text-2xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  A clean, fast expense tracker that helps you understand where your money goes, build budgets, and save smarter — with charts, quick add, and secure syncing.
                </p>
              </div>
            </section>

            {/* RIGHT: login card */}
            <section className="flex-1 flex justify-center items-center">
  <div className="w-full max-w-sm bg-white/9 backdrop-blur-sm border border-gray-200 rounded-lg p-6 shadow inset-shadow-sm inset-shadow-green-700">
    <form className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="block w-full text-black rounded border border-gray-200 p-2 text-sm focus:outline-none "
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="block w-full text-black rounded border border-gray-200 p-2 text-sm focus:outline-none "
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 inset-shadow-sm inset-shadow-green-700 rounded bg-green-400  shadow-xl shadow-green-700  text-white font-semibold hover:bg-green-500"
      >
        Start Free Trial
      </button>

      <p className="text-center text-xs text-gray-500 mt-2">
        No credit card required
      </p>
    </form>
  </div>
</section>

          </div>
        </div>
      </div>

      <section className="py-14 bg-green-100">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      
      {/* <!-- Track Expenses --> */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-100 text-blue-600">
          {/* <!-- Eye Icon --> */}
          <svg className="w-8 h-8 bg-green-100" viewBox="0 0 24 24" fill="none">
            <path d="M12 5c-7 0-11 6-11 7s4 7 11 7 11-6 11-7-4-7-11-7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">Track Expenses</h3>
        <p className="text-sm text-gray-600">Easily record and categorize your expenses with our user-friendly interface.</p>
      </div>

      {/* <!-- Generate Reports --> */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          {/* <!-- Bars Icon --> */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="3" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <rect x="10.5" y="7" width="3" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <rect x="18" y="3" width="3" height="16" rx="1" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">Generate Reports</h3>
        <p className="text-sm text-gray-600">Generate detailed reports & gain insights into your spending habits and finances.</p>
      </div>

      {/* <!-- Budget Management --> */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          {/* <!-- Wallet Icon --> */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M3 7h15a2 2 0 012 2v6a2 2 0 01-2 2H3V7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 7v2" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="17.5" cy="13.5" r="1.5" fill="currentColor"/>
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">Budget Management</h3>
        <p className="text-sm text-gray-600">Set budgets for different categories and receive alerts when you're nearing your limits.</p>
      </div>

    </div>

  </div>
</section>
  

  {/* <!-- Pricing Section --> */}
<section className="py-16 ">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-extrabold text-black">Pricing</h2>
      <p className="text-black mt-2">Choose the plan that fits your needs.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
      {/* <!-- Card --> */}
      <div className="pricing-card w-full py-2.5 inset-shadow-sm inset-shadow-green-700 rounded bg-green-200  shadow-xl shadow-green-700  text-white font-semibold">
        <div className="p-8">
          <h3 className="text-sm font-semibold text-black">Starter</h3>
          <p className="text-black mt-2 mb-6">Everything you need to get started.</p>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-white">$19</span>
            <span className="text-sm text-black">USD <span className="block text-xs">per month</span></span>
          </div>

          <button className="mt-6 inline-block px-4 py-2 rounded-md bg-green-400 hover:bg-green-600 text-white font-medium">
            Start a free trial
          </button>

          <p className="mt-6 text-black font-medium">Start selling with:</p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Custom domains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Edge content delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <span className="mt-1 text-slate-500">+</span>
              <span>Quarterly workshops</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <span className
              ="mt-1 text-slate-500">+</span>
              <span>Single sign-on (SSO)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Card --> */}
      <div className="pricing-card w-full py-2.5 inset-shadow-sm inset-shadow-green-700 rounded bg-green-200  shadow-xl shadow-green-700  text-white font-semibold">
        <div className="p-8">
          <h3 className="text-sm font-semibold text-black">Starter</h3>
          <p className="text-black mt-2 mb-6">Everything you need to get started.</p>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-white">$19</span>
            <span className="text-sm text-black">USD <span className="block text-xs">per month</span></span>
          </div>

          <button className="mt-6 inline-block px-4 py-2 rounded-md bg-green-400 hover:bg-green-600 text-white font-medium">
            Start a free trial
          </button>

          <p className="mt-6 text-black font-medium">Start selling with:</p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Custom domains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Edge content delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <span className="mt-1 text-slate-500">+</span>
              <span>Quarterly workshops</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <span className
              ="mt-1 text-slate-500">+</span>
              <span>Single sign-on (SSO)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Card --> */}
      <div className="pricing-card w-full py-2.5 inset-shadow-sm inset-shadow-green-700 rounded bg-green-200  shadow-xl shadow-green-700  text-white font-semibold">
        <div className="p-8">
          <h3 className="text-sm font-semibold text-black">Growth</h3>
          <p className="text-black mt-2 mb-6">All the extras for your growing team.</p>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-white">$49</span>
            <span className="text-sm text-slate-400">USD <span className="block text-black text-xs">per month</span></span>
          </div>

          <button className="mt-6 inline-block px-4 py-2 rounded-md bg-green-400 hover:bg-green-600 text-white font-medium">
            Start a free trial
          </button>

          <p className="mt-6 text-black font-medium">Start selling with:</p>
          <ul className="mt-4 space-y-3 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Custom domains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Edge content delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Quarterly workshops</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <span className="mt-1 text-slate-500">+</span>
              <span>Single sign-on (SSO)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Card --> */}
      <div className="pricing-card w-full py-2.5 inset-shadow-sm inset-shadow-green-700 rounded bg-green-200  shadow-xl shadow-green-700  text-white font-semibold">
        <div className="p-8">
          <h3 className="text-sm font-semibold text-black">Scale</h3>
          <p className="text-black mt-2 mb-6">Added flexibility at scale.</p>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-white">$99</span>
            <span className="text-sm text-slate-400">USD <span className="block text-black text-xs">per month</span></span>
          </div>

          <button className="mt-6 inline-block px-4 py-2 rounded-md bg-green-400 hover:bg-green-600 text-white font-medium">
            Start a free trial
          </button>

          <p className="mt-6 text-black font-medium">Start selling with:</p>
          <ul className="mt-4 space-y-3 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Custom domains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Edge content delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Quarterly workshops</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-slate-500">+</span>
              <span>Priority phone support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

 
</section>

    </>
  );
}

export default HomePage;
