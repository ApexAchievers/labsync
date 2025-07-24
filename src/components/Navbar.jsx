import { FlaskConical, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-xl px-4 sm:px-6 py-2">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <FlaskConical className="h-5 w-5 text-blue-600" />
      <span className="text-blue-600 text-lg font-semibold">LabSync</span>
    </div>

    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
      <a href="#hero" className="text-blue-600 hover:text-red-800 transition-colors text-sm">
        Home
      </a>
      <a href="#features" className="text-blue-600 hover:text-red-600 transition-colors text-sm">
        Features
      </a>
      <a href="#overview" className="text-blue-600 hover:text-red-600 transition-colors text-sm">
        Overview
      </a>
      <a href="#services" className="text-blue-600 hover:text-red-600 transition-colors text-sm">
        Services
      </a>
      <Link to="/contact" className="text-blue-600 hover:text-red-800 transition-colors text-sm">
  Contact
</Link>
      <Link to="/login">
    <button className="bg-blue-600 hover:bg-white hover:text-red-800 hover:border hover:border-red-800 text-white px-3 py-1.5 rounded-md transition-colors text-sm">
      Login
    </button>
  </Link>
    </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-600 hover:text-red-700 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4">
            <a 
              href="#hero" 
              className="text-blue-600 hover:text-red-700 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-blue-600 hover:text-red-700 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#overview" 
              className="text-blue-600 hover:text-red-700 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
            <a 
              href="#services" 
              className="text-blue-600 hover:text-red-700 transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <Link 
        to="/contact"
        className="text-blue-600 hover:text-red-700 transition-colors block py-2"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
        <button 
          className="bg-blue-600 hover:bg-white hover:text-red-800 hover:border hover:border-red-800 text-white px-4 py-2 rounded-md transition-colors self-start"
        >
          Login
        </button>
      </Link>
          </div>
        </div>
      )}
    </nav>
  );
};