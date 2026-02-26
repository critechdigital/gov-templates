import { Calendar, Users, Building, DollarSign, FileText, ExternalLink, TrendingUp } from 'lucide-react'

const Homepage = () => {
  const quickStats = [
    { label: 'Total Budget', value: '₱450M', subtext: '2025-2026', icon: DollarSign, color: 'blue' },
    { label: 'Active Projects', value: '23', subtext: 'Ongoing', icon: Building, color: 'green' },
    { label: 'Total Employees', value: '156', subtext: 'Government Staff', icon: Users, color: 'purple' },
    { label: 'FOI Requests', value: '47', subtext: 'This Year', icon: FileText, color: 'orange' },
  ]

  const recentAnnouncements = [
    {
      date: '2026-02-20',
      title: 'Public Bidding for Barangay Health Center Construction',
      description: 'Pre-bidding conference scheduled for March 5, 2026',
      category: 'Procurement'
    },
    {
      date: '2026-02-15',
      title: 'Quarterly Financial Report Released',
      description: 'Q4 2025 financial report now available for download',
      category: 'Finance'
    },
    {
      date: '2026-02-10',
      title: 'New Water System Project Approved',
      description: 'Barangay San Vicente water distribution system project approved',
      category: 'Projects'
    },
    {
      date: '2026-02-05',
      title: 'Annual Audit Report Published',
      description: 'COA audit findings for 2025 now accessible',
      category: 'Reports'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome to Our Transparency Portal</h1>
            <p className="text-xl text-blue-100 mb-4">
              Municipality of San Rafael, Bulacan
            </p>
            <p className="text-lg text-blue-100 max-w-2xl">
              Committed to transparent governance and public accountability. Access budget information, 
              procurement activities, project updates, and government reports in compliance with the 
              DILG Full Disclosure Policy.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">LGU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          const colorClasses = {
            blue: 'bg-blue-500 text-blue-600 bg-blue-50',
            green: 'bg-green-500 text-green-600 bg-green-50',
            purple: 'bg-purple-500 text-purple-600 bg-purple-50',
            orange: 'bg-orange-500 text-orange-600 bg-orange-50'
          }[stat.color] || 'bg-gray-500 text-gray-600 bg-gray-50'
          
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${colorClasses.split(' ')[2]}`}>
                  <Icon className={`w-6 h-6 ${colorClasses.split(' ')[1]}`} />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.subtext}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Announcements */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Recent Announcements
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentAnnouncements.map((announcement, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {announcement.category}
                      </span>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mt-1">{announcement.title}</h3>
                    <p className="text-gray-600 text-sm">{announcement.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                  View All Announcements
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Transparency Seal */}
        <div className="space-y-6">
          {/* Transparency Compliance */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Transparency Compliance</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">DILG Seal of Good Local Governance</h3>
                  <p className="text-sm text-gray-600">Certified 2025</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Budget Transparency</span>
                  <span className="text-sm font-medium text-green-600">Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Procurement Disclosure</span>
                  <span className="text-sm font-medium text-green-600">Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Full Disclosure Policy</span>
                  <span className="text-sm font-medium text-green-600">Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Quick Access</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">2025-2026 Annual Budget</span>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-600">₱450M Total Budget</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Submit FOI Request</span>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-600">Freedom of Information</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Project Status Tracker</span>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-600">23 Active Projects</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage