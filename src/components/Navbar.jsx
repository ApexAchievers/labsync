import { FlaskConical, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FlaskConical className="h-6 w-6 text-[#4CAF50]" />
          <span className="text-black text-xl font-semibold">LabSync</span>
        </div>
        
        {/* Desktop Navigation Links and Login Button */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Features
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            Contact
          </a>
          <button className="bg-[#4CAF50] hover:bg-[#C2A344] text-white px-4 py-2 rounded-md transition-colors">
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-gray-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-black hover:text-gray-600 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              className="bg-[#4CAF50] hover:bg-[#C2A344] text-white px-4 py-2 rounded-md transition-colors self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};