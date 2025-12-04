import React from 'react';
import Navbar from './components/navbar/navbar'; 
import Footer from './components/footer/footer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/landingpage/Home';

// ... imports

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen  text-white overflow-x-hidden">
        
        <Navbar />

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