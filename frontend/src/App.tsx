import React from 'react';
import Navbar from './components/navbar/navbar'; 
import Footer from './components/footer/footer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/landingpage/Home';

// ... imports

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-900 text-white overflow-x-hidden">
        
        <Navbar />

        {/* 🚨 KEY CHANGE HERE: Added pt-20 to push content down 
           pt-20 is 5rem (80px), which should clear your fixed Navbar. 
           You might need to adjust this value (e.g., pt-16) depending on your Navbar's exact height.
        */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* ... other routes */}
          </Routes>
           
        </main>
        
        <Footer /> 

      </div>
    </BrowserRouter>
  );
}

export default App;