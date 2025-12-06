 
import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen   text-slate-900 dark:text-slate-100">
      {/* Header */}
       

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Track your spending. Reach your goals.</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl">A clean, fast expense tracker that helps you understand where your money goes, build budgets, and save smarter — with charts, quick add, and secure syncing.</p>

            <div className="flex gap-4 items-center">
              <a href="/signup" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md font-medium shadow">Get started — it's free</a>
              <a href="/demo" className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-md text-sm">Live demo</a>
            </div>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-green-100 text-green-700">✓</span>
                <div>
                  <div className="font-medium">Quick add</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Add an expense in under 5 seconds.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-100 text-blue-700">📊</span>
                <div>
                  <div className="font-medium">Real-time charts</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Monthly view, category breakdown, and trends.</div>
                </div>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">No credit card — free plan available. Built with privacy in mind.</div>
          </div>

          {/* Mockup / Dashboard preview */}
          <div className="relative">
            <div className="rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-slate-800 ring-1 ring-slate-100 dark:ring-0">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-300">Total balance</div>
                    <div className="text-2xl font-semibold">Ksh 34,210</div>
                  </div>
                  <div className="text-sm text-slate-500">This month</div>
                </div>

                <div className="mt-6 h-36 bg-gradient-to-r from-indigo-50 to-rose-50 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-end p-4">
                  {/* Simple bars as SVG */}
                  <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="28" width="18" height="44" rx="2" />
                    <rect x="34" y="10" width="18" height="62" rx="2" />
                    <rect x="60" y="22" width="18" height="50" rx="2" />
                    <rect x="86" y="6" width="18" height="66" rx="2" />
                    <rect x="112" y="34" width="18" height="38" rx="2" />
                    <rect x="138" y="18" width="18" height="54" rx="2" />
                    <rect x="164" y="40" width="18" height="32" rx="2" />
                  </svg>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="text-center">
                    <div className="font-semibold">Food</div>
                    <div className="text-xs">Ksh 8,200</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Transport</div>
                    <div className="text-xs">Ksh 3,400</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Bills</div>
                    <div className="text-xs">Ksh 4,900</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative devices */}
            <div className="absolute -bottom-6 -right-8 transform rotate-6 opacity-40 hidden md:block">
              <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="160" height="100" rx="12" fill="url(#g)"/>
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#8b5cf6" />
                    <stop offset="1" stopColor="#fb7185" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Features built for everyday money</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Smart categorization" desc="Automatic suggestions using simple rules — override anytime." icon="📁" />
            <FeatureCard title="Budgets & Alerts" desc="Set monthly caps and get notified when you're near the limit." icon="🚨" />
            <FeatureCard title="Export & Reports" desc="Download CSVs or PDF summaries for taxes and review." icon="📤" />
          </div>
        </section>

        {/* Screenshots / Preview */}
        <section id="screens" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Screenshots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScreenshotCard title="Dashboard" />
            <ScreenshotCard title="Transactions" />
            <ScreenshotCard title="Budgets" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-indigo-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 rounded-xl px-6">
          <div className="max-w-3xl mx-auto text-center py-10">
            <h4 className="text-2xl font-bold">Ready to take control of your money?</h4>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Create an account and start tracking in seconds. Free plan available.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md shadow">Create account</a>
              <a href="/learn" className="text-sm px-4 py-3 rounded-md border">See how it works</a>
            </div>
          </div>
        </section>

        {/* Pricing (simple) */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PlanCard name="Free" price="Ksh 0/mo" bullets={["Unlimited transactions", "Basic reports", "Email support"]} featured={false} />
            <PlanCard name="Pro" price="Ksh 499/mo" bullets={["Advanced reports", "Priority support", "Multi-device sync"]} featured={true} />
            <PlanCard name="Team" price="Contact us" bullets={["Multi-user", "Admin controls", "SAML SSO"]} featured={false} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12">
          <h3 className="text-2xl font-semibold mb-6">What people say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial name="Martha" text="Saved so much after seeing where my money went." />
            <Testimonial name="John" text="Quick add is a game-changer for busy days." />
            <Testimonial name="Aisha" text="Budget alerts stopped my overspending." />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-slate-200 dark:border-slate-700 mt-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-rose-400 flex items-center justify-center text-white font-bold">ET</div>
              <div>
                <div className="font-semibold">ExpenseTrack</div>
                <div className="text-xs text-slate-500">Built with privacy & speed in mind.</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating quick CTA for mobile */}
      <a href="/signup" className="fixed bottom-6 right-6 md:hidden inline-flex items-center gap-3 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg">Get Started</a>
    </div>
  );
}

/* --- Small subcomponents --- */
function FeatureCard({ title, desc, icon }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm ring-1 ring-slate-100 dark:ring-0">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-xl">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-500 dark:text-slate-300 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotCard({ title }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 ring-1 ring-slate-100 dark:ring-0">
      <div className="p-4">
        <div className="font-medium mb-4">{title}</div>
        <div className="h-48 rounded-md bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="12" width="208" height="96" rx="8" fill="#E6E6F0"/>
            <rect x="16" y="26" width="76" height="12" rx="4" fill="#fff"/>
            <rect x="16" y="46" width="188" height="10" rx="4" fill="#fff"/>
            <rect x="16" y="62" width="120" height="10" rx="4" fill="#fff"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ name, price, bullets, featured }) {
  return (
    <div className={`${featured ? "ring-2 ring-indigo-300 dark:ring-indigo-600 scale-102" : "ring-1 ring-slate-100 dark:ring-0"} p-6 rounded-xl bg-white dark:bg-slate-800`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-500 dark:text-slate-300">{price}</div>
        </div>
        {featured && <div className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Popular</div>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3"><span className="text-indigo-500">•</span>{b}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a href="/signup" className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-md ${featured ? "bg-indigo-600 text-white" : "border"}`}>Choose</a>
      </div>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <blockquote className="p-6 bg-white dark:bg-slate-800 rounded-xl ring-1 ring-slate-100 dark:ring-0">
      <p className="text-sm text-slate-700 dark:text-slate-200">“{text}”</p>
      <div className="mt-4 text-xs text-slate-500">— {name}</div>
    </blockquote>
  );
}
