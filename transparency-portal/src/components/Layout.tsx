import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Home, DollarSign, ShoppingCart, Building, Users, FileText, BarChart3 } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/budget', label: 'Budget', icon: DollarSign },
    { path: '/procurement', label: 'Procurement', icon: ShoppingCart },
    { path: '/projects', label: 'Projects', icon: Building },
    { path: '/officials', label: 'Officials', icon: Users },
    { path: '/foi', label: 'FOI Requests', icon: FileText },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Microsoft Blue Top Accent */}
      <div className="h-1 bg-[#0078D4]"></div>
      
      {/* Header - Microsoft Fluent Design */}
      <header className="ms-header-blur sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#0078D4] rounded-lg flex items-center justify-center shadow-sm">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#323130]">Municipality of San Rafael, Bulacan</h1>
                <p className="text-sm text-gray-600">Transparency Portal</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#323130] hover:bg-[#F3F2F1] transition-colors ms-focus"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <nav className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-17 md:bg-white md:border-r md:border-[#EDEBE9] md:pt-6">
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="px-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all ms-focus ${
                      isActive
                        ? 'bg-[#F3F2F1] text-[#0078D4] border-l-3 border-[#0078D4] shadow-sm'
                        : 'text-[#323130] hover:text-[#0078D4] hover:bg-[#F3F2F1]'
                    }`}
                  >
                    <Icon className={`mr-3 w-5 h-5 ${isActive ? 'text-[#0078D4]' : 'text-gray-500 group-hover:text-[#0078D4]'}`} />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          
          {/* Transparency Seal */}
          <div className="p-4">
            <div className="fluent-card p-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-[#323130]">Transparency Seal</p>
                  <p className="text-xs text-gray-600">DILG Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <nav className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl">
              <div className="p-4 border-b border-[#EDEBE9]">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#323130]">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-600 hover:text-[#323130] hover:bg-[#F3F2F1] transition-colors ms-focus"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all ms-focus ${
                        isActive
                          ? 'bg-[#F3F2F1] text-[#0078D4]'
                          : 'text-[#323130] hover:text-[#0078D4] hover:bg-[#F3F2F1]'
                      }`}
                    >
                      <Icon className={`mr-3 w-5 h-5 ${isActive ? 'text-[#0078D4]' : 'text-gray-500 group-hover:text-[#0078D4]'}`} />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 md:ml-64 bg-[#F3F2F1]">
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout