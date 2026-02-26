import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, Phone, Mail, MapPin } from 'lucide-react';
import { lguInfo } from '../data/mockData';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/': return 'Home';
      case '/services': return 'Service Directory';
      case '/appointments': return 'Appointment Booking';
      case '/complaints': return 'Complaints and Feedback';
      case '/news': return 'News and Announcements';
      case '/emergency': return 'Emergency';
      case '/about': return 'About the LGU';
      default: return 'Page';
    }
  };

  const getBreadcrumbs = (pathname: string) => {
    const paths = pathname.split('/').filter(p => p);
    if (paths.length === 0) return [];
    
    return paths.map((_, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      const title = getPageTitle(href);
      return { href, title };
    });
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0038A8] text-white shadow-lg">
        {/* Top Bar */}
        <div className="bg-blue-900 py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  (044) 815-2300
                </span>
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  info@marilao.gov.ph
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Municipal Hall, Poblacion, Marilao, Bulacan
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0038A8] font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">{lguInfo.fullName}</h1>
                <p className="text-blue-100 text-sm">Citizen Services Portal</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-4 py-2 pl-10 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-blue-800">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8 overflow-x-auto">
              <Link to="/" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link to="/services" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                Services
              </Link>
              <Link to="/appointments" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                Appointments
              </Link>
              <Link to="/complaints" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                Complaints & Feedback
              </Link>
              <Link to="/news" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                News
              </Link>
              <Link to="/emergency" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                Emergency
              </Link>
              <Link to="/about" className="py-4 px-2 border-b-2 border-transparent hover:border-white transition-colors whitespace-nowrap">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-700 hover:text-[#0038A8]">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <span className="mx-2 text-gray-400">/</span>
                      {index === breadcrumbs.length - 1 ? (
                        <span className="text-gray-500">{crumb.title}</span>
                      ) : (
                        <Link to={crumb.href} className="text-gray-700 hover:text-[#0038A8]">
                          {crumb.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">{lguInfo.name}</h3>
              <p className="text-gray-300 mb-2">Municipal Hall, Poblacion</p>
              <p className="text-gray-300 mb-2">Marilao, Bulacan</p>
              <p className="text-gray-300">(044) 815-2300</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/services" className="block text-gray-300 hover:text-white">Service Directory</Link>
                <Link to="/appointments" className="block text-gray-300 hover:text-white">Book Appointment</Link>
                <Link to="/complaints" className="block text-gray-300 hover:text-white">Submit Complaint</Link>
                <Link to="/emergency" className="block text-gray-300 hover:text-white">Emergency Contacts</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Office Hours</h3>
              <p className="text-gray-300 mb-2">Monday - Friday</p>
              <p className="text-gray-300 mb-2">8:00 AM - 5:00 PM</p>
              <p className="text-gray-300">Lunch Break: 12:00 PM - 1:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-300">&copy; 2024 {lguInfo.fullName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;