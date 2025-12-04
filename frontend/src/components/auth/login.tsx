import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex items-centert p-8 justify-center bg-slate-90">
      {/* Container to center the card and heading */}
      <div className="w-full max-w-md px-6">
         
        <div className="flex flex-col items-center mb-8">
          {/* small wave/logo */}
          <div className="mb-6">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C9 6 14 6 18 12C22 18 27 18 30 12C33 6 38 6 42 12" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2 className="text-black text-2xl font-semibold">Sign in to your account</h2>
        </div>

        {/* Card */}
        <div className="inset-shadow-sm inset-shadow-blue-700  shadow-xl shadow-blue-700 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
               
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Password"
                className="block w-full text-black rounded border border-gray-200 p-2 text-sm focus:outline-none "
              />
            </div>

            {/* Password */}
            <div>
               
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full text-black rounded border border-gray-200 p-2 text-sm focus:outline-none "
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-300">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember((v) => !v)}
                  className="w-4 h-4 rounded border-slate-60 bg-slate-90 "
                />
                <span className="text-black">Remember me</span>
              </label>

              <a href="#" className="text-black hover:underline">Forgot password?</a>
            </div>

            {/* Primary CTA */}
            <button
              type="submit"
              className="w-full py-3 inset-shadow-sm inset-shadow-blue-700 rounded bg-blue-400  shadow-xl shadow-blue-700  text-white font-semibold hover:bg-blue-500"
            >
              Sign in
            </button>

            {/* divider */}
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="flex-1 border-t border-slate-700" />
              <span className="whitespace-nowrap text-black">Or continue with</span>
              <span className="flex-1 border-t border-slate-700" />
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center text-black justify-center gap-3 px-4 py-2 rounded-md bg-slate-100 border border-slate-700   hover:bg-slate-300 transition"
              >
                {/* Google icon */}
                <svg className="w-5 h-5 " viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M533.5 278.4c0-17.5-1.6-34.3-4.7-50.5H272v95.6h146.9c-6.3 34-25 62.8-53.3 82v67h85.9c50.1-46.1 77-113.9 77-194.1z" fill="#4285F4"/>
                  <path d="M272 544.3c72.7 0 133.8-24.2 178.5-65.7l-85.9-67c-24 16.1-55 25.6-92.6 25.6-71 0-131.1-47.9-152.5-112.1H33.9v70.7C78.6 486 169.6 544.3 272 544.3z" fill="#34A853"/>
                  <path d="M119.5 323.1c-10.9-32.8-10.9-68 0-100.8V151.6H33.9c-39.8 78.9-39.8 171.1 0 250l85.6-78.5z" fill="#FBBC05"/>
                  <path d="M272 108.3c39.6 0 75.3 13.6 103.3 40.2l77.5-77.5C405.6 24.4 346.5 0 272 0 169.6 0 78.6 58.3 33.9 151.6l85.6 70.7C140.9 156.2 201 108.3 272 108.3z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center text-black justify-center gap-3 px-4 py-2 rounded-md bg-slate-100 border border-slate-700   hover:bg-slate-300 transition"
              >
                {/* GitHub icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.94.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.95-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.05.77 2.11 0 1.53-.01 2.77-.01 3.15 0 .3.2.67.79.55C20.71 21.4 24 17.09 24 12 24 5.65 18.35.5 12 .5z"/>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer small text */}
        <div className="mt-6 text-center text-sm text-slate-400">
          Not a member? <a href="#" className="text-indigo-300 hover:underline">Start a 14 day free trial</a>
        </div>
      </div>
    </div>
  );
}
