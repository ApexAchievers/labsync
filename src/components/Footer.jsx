import React from 'react';
import { Link } from 'react-router';
import { FlaskConical, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FlaskConical className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-semibold">LabSync</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Smart laboratory management for the modern healthcare industry
            </p>
          </div>


          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-semibold mb-3 sm:mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Services
                </a>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Demo
                </Link>
              </li>
            </ul>
          </div>


          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Overview
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support-page" className="text-gray-300 hover:text-white transition-colors text-sm block py-1">
                  Support
                </Link>
              </li>
            </ul>
          </div>


          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a
                  href="mailto:hello@labsync.com"
                  className="break-all hover:underline"
                >
                  hello@labsync.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span
                  className="hover:underline cursor-pointer"
                  onClick={() => {
                    if (window.confirm('Call +(233) 546-364-567?')) {
                      window.location.href = 'tel:+233546364567';
                    }
                  }}
                >
                  +(233) 546-364-567
                </span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Accra,+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Accra, Ghana
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2024 LabSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};