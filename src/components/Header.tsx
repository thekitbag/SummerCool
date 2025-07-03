import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Snowflake, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="frost-glass shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 cool-hover">
            <div className="relative">
              <Snowflake className="h-8 w-8 text-blue-600 ice-float cool-glow" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                SummerCool
              </span>
              <span className="text-sm text-blue-500 block leading-tight font-medium">.co.uk</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 cool-hover ${
                location.pathname === '/' ? 'text-blue-600 cool-glow' : 'text-gray-700'
              }`}
            >
              ❄️ Browse Arctic Units
            </Link>
            <div className="text-sm text-gray-600 flex items-center space-x-1 frost-glass px-3 py-1 rounded-full">
              <Mail className="h-4 w-4 text-blue-500" />
              <span>hello@summercool.co.uk</span>
            </div>
          </nav>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 cool-hover">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    
  );
};

export default Header;