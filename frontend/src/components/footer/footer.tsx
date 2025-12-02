function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 mt-12 pt-8 pb-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Links/Info */}
        <div className="flex justify-center space-x-6 mb-4 text-gray-400 text-sm">
          <a href="/about" className="hover:text-white transition duration-150">
            About Us
          </a>
          <a href="/support" className="hover:text-white transition duration-150">
            Support
          </a>
          <a href="/privacy" className="hover:text-white transition duration-150">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white transition duration-150">
            Terms
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mb-1">
          &copy; {currentYear} ExpenseTracker. All rights reserved.
        </p>

        {/* Developer Info */}
        <p className="text-gray-600 text-xs">
          Built by Cheruiyot
        </p>

      </div>
    </footer>
  );
}

export default Footer;