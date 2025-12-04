import { useState } from "react";
// Assuming you are using Lucide React (install with: npm install lucide-react)
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
    // State to toggle the mobile menu visibility
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    
    // Define all your navigation links here.
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#Pricing" },
        { name: "Testimonials", href: "#Testimonials" },
        { name: "Sign Up", href: "/signup", isButton: true },
    ];
    
    // Function to close the menu (used when a link is clicked)
    const closeMenu = () => setMobileMenuIsOpen(false);

    return (
        // Fixed Navbar Container with semi-transparent background and blur
        <nav className="fixed top-3  rounded-2xl left-4 right-4   p-2  z-50 bg-slate-90 backdrop-blur-sm shadow-lg shadow inset-shadow-sm inset-shadow-blue-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo/Brand Name */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-black text-xl font-bold hover:text-blue-400 transition duration-150">
                            <span className="text-blue-700 bold"> my</span>Tracker
                        </a>
                    </div>
                    
                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className={
                                link.isButton ?"bg-blue-300 right-4 hover:bg-blue-600 inset-shadow-sm inset-shadow-blue-700  shadow-xl shadow-blue-700 hover:text-blue-400 text-black font-semibold py-2 px-4 rounded-lg transition duration-300"
                                : "text-black hover:text-blue-400 px-3 py-2  rounded-md text-base font-medium transition duration-150  "}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Hamburger/Close Icon) */}
                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white" 
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                        aria-expanded={mobileMenuIsOpen}
                    >
                        {mobileMenuIsOpen ? (
                            <X className="text-black w-6 h-6" /> // X Icon when menu is open
                        ) : (
                            <Menu className="text-black w-6 h-6" /> // Menu Icon when menu is closed
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel (Conditionally Rendered) */}
            {mobileMenuIsOpen && (
                <div 
                    className="md:hidden text-black  border-t border-gray-800 pb-2"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu} // Closes menu when link is clicked
                                className={
                                    link.isButton ? "block hover:bg-blue-300 bg-blue-200 rounded-2xl left-4 right   p-2  z-50 bg-slate-90 backdrop-blur-sm shadow-lg shadow inset-shadow-sm inset-shadow-blue-700 " :
                                    "block rounded-2xl left-4 right-40   p-2  z-50 bg-slate-90 backdrop-blur-sm shadow-lg shadow inset-shadow-sm inset-shadow-blue-700"}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}