import { useState } from 'react'
import { Search, Filter, Calendar, Building, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react'

interface ProcurementItem {
  id: string
  title: string
  category: string
  status: 'bidding' | 'awarded' | 'completed'
  amount: number
  contractor: string
  datePosted: string
  deadline: string
  description: string
  year: number
}

const Procurement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [yearFilter, setYearFilter] = useState('all')

  const procurementData: ProcurementItem[] = [
    {
      id: 'PRO-2026-001',
      title: 'Construction of Barangay Health Center - San Vicente',
      category: 'Infrastructure',
      status: 'bidding',
      amount: 12500000,
      contractor: 'TBD',
      datePosted: '2026-02-20',
      deadline: '2026-03-15',
      description: 'Construction of new barangay health center with medical equipment',
      year: 2026
    },
    {
      id: 'PRO-2026-002',
      title: 'Medical Supplies and Equipment',
      category: 'Health',
      status: 'bidding',
      amount: 3200000,
      contractor: 'TBD',
      datePosted: '2026-02-18',
      deadline: '2026-03-10',
      description: 'Procurement of medical supplies for all health centers',
      year: 2026
    },
    {
      id: 'PRO-2025-045',
      title: 'Road Improvement Project - Barangay Luna',
      category: 'Infrastructure',
      status: 'completed',
      amount: 8750000,
      contractor: 'ABC Construction Corp.',
      datePosted: '2025-08-15',
      deadline: '2025-09-10',
      description: 'Concrete road improvement and drainage system',
      year: 2025
    },
    {
      id: 'PRO-2025-044',
      title: 'School Building Renovation - San Rafael Elementary',
      category: 'Education',
      status: 'completed',
      amount: 6800000,
      contractor: 'BuildRight Contractors',
      datePosted: '2025-06-20',
      deadline: '2025-07-20',
      description: 'Classroom renovation and electrical system upgrade',
      year: 2025
    },
    {
      id: 'PRO-2026-003',
      title: 'Water System Upgrade - Phase 2',
      category: 'Infrastructure',
      status: 'awarded',
      amount: 15200000,
      contractor: 'AquaTech Solutions Inc.',
      datePosted: '2026-01-10',
      deadline: '2026-02-05',
      description: 'Expansion of water distribution system to 5 barangays',
      year: 2026
    },
    {
      id: 'PRO-2025-043',
      title: 'IT Equipment for Municipal Offices',
      category: 'Administration',
      status: 'completed',
      amount: 2100000,
      contractor: 'TechSupply Co.',
      datePosted: '2025-05-15',
      deadline: '2025-06-10',
      description: 'Computers, printers, and networking equipment',
      year: 2025
    },
    {
      id: 'PRO-2026-004',
      title: 'Disaster Preparedness Equipment',
      category: 'Public Safety',
      status: 'awarded',
      amount: 4500000,
      contractor: 'SafeGuard Equipment Corp.',
      datePosted: '2026-02-01',
      deadline: '2026-02-25',
      description: 'Emergency response vehicles and communication equipment',
      year: 2026
    },
    {
      id: 'PRO-2025-042',
      title: 'Agricultural Support Program',
      category: 'Agriculture',
      status: 'completed',
      amount: 5300000,
      contractor: 'FarmTech Solutions',
      datePosted: '2025-04-10',
      deadline: '2025-05-05',
      description: 'Farming equipment and fertilizers for local farmers',
      year: 2025
    },
    {
      id: 'PRO-2026-005',
      title: 'Municipal Market Renovation',
      category: 'Infrastructure',
      status: 'bidding',
      amount: 18900000,
      contractor: 'TBD',
      datePosted: '2026-02-25',
      deadline: '2026-03-20',
      description: 'Complete renovation of public market facilities',
      year: 2026
    },
    {
      id: 'PRO-2025-041',
      title: 'Street Lighting Project - Phase 3',
      category: 'Infrastructure',
      status: 'completed',
      amount: 7200000,
      contractor: 'Bright Light Systems',
      datePosted: '2025-03-20',
      deadline: '2025-04-15',
      description: 'LED street lighting installation in residential areas',
      year: 2025
    },
    {
      id: 'PRO-2026-006',
      title: 'Solid Waste Management Equipment',
      category: 'Environment',
      status: 'awarded',
      amount: 9800000,
      contractor: 'EcoWaste Solutions Inc.',
      datePosted: '2026-01-25',
      deadline: '2026-02-20',
      description: 'Garbage trucks and recycling facility equipment',
      year: 2026
    },
    {
      id: 'PRO-2025-040',
      title: 'Sports Complex Development',
      category: 'Sports',
      status: 'completed',
      amount: 22000000,
      contractor: 'Champion Builders Corp.',
      datePosted: '2025-01-15',
      deadline: '2025-02-10',
      description: 'Multi-purpose sports complex with gymnasium',
      year: 2025
    },
    {
      id: 'PRO-2026-007',
      title: 'Senior Citizens Support Program',
      category: 'Social Services',
      status: 'bidding',
      amount: 1800000,
      contractor: 'TBD',
      datePosted: '2026-02-22',
      deadline: '2026-03-18',
      description: 'Medical assistance and supplies for senior citizens',
      year: 2026
    },
    {
      id: 'PRO-2025-039',
      title: 'Public Transportation Terminal',
      category: 'Transportation',
      status: 'completed',
      amount: 16500000,
      contractor: 'Transit Hub Builders',
      datePosted: '2024-11-20',
      deadline: '2024-12-20',
      description: 'Modern jeepney and bus terminal facility',
      year: 2025
    },
    {
      id: 'PRO-2026-008',
      title: 'Fire Station Equipment Upgrade',
      category: 'Public Safety',
      status: 'awarded',
      amount: 8200000,
      contractor: 'FirePro Equipment Inc.',
      datePosted: '2026-01-30',
      deadline: '2026-02-28',
      description: 'Fire trucks and emergency response equipment',
      year: 2026
    },
    {
      id: 'PRO-2025-038',
      title: 'Environmental Monitoring System',
      category: 'Environment',
      status: 'completed',
      amount: 3900000,
      contractor: 'GreenTech Monitors',
      datePosted: '2025-09-05',
      deadline: '2025-10-05',
      description: 'Air and water quality monitoring equipment',
      year: 2025
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'bidding':
        return <Clock className="w-4 h-4 text-orange-500" />
      case 'awarded':
        return <AlertCircle className="w-4 h-4 text-blue-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const classes = {
      bidding: 'bg-orange-100 text-orange-800',
      awarded: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800'
    }[status]
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${classes}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status}</span>
      </span>
    )
  }

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString()}`
  }

  const filteredData = procurementData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.contractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter
    const matchesYear = yearFilter === 'all' || item.year.toString() === yearFilter
    
    return matchesSearch && matchesStatus && matchesCategory && matchesYear
  })

  const categories = [...new Set(procurementData.map(item => item.category))]
  const years = [...new Set(procurementData.map(item => item.year))].sort((a, b) => b - a)

  const statusCounts = {
    bidding: procurementData.filter(item => item.status === 'bidding').length,
    awarded: procurementData.filter(item => item.status === 'awarded').length,
    completed: procurementData.filter(item => item.status === 'completed').length
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Procurement Activities</h1>
        <p className="text-gray-600">Transparent procurement process and bidding information</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{procurementData.length}</h3>
              <p className="text-gray-600 font-medium">Total Procurements</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-50">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{statusCounts.bidding}</h3>
              <p className="text-gray-600 font-medium">Open Bidding</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{statusCounts.awarded}</h3>
              <p className="text-gray-600 font-medium">Awarded</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-50">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{statusCounts.completed}</h3>
              <p className="text-gray-600 font-medium">Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search procurements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="bidding">Bidding</option>
              <option value="awarded">Awarded</option>
              <option value="completed">Completed</option>
            </select>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year.toString()}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredData.length} of {procurementData.length} procurement activities
        </p>
      </div>

      {/* Procurement List */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  {getStatusBadge(item.status)}
                </div>
                
                <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {item.category}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {formatCurrency(item.amount)}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Posted: {item.datePosted}
                  </span>
                  {item.status === 'bidding' && (
                    <span className="flex items-center text-red-600">
                      <Clock className="w-4 h-4 mr-1" />
                      Deadline: {item.deadline}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Contractor: </span>
                    <span className="text-sm font-medium text-gray-900">
                      {item.contractor === 'TBD' ? 'To Be Determined' : item.contractor}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">ID: {item.id}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No procurement activities found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  )
}

export default Procurement