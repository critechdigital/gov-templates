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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#232F3E] text-white shadow-lg">
        {/* Top Bar */}
        <div className="bg-[#161E2D] py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between text-sm aws-dense">
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
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FF9900] rounded flex items-center justify-center">
                <span className="text-[#232F3E] font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-lg font-bold aws-dense">{lguInfo.fullName}</h1>
                <p className="text-gray-300 text-xs">Citizen Services Portal</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-3 py-2 pl-9 text-sm rounded border border-[#D5D9D9] text-[#16191F] focus:outline-none focus:ring-1 focus:ring-[#FF9900] focus:border-[#FF9900]"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-[#FF9900] hover:text-[#232F3E] rounded transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-[#1A252F] border-t border-[#D5D9D9] border-opacity-20">
          <div className="container mx-auto px-4">
            <div className="flex space-x-6 overflow-x-auto">
              <Link to="/" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link to="/services" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                Services
              </Link>
              <Link to="/appointments" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                Appointments
              </Link>
              <Link to="/complaints" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                Complaints & Feedback
              </Link>
              <Link to="/news" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                News
              </Link>
              <Link to="/emergency" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                Emergency
              </Link>
              <Link to="/about" className="py-3 px-2 text-sm font-medium border-b-2 border-transparent hover:border-[#FF9900] hover:text-[#FF9900] transition-colors whitespace-nowrap">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="bg-[#F0F2F2] border-b border-[#D5D9D9]">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex aws-breadcrumb" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-[#FF9900] hover:text-[#007185]">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <span className="mx-1 text-[#16191F]">&gt;</span>
                      {index === breadcrumbs.length - 1 ? (
                        <span className="text-[#16191F] font-medium">{crumb.title}</span>
                      ) : (
                        <Link to={crumb.href} className="text-[#FF9900] hover:text-[#007185]">
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
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#232F3E] text-white py-6 mt-8 border-t border-[#D5D9D9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-sm mb-3">{lguInfo.name}</h3>
              <p className="text-gray-300 mb-1 text-sm">Municipal Hall, Poblacion</p>
              <p className="text-gray-300 mb-1 text-sm">Marilao, Bulacan</p>
              <p className="text-gray-300 text-sm">(044) 815-2300</p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-1">
                <Link to="/services" className="block text-gray-300 hover:text-[#FF9900] text-sm">Service Directory</Link>
                <Link to="/appointments" className="block text-gray-300 hover:text-[#FF9900] text-sm">Book Appointment</Link>
                <Link to="/complaints" className="block text-gray-300 hover:text-[#FF9900] text-sm">Submit Complaint</Link>
                <Link to="/emergency" className="block text-gray-300 hover:text-[#FF9900] text-sm">Emergency Contacts</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-3">Office Hours</h3>
              <p className="text-gray-300 mb-1 text-sm">Monday - Friday</p>
              <p className="text-gray-300 mb-1 text-sm">8:00 AM - 5:00 PM</p>
              <p className="text-gray-300 text-sm">Lunch Break: 12:00 PM - 1:00 PM</p>
            </div>
          </div>
          <div className="border-t border-[#1A252F] mt-6 pt-3 text-center">
            <p className="text-gray-300 text-xs">&copy; 2024 {lguInfo.fullName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;