import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gavel, Users, FileText, Calendar, Building, Scale } from 'lucide-react';
import { cityInfo } from '../data';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Building },
    { name: 'Ordinances', href: '/ordinances', icon: Scale },
    { name: 'Resolutions', href: '/resolutions', icon: FileText },
    { name: 'Pending Bills', href: '/pending-legislation', icon: Gavel },
    { name: 'Sessions', href: '/sessions', icon: Calendar },
    { name: 'Committees', href: '/committees', icon: Users },
    { name: 'Council', href: '/council', icon: Users },
  ];

  return (
    <header className="bg-[#0D1B2A] text-white shadow-lg">
      {/* Top Bar with City Info */}
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-[#FFD700]">Official Website</span>
              <span>|</span>
              <span>{cityInfo.phone}</span>
              <span>|</span>
              <span>{cityInfo.email}</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#FFD700]">Current Term: {cityInfo.currentTerm}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                <Building className="h-8 w-8 text-[#0D1B2A]" />
              </div>
            </div>
            <div className="ml-4">
              <Link to="/" className="text-xl font-bold text-white hover:text-[#FFD700] transition-colors">
                {cityInfo.name}
              </Link>
              <div className="text-sm text-gray-300">Legislative Tracking System</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors ${
                      isActive
                        ? 'bg-[#FFD700] text-[#0D1B2A]'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FFD700] text-[#0D1B2A]'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;