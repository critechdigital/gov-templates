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
    <header className="bg-[#2C001E] text-white shadow-lg rounded-b-xl">
      {/* Top Bar with City Info */}
      <div className="border-b border-[#77216F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-[#E95420] font-medium">Official Website</span>
              <span className="text-[#AEA79F]">|</span>
              <span>{cityInfo.phone}</span>
              <span className="text-[#AEA79F]">|</span>
              <span>{cityInfo.email}</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#E95420] font-medium">Current Term: {cityInfo.currentTerm}</span>
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
              <div className="w-12 h-12 bg-[#E95420] rounded-xl flex items-center justify-center shadow-md">
                <Building className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <Link to="/" className="text-xl font-bold text-white hover:text-[#E95420] transition-colors">
                {cityInfo.name}
              </Link>
              <div className="text-sm text-[#AEA79F]">Legislative Tracking System</div>
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
                    className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors ${
                      isActive
                        ? 'bg-[#E95420] text-white shadow-md'
                        : 'text-[#AEA79F] hover:bg-[#77216F] hover:text-white'
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
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#AEA79F] hover:text-white hover:bg-[#77216F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E95420]"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#77216F] rounded-b-xl">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E95420] text-white shadow-md'
                      : 'text-[#AEA79F] hover:bg-[#2C001E] hover:text-white'
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