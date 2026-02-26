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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0038A8] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#0038A8] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">LGU</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold">City of Meycauayan</h1>
                <p className="text-sm text-blue-100">Province of Bulacan</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'bg-white text-[#0038A8]'
                      : 'text-white hover:bg-blue-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'bg-white text-[#0038A8]'
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-300">City Hall, Meycauayan, Bulacan</p>
              <p className="text-gray-300">Phone: (044) 123-4567</p>
              <p className="text-gray-300">Email: permits@meycauayan.gov.ph</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <p className="text-gray-300">Monday - Friday: 7:00 AM - 5:00 PM</p>
              <p className="text-gray-300">Saturday: 8:00 AM - 12:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/requirements" className="block text-gray-300 hover:text-white">
                  Document Requirements
                </Link>
                <Link to="/fee-schedule" className="block text-gray-300 hover:text-white">
                  Fee Schedule
                </Link>
                <Link to="/tracker" className="block text-gray-300 hover:text-white">
                  Track Application
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 City of Meycauayan, Bulacan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;