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
    <div className="min-h-screen bg-white">
      {/* Philippine flag-inspired header stripe */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-white via-red-600 to-blue-600" 
           style={{background: 'linear-gradient(to right, #0038A8 33%, white 33%, white 67%, #CE1126 67%)'}}></div>
      
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Municipality of San Rafael, Bulacan</h1>
                <p className="text-sm text-gray-600">Transparency Portal</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <nav className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:top-18 md:bg-gray-50 md:border-r md:border-gray-200 md:pt-5">
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="px-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className={`mr-3 w-5 h-5 ${isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-blue-700'}`} />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          
          {/* Transparency Seal */}
          <div className="p-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Transparency Seal</p>
                  <p className="text-xs text-gray-600">DILG Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <nav className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="px-4 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      }`}
                    >
                      <Icon className={`mr-3 w-5 h-5 ${isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-blue-700'}`} />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 md:ml-64">
          <div className="py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout