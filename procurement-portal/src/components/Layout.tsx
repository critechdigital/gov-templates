import { Link, useLocation } from 'react-router-dom';
import { FileText, Award, Users, Calendar, Building2, UserPlus } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50">
      <header className="bg-[#0038A8] text-white shadow-lg no-print">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-4 border-b border-blue-600">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Provincial Government of Bulacan</h1>
                <p className="text-blue-100 text-sm">Public Bidding and Procurement Portal</p>
              </div>
            </div>
          </div>
          <nav className="px-6">
            <div className="flex space-x-8 overflow-x-auto py-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
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
      <footer className="bg-slate-800 text-slate-300 py-8 mt-16 no-print">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white mb-2">Contact Information</h3>
              <p className="text-sm">Provincial Government of Bulacan</p>
              <p className="text-sm">Capitol Compound, Malolos City, Bulacan</p>
              <p className="text-sm">Phone: (044) 662-1103</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Quick Links</h3>
              <div className="space-y-1 text-sm">
                <a href="https://philgeps.gov.ph" target="_blank" className="block hover:text-white">PhilGEPS Portal</a>
                <a href="#" className="block hover:text-white">DBM Procurement Manual</a>
                <a href="#" className="block hover:text-white">RA 9184 (GPR Act)</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Legal Framework</h3>
              <div className="space-y-1 text-sm">
                <p>RA 9184 - Government Procurement Reform Act</p>
                <p>RA 12009 - Amendment to RA 9184</p>
                <p>IRR-A of RA 9184</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Provincial Government of Bulacan. All rights reserved.</p>
            <p>Powered by CriTech Digital Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}