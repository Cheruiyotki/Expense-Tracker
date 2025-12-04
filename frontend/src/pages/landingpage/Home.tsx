import HeroImage from "../../assets/heroimage.webp";


function HomePage() {
   return (
    
      <>
      {/* 1 Menu */}
      <div style={{ backgroundImage: `url(${HeroImage})` }} 
      className="bg-center bg-cover     w-full flex items-center justify-center lg:h-200 lg:w-200 lg:mx-auto">

        <div className="flex flex-col lg:flex-row       mx-auto">
            {/* left section */}
            <section className="text-black   lg:mb-0"> 
               <h3 className="text-4xl font-bold">Take Control Of Your Finances</h3>
               <p className="text-xl mt-2">Effortlessly Track, Manage and optimise your spending</p>
            </section>
           {/* right section */}
         <section className="lg:w-4/12 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
            <input type="email" placeholder="Email Address" className="w-full border p-2 mb-3 rounded" />
            <input type="password" placeholder="Password" className="w-full border p-2 mb-3 rounded" />
            <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 font-semibold">
                   Start Free Trial
           </button>
        <p className="text-xs text-gray-500 text-center mt-2">No credit card required</p>
      </div>
         </section>
         </div>
         
      </div>
      <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis assumenda quo beatae ipsam necessitatibus officiis quaerat aperiam sapiente eaque quam commodi placeat enim quod veniam maxime, rem itaque quas? Adipisci?
         

      </p>
      </>
   );
}

export default HomePage;  