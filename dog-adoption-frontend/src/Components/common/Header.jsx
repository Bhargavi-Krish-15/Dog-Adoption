import React from 'react';
import { Heart, User, Phone, PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ADOGTION
              </h1>
              <p className="text-sm text-gray-600">Find Your Perfect Companion</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
            >
              <User className="w-4 h-4 text-gray-600 group-hover:text-blue-500" />
              <span className="text-gray-700 font-medium group-hover:text-blue-500">Member Login</span>
            </Link>
            <Link 
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;