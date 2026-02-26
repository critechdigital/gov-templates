import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Business Permit', href: '/business-permit' },
    { name: 'Building Permit', href: '/building-permit' },
    { name: 'Track Application', href: '/tracker' },
    { name: 'Requirements', href: '/requirements' },
    { name: 'Fee Schedule', href: '/fee-schedule' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Apple-style Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-[#E5E5E7]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Centered Logo Section */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0066CC] to-[#004499] rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">M</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-light text-[#1D1D1F]">Meycauayan</h1>
                  <p className="text-xs text-gray-500 -mt-1">Permit Services</p>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-5 py-2 text-sm font-normal rounded-full transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-[#0071E3] text-white'
                      : 'text-[#1D1D1F] hover:text-[#0071E3]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="p-2 rounded-full hover:bg-[#F5F5F7] transition-colors">
                <svg className="w-5 h-5 text-[#1D1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden border-t border-[#E5E5E7]/20 bg-white/90 backdrop-blur-xl">
          <div className="px-6 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-normal rounded-full transition-all duration-200 text-center ${
                    isActive(item.href)
                      ? 'bg-[#0071E3] text-white'
                      : 'text-[#1D1D1F] hover:text-[#0071E3]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Minimal Apple-style Footer */}
      <footer className="py-12 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <Link to="/requirements" className="hover:text-[#0071E3] transition-colors">
                Requirements
              </Link>
              <Link to="/fee-schedule" className="hover:text-[#0071E3] transition-colors">
                Fees
              </Link>
              <Link to="/tracker" className="hover:text-[#0071E3] transition-colors">
                Track
              </Link>
              <Link to="/contact" className="hover:text-[#0071E3] transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2026 City of Meycauayan</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;