import React from "react";
import HeroImage from "../../assets/heroimage.webp";

function HomePage() {
  return (
    <>
      {/* Hero Section   */}
      <div
        style={{ backgroundImage: `url(${HeroImage})` }}
        className="relative bg-center bg-no-repeat bg-contain"
      >
         
        <div className="absolute inset-0 bg-blue"></div>

         
        <div className="relative max-w-7xl mx-auto px-6 py-20">
           
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* LEFT: content + illustration */}
            <section className="flex-1 flex flex-col justify-center text-center md:text-left">
              <div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">
                  Take Control Of Your Finances
                </h1>
                <p className="mt-4 text-2xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  Effortlessly track, manage and optimize your spending
                </p>
              </div>
            </section>

            {/* RIGHT: login card */}
            <section className="flex-1 flex justify-center items-center">
  <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-6 shadow inset-shadow-sm inset-shadow-blue-700">
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
        className="w-full py-2.5 inset-shadow-sm inset-shadow-blue-700 rounded bg-blue-400  shadow-xl shadow-blue-700  text-white font-semibold hover:bg-blue-700"
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

      {/* Extra content below hero (keeps page flow) */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          assumenda quo beatae ipsam necessitatibus officiis quaerat aperiam
          sapiente eaque quam commodi placeat enim quod veniam maxime, rem itaque
          quas? Adipisci?
        </p>
      </div>
    </>
  );
}

export default HomePage;
