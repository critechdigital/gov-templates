import { Link, useLocation } from 'react-router-dom';
import { FileText, Award, Users, Calendar, Building2, UserPlus, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Building2 },
    { path: '/opportunities', label: 'Bid Opportunities', icon: FileText },
    { path: '/awarded-contracts', label: 'Awarded Contracts', icon: Award },
    { path: '/bac-composition', label: 'BAC Composition', icon: Users },
    { path: '/procurement-plan', label: 'Procurement Plan', icon: Calendar },
    { path: '/supplier-registration', label: 'Supplier Registration', icon: UserPlus },
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F2]">
      {/* White Header */}
      <header className="bg-white shadow-sm no-print">
        {/* Yellow accent bar */}
        <div className="h-1 bg-[#FFC220]"></div>
        
        <div className="max-w-7xl mx-auto">
          {/* Main header content */}
          <div className="px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0071DC] rounded-lg flex items-center justify-center">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#2E2F32]">Provincial Government of Bulacan</h1>
                <p className="text-[#74767C] text-sm">Public Bidding & Procurement Portal</p>
              </div>
            </div>
          </div>
          
          {/* Blue navigation bar */}
          <nav className="bg-[#0071DC] px-6">
            <div className="flex space-x-1 overflow-x-auto py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-white text-[#0071DC] shadow-sm'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      <footer className="bg-white py-12 mt-16 border-t border-gray-200 no-print">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-[#2E2F32] mb-4 text-[#0071DC]">Contact Information</h3>
              <div className="space-y-2 text-sm text-[#74767C]">
                <p>Provincial Government of Bulacan</p>
                <p>Capitol Compound, Malolos City, Bulacan</p>
                <p>Phone: (044) 662-1103</p>
                <p>Email: bac@bulacan.gov.ph</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#0071DC] mb-4">External Resources</h3>
              <div className="space-y-2 text-sm">
                <a href="https://philgeps.gov.ph" target="_blank" className="block text-[#74767C] hover:text-[#0071DC] transition-colors">
                  PhilGEPS Portal
                </a>
                <a href="#" className="block text-[#74767C] hover:text-[#0071DC] transition-colors">
                  DBM Procurement Manual
                </a>
                <a href="#" className="block text-[#74767C] hover:text-[#0071DC] transition-colors">
                  RA 9184 (GPR Act)
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#0071DC] mb-4">Legal Framework</h3>
              <div className="space-y-2 text-sm text-[#74767C]">
                <p>RA 9184 - Government Procurement Reform Act</p>
                <p>RA 12009 - Amendment to RA 9184</p>
                <p>IRR-A of RA 9184</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-[#74767C]">
              © 2025 Provincial Government of Bulacan. All rights reserved.
            </p>
            <p className="text-sm text-[#0071DC] mt-1">
              Powered by CriTech Digital Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}