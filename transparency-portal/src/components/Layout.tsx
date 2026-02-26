import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Home, DollarSign, ShoppingCart, Building, Users, FileText, BarChart3, ChevronLeft, ChevronRight, Settings, Bell } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const ribbonTabs = [
    { path: '/', label: 'Home', icon: Home, color: 'blue' },
    { path: '/budget', label: 'Budget', icon: DollarSign, color: 'purple' },
    { path: '/procurement', label: 'Procurement', icon: ShoppingCart, color: 'teal' },
    { path: '/projects', label: 'Projects', icon: Building, color: 'orange' },
    { path: '/officials', label: 'Officials', icon: Users, color: 'green' },
    { path: '/foi', label: 'FOI', icon: FileText, color: 'blue' },
    { path: '/reports', label: 'Reports', icon: BarChart3, color: 'purple' },
  ]

  const sidebarItems = [
    { path: '/', label: 'Dashboard', icon: Home, description: 'Overview & Stats' },
    { path: '/budget', label: 'Budget', icon: DollarSign, description: '₱450M Budget' },
    { path: '/procurement', label: 'Procurement', icon: ShoppingCart, description: 'Bid & Awards' },
    { path: '/projects', label: 'Projects', icon: Building, description: '23 Active' },
    { path: '/officials', label: 'Officials', icon: Users, description: 'Directory' },
    { path: '/foi', label: 'FOI Requests', icon: FileText, description: '47 This Year' },
    { path: '/reports', label: 'Reports', icon: BarChart3, description: 'Analytics' },
  ]

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Microsoft Header */}
      <header className="ms-header-blur sticky top-0 z-40">
        {/* Top Brand Bar */}
        <div className="h-12 bg-gradient-to-r from-[#5B2D8E] to-[#0078D4] flex items-center px-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-sm font-semibold">Municipality of San Rafael, Bulacan</h1>
            </div>
          </div>
          
          <div className="ml-auto flex items-center space-x-2">
            <button className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ribbon Navigation */}
        <div className="ms-ribbon">
          <div className="flex items-center overflow-x-auto">
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="hidden lg:flex p-3 text-gray-600 hover:text-[#0078D4] hover:bg-[#F3F2F1] transition-colors ml-2"
            >
              {isSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            
            <div className="flex">
              {ribbonTabs.map((tab) => {
                const Icon = tab.icon
                const isActive = location.pathname === tab.path
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className={`ms-ribbon-tab ${isActive ? 'active' : ''}`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </Link>
                )
              })}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden ml-auto mr-4 p-2 rounded-lg text-gray-600 hover:text-[#0078D4] hover:bg-[#F3F2F1] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Teams/Outlook Style */}
        <aside className={`hidden lg:flex flex-col bg-[#F8F9FA] border-r border-[#EDEBE9] transition-all duration-300 ${
          isSidebarCollapsed ? 'w-16' : 'w-80'
        } fixed left-0 top-24 bottom-0 z-30`}>
          
          {/* Command Panel Header */}
          {!isSidebarCollapsed && (
            <div className="p-6 border-b border-[#EDEBE9]">
              <h2 className="ms-text-subtitle">Transparency Portal</h2>
              <p className="text-sm text-gray-600 mt-1">Government Information Hub</p>
            </div>
          )}

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`ms-sidebar-item ${isActive ? 'active' : ''} ${
                      isSidebarCollapsed ? 'justify-center px-3' : ''
                    }`}
                    title={isSidebarCollapsed ? item.label : undefined}
                  >
                    <Icon className={`icon ${isActive ? 'text-[#0078D4]' : ''}`} />
                    {!isSidebarCollapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-xs text-gray-500 truncate">{item.description}</div>
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Transparency Seal - Bottom */}
          {!isSidebarCollapsed && (
            <div className="p-4 border-t border-[#EDEBE9]">
              <div className="fluent-card-green p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#323130]">DILG Compliant</p>
                    <p className="text-xs text-gray-600">Transparency Seal 2025</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
            <nav className="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl">
              <div className="p-6 border-b border-[#EDEBE9] bg-gradient-to-r from-[#5B2D8E] to-[#0078D4]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-semibold text-white">Menu</h2>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 space-y-2 flex-1 overflow-y-auto">
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`ms-sidebar-item ${isActive ? 'active' : ''}`}
                    >
                      <Icon className={`icon ${isActive ? 'text-[#0078D4]' : ''}`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-80'
        }`} style={{ marginTop: '96px' }}>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout