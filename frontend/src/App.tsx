import React from 'react';
import Navbar from './components/navbar/navbar'; 
import Footer from './components/footer/footer'; 
import SignIn from './components/auth/login';
import SignUp from './components/auth/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/landingpage/Home';
import LandingPage from './pages/landingpage/landingpage';

// ... imports

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-green-100 text-black overflow-x-hidden">
        
        <Navbar />

        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* ... other routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
           
        </main>
        
        <Footer /> 

      </div>
    </BrowserRouter>
  );
}

export default App;