import { Calendar, Users, Building, DollarSign, FileText, ExternalLink, TrendingUp, Activity, Zap, Target, Award, ArrowUpRight, Play } from 'lucide-react'

const Homepage = () => {
  const quickStats = [
    { label: 'Total Budget', value: '₱450M', subtext: '2025-2026 Fiscal Year', icon: DollarSign, color: 'blue', trend: '+12%' },
    { label: 'Active Projects', value: '23', subtext: 'Infrastructure & Services', icon: Building, color: 'blue', trend: '+5 new' },
    { label: 'Government Staff', value: '156', subtext: 'Regular Employees', icon: Users, color: 'blue', trend: 'Fully staffed' },
    { label: 'FOI Requests', value: '47', subtext: 'Processed This Year', icon: FileText, color: 'teal', trend: '100% resolved' },
  ]

  const recentAnnouncements = [
    {
      date: '2026-02-20',
      title: 'Public Bidding for Barangay Health Center Construction',
      description: 'Pre-bidding conference scheduled for March 5, 2026. Total project cost: ₱15.8M',
      category: 'Procurement',
      priority: 'High',
      status: 'Active'
    },
    {
      date: '2026-02-15',
      title: 'Q4 2025 Financial Report Released',
      description: 'Comprehensive quarterly report showing 98% budget utilization efficiency',
      category: 'Finance',
      priority: 'Medium',
      status: 'Published'
    },
    {
      date: '2026-02-10',
      title: 'Barangay San Vicente Water System Project Approved',
      description: 'DepEd partnership for sustainable water distribution system implementation',
      category: 'Projects',
      priority: 'High',
      status: 'Approved'
    },
    {
      date: '2026-02-05',
      title: 'Annual COA Audit Report 2025 Published',
      description: 'Clean audit results with zero significant findings. Full transparency achieved.',
      category: 'Reports',
      priority: 'Low',
      status: 'Complete'
    }
  ]

  const performanceMetrics = [
    { label: 'Budget Utilization', value: '98%', icon: Target, color: 'blue' },
    { label: 'Project Completion', value: '94%', icon: Activity, color: 'blue' },
    { label: 'Citizen Satisfaction', value: '92%', icon: Award, color: 'blue' },
    { label: 'Digital Adoption', value: '87%', icon: Zap, color: 'teal' }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'red'
      case 'Medium': return 'orange'
      case 'Low': return 'green'
      default: return 'blue'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'blue'
      case 'Published': return 'green'
      case 'Approved': return 'purple'
      case 'Complete': return 'teal'
      default: return 'blue'
    }
  }

  return (
    <div className="max-w-none">
      {/* Microsoft Hero Banner */}
      <div className="ms-hero-banner mb-8">
        <div className="flex items-center justify-between relative z-10">
          <div className="max-w-4xl">
            <h1 className="ms-text-hero mb-4">
              Government Transparency 
              <span className="block">Made Simple</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-6 leading-relaxed">
              Municipality of San Rafael, Bulacan — Leading the way in transparent governance 
              and public accountability through digital innovation.
            </p>
            <div className="flex items-center space-x-4">
              <button className="ms-button px-8 py-4 text-base font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Explore Portal
              </button>
              <button className="px-8 py-4 text-base font-semibold text-white border-2 border-white border-opacity-30 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
                Download Reports
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          <div className="hidden xl:block relative">
            <div className="w-48 h-48 bg-white bg-opacity-10 rounded-2xl backdrop-blur-lg border border-white border-opacity-20">
              <div className="p-8 text-center text-white">
                <div className="text-4xl font-bold mb-2">2025</div>
                <div className="text-sm opacity-80">DILG Seal of</div>
                <div className="text-lg font-semibold">Good Governance</div>
                <div className="mt-4 w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Dashboard - Azure Portal Style */}
      <div className="ms-grid-dense ms-grid-4col mb-8">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className={`fluent-card fluent-card-${stat.color} p-6 group cursor-pointer`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-opacity-10 ${
                  stat.color === 'blue' ? 'bg-blue-500' :
                  stat.color === 'teal' ? 'bg-teal-500' :
                  stat.color === 'purple' ? 'bg-purple-500' :
                  stat.color === 'orange' ? 'bg-orange-500' : 'bg-gray-500'
                }`}>
                  <Icon className={`w-6 h-6 ms-chart-${stat.color}`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#201F1E]">{stat.value}</h3>
                <p className="font-semibold text-[#201F1E]">{stat.label}</p>
                <p className="text-sm text-[#323130]">{stat.subtext}</p>
                <div className={`ms-pill ms-pill-${stat.color} text-xs`}>
                  {stat.trend}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Command Bar */}
      <div className="ms-command-bar mb-6">
        <span className="text-sm font-semibold text-[#323130]">Quick Actions:</span>
        <button className="ms-command-button">
          <DollarSign className="w-4 h-4" />
          View Budget
        </button>
        <button className="ms-command-button">
          <FileText className="w-4 h-4" />
          Submit FOI
        </button>
        <button className="ms-command-button">
          <Building className="w-4 h-4" />
          Track Projects
        </button>
        <button className="ms-command-button">
          <TrendingUp className="w-4 h-4" />
          View Analytics
        </button>
      </div>

      <div className="ms-grid-dense" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Recent Announcements - Power BI Style */}
        <div className="fluent-card">
          <div className="px-6 py-5 border-b border-[#EDEBE9]">
            <div className="flex items-center justify-between">
              <h2 className="ms-text-subtitle flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-[#0078D4]" />
                Recent Announcements
              </h2>
              <div className="ms-pill ms-pill-blue">
                {recentAnnouncements.length} Active
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {recentAnnouncements.map((announcement, index) => (
                <div key={index} className={`fluent-card fluent-card-${getPriorityColor(announcement.priority)} p-5 hover:shadow-lg transition-all cursor-pointer group`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`ms-pill ms-pill-${getPriorityColor(announcement.priority)}`}>
                        {announcement.category}
                      </div>
                      <div className={`ms-pill ms-pill-${getStatusColor(announcement.status)}`}>
                        {announcement.status}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 font-mono">{announcement.date}</div>
                  </div>
                  <h3 className="font-bold text-[#201F1E] mb-2 group-hover:text-[#0078D4] transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-[#323130] text-sm leading-relaxed">{announcement.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#EDEBE9]">
              <button className="ms-button w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Announcements
              </button>
            </div>
          </div>
        </div>

        {/* Performance & Compliance */}
        <div className="space-y-6">
          {/* Performance Metrics */}
          <div className="fluent-card fluent-card-blue">
            <div className="px-6 py-5 border-b border-[#EDEBE9]">
              <h2 className="ms-text-subtitle">Performance Metrics</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-opacity-10 ${
                          metric.color === 'blue' ? 'bg-blue-500' :
                          metric.color === 'green' ? 'bg-green-500' :
                          metric.color === 'purple' ? 'bg-purple-500' :
                          metric.color === 'teal' ? 'bg-teal-500' : 'bg-gray-500'
                        }`}>
                          <Icon className={`w-4 h-4 ms-chart-${metric.color}`} />
                        </div>
                        <span className="font-medium text-[#323130]">{metric.label}</span>
                      </div>
                      <div className="text-xl font-bold text-[#201F1E]">{metric.value}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Transparency Compliance */}
          <div className="fluent-card fluent-card-teal">
            <div className="px-6 py-5 border-b border-[#EDEBE9]">
              <h2 className="ms-text-subtitle">Compliance Status</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#201F1E]">DILG Certified</h3>
                  <p className="text-sm text-[#323130]">Seal of Good Local Governance 2025</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Budget Transparency', status: 'Compliant' },
                  { label: 'Procurement Disclosure', status: 'Compliant' },
                  { label: 'Full Disclosure Policy', status: 'Compliant' },
                  { label: 'Citizen Charter', status: 'Updated' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-[#323130]">{item.label}</span>
                    <div className="ms-pill ms-pill-green">
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="fluent-card fluent-card-teal">
            <div className="px-6 py-5 border-b border-[#EDEBE9]">
              <h2 className="ms-text-subtitle">Quick Access</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {[
                  { title: '2025-2026 Annual Budget', subtitle: '₱450M Total Allocation', icon: DollarSign },
                  { title: 'Submit FOI Request', subtitle: 'Freedom of Information Portal', icon: FileText },
                  { title: 'Project Status Dashboard', subtitle: '23 Active Infrastructure Projects', icon: Building }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <button key={index} className="w-full text-left p-4 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-all group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-teal-100 rounded-lg">
                            <Icon className="w-4 h-4 text-teal-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#201F1E] group-hover:text-[#00B7C3] transition-colors">{item.title}</div>
                            <div className="text-sm text-[#323130]">{item.subtitle}</div>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage