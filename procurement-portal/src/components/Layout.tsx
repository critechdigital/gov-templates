import { Link, useLocation } from 'react-router-dom';
import { FileText, Award, Users, Calendar, Building2, UserPlus, Terminal } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0D1117]">
      <header className="bg-[#0D1117] text-[#E6EDF3] border-b border-[#30363D] no-print">
        <div className="border-b-2 border-[#4ADE80]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-4 border-b border-[#30363D]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#161B22] border-2 border-[#4ADE80] rounded-none flex items-center justify-center terminal-glow">
                <Terminal className="w-8 h-8 text-[#4ADE80]" />
              </div>
              <div>
                <h1 className="text-xl font-mono font-bold text-[#4ADE80]">{">"}_ PROVINCIAL_GOVERNMENT_BULACAN</h1>
                <p className="text-[#8B949E] text-sm font-mono">public_bidding_procurement_portal v2.1.0</p>
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
                    className={`flex items-center gap-2 px-3 py-2 rounded-none text-sm font-mono font-medium whitespace-nowrap transition-colors border ${
                      isActive
                        ? 'bg-[#4ADE80]/20 text-[#4ADE80] border-[#4ADE80]'
                        : 'text-[#8B949E] border-transparent hover:text-[#4ADE80] hover:bg-[#161B22] hover:border-[#4ADE80]/50'
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
      <footer className="bg-[#161B22] text-[#8B949E] py-8 mt-16 border-t border-[#30363D] no-print">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-[#E6EDF3] mb-2 font-mono">[CONTACT_INFO]</h3>
              <p className="text-sm font-mono">Provincial Government of Bulacan</p>
              <p className="text-sm font-mono">Capitol Compound, Malolos City, Bulacan</p>
              <p className="text-sm font-mono">Phone: (044) 662-1103</p>
            </div>
            <div>
              <h3 className="font-bold text-[#E6EDF3] mb-2 font-mono">[EXTERNAL_LINKS]</h3>
              <div className="space-y-1 text-sm">
                <a href="https://philgeps.gov.ph" target="_blank" className="block hover:text-[#4ADE80] font-mono transition-colors">→ PhilGEPS Portal</a>
                <a href="#" className="block hover:text-[#4ADE80] font-mono transition-colors">→ DBM Procurement Manual</a>
                <a href="#" className="block hover:text-[#4ADE80] font-mono transition-colors">→ RA 9184 (GPR Act)</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#E6EDF3] mb-2 font-mono">[LEGAL_FRAMEWORK]</h3>
              <div className="space-y-1 text-sm font-mono">
                <p>• RA 9184 - Government Procurement Reform Act</p>
                <p>• RA 12009 - Amendment to RA 9184</p>
                <p>• IRR-A of RA 9184</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#30363D] mt-8 pt-8 text-center text-sm">
            <p className="font-mono">© 2025 Provincial Government of Bulacan. All rights reserved.</p>
            <p className="font-mono text-[#4ADE80]">Powered by CriTech Digital Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}