import { useState } from 'react'
import { MapPin, Calendar, DollarSign, Building, User, Search, Filter, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

interface Project {
  id: string
  name: string
  category: string
  status: 'planning' | 'ongoing' | 'completed'
  location: string
  budget: number
  contractor: string
  startDate: string
  expectedCompletion: string
  actualCompletion?: string
  progress: number
  description: string
  beneficiaries: string
}

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const projectsData: Project[] = [
    {
      id: 'PROJ-2026-001',
      name: 'Multi-Purpose Community Center - Barangay Luna',
      category: 'Infrastructure',
      status: 'ongoing',
      location: 'Barangay Luna',
      budget: 18500000,
      contractor: 'Premier Construction Inc.',
      startDate: '2025-10-15',
      expectedCompletion: '2026-04-30',
      progress: 75,
      description: 'Construction of multi-purpose community center with event hall and meeting rooms',
      beneficiaries: 'Barangay Luna residents (2,850 people)'
    },
    {
      id: 'PROJ-2025-032',
      name: 'Water Distribution System - Phase 2',
      category: 'Infrastructure',
      status: 'completed',
      location: 'Barangays San Vicente, Santa Clara, Santo Domingo',
      budget: 24000000,
      contractor: 'AquaTech Solutions Inc.',
      startDate: '2024-08-01',
      expectedCompletion: '2025-12-31',
      actualCompletion: '2025-12-15',
      progress: 100,
      description: 'Installation of water pipes and distribution points to 3 barangays',
      beneficiaries: '8,400 residents across 3 barangays'
    },
    {
      id: 'PROJ-2026-002',
      name: 'Elementary School Building - San Rafael Central',
      category: 'Education',
      status: 'ongoing',
      location: 'Barangay Poblacion',
      budget: 15200000,
      contractor: 'EduBuild Contractors',
      startDate: '2025-11-20',
      expectedCompletion: '2026-05-30',
      progress: 60,
      description: 'Construction of new 2-story school building with 8 classrooms',
      beneficiaries: '450 elementary students'
    },
    {
      id: 'PROJ-2025-031',
      name: 'Road Concreting Project - Barangay San Miguel',
      category: 'Infrastructure',
      status: 'completed',
      location: 'Barangay San Miguel',
      budget: 12800000,
      contractor: 'RoadMaster Corp.',
      startDate: '2025-03-15',
      expectedCompletion: '2025-08-30',
      actualCompletion: '2025-08-20',
      progress: 100,
      description: '2.5km concrete road with proper drainage system',
      beneficiaries: '3,200 residents and daily commuters'
    },
    {
      id: 'PROJ-2026-003',
      name: 'Public Market Modernization',
      category: 'Infrastructure',
      status: 'planning',
      location: 'Barangay Poblacion',
      budget: 35000000,
      contractor: 'MarketPro Builders (Awarded)',
      startDate: '2026-04-01',
      expectedCompletion: '2027-02-28',
      progress: 5,
      description: 'Complete renovation and modernization of public market facilities',
      beneficiaries: '850 vendors and 15,000 daily customers'
    },
    {
      id: 'PROJ-2025-030',
      name: 'Health Center Upgrade - Barangay Santa Ana',
      category: 'Health',
      status: 'completed',
      location: 'Barangay Santa Ana',
      budget: 8500000,
      contractor: 'HealthFacility Builders',
      startDate: '2025-01-10',
      expectedCompletion: '2025-06-30',
      actualCompletion: '2025-06-15',
      progress: 100,
      description: 'Expansion and equipment upgrade of barangay health center',
      beneficiaries: '4,500 residents'
    },
    {
      id: 'PROJ-2026-004',
      name: 'Flood Control Project - Riverside Areas',
      category: 'Infrastructure',
      status: 'ongoing',
      location: 'Barangays San Jose, San Luis, San Pedro',
      budget: 28900000,
      contractor: 'FloodGuard Engineering',
      startDate: '2025-09-01',
      expectedCompletion: '2026-06-30',
      progress: 40,
      description: 'Construction of flood barriers and improved drainage systems',
      beneficiaries: '12,000 residents in flood-prone areas'
    },
    {
      id: 'PROJ-2025-029',
      name: 'Sports Complex Development',
      category: 'Sports & Recreation',
      status: 'completed',
      location: 'Barangay San Rafael Norte',
      budget: 22000000,
      contractor: 'Champion Builders Corp.',
      startDate: '2024-06-15',
      expectedCompletion: '2025-12-31',
      actualCompletion: '2025-11-30',
      progress: 100,
      description: 'Multi-purpose gymnasium with basketball court and fitness facilities',
      beneficiaries: 'All municipality residents (45,000 people)'
    },
    {
      id: 'PROJ-2026-005',
      name: 'Senior Citizens Center',
      category: 'Social Services',
      status: 'planning',
      location: 'Barangay Poblacion',
      budget: 9200000,
      contractor: 'TBD',
      startDate: '2026-06-01',
      expectedCompletion: '2026-12-31',
      progress: 10,
      description: 'Dedicated facility for senior citizens activities and health services',
      beneficiaries: '1,200 senior citizens'
    },
    {
      id: 'PROJ-2025-028',
      name: 'Street Lighting Expansion - Phase 3',
      category: 'Infrastructure',
      status: 'completed',
      location: 'Various Barangays',
      budget: 7200000,
      contractor: 'Bright Light Systems',
      startDate: '2025-02-01',
      expectedCompletion: '2025-07-31',
      actualCompletion: '2025-07-15',
      progress: 100,
      description: 'Installation of LED street lights in 150 locations',
      beneficiaries: '25,000 residents'
    },
    {
      id: 'PROJ-2026-006',
      name: 'Agricultural Support Center',
      category: 'Agriculture',
      status: 'ongoing',
      location: 'Barangay San Rafael Sur',
      budget: 11800000,
      contractor: 'AgroTech Builders',
      startDate: '2025-12-01',
      expectedCompletion: '2026-07-31',
      progress: 25,
      description: 'Training and equipment center for local farmers',
      beneficiaries: '800 registered farmers'
    },
    {
      id: 'PROJ-2025-027',
      name: 'Waste Management Facility',
      category: 'Environment',
      status: 'completed',
      location: 'Barangay San Antonio',
      budget: 16500000,
      contractor: 'EcoWaste Solutions Inc.',
      startDate: '2024-09-15',
      expectedCompletion: '2025-08-31',
      actualCompletion: '2025-08-10',
      progress: 100,
      description: 'Materials recovery facility and composting area',
      beneficiaries: 'All municipality residents (45,000 people)'
    },
    {
      id: 'PROJ-2026-007',
      name: 'Youth Development Center',
      category: 'Social Services',
      status: 'planning',
      location: 'Barangay San Rafael Norte',
      budget: 13500000,
      contractor: 'YouthSpace Builders (Under Evaluation)',
      startDate: '2026-08-01',
      expectedCompletion: '2027-03-31',
      progress: 15,
      description: 'Skills training and recreational facility for youth',
      beneficiaries: '3,500 youth aged 15-25'
    },
    {
      id: 'PROJ-2025-026',
      name: 'Emergency Operations Center',
      category: 'Public Safety',
      status: 'completed',
      location: 'Municipal Hall Complex',
      budget: 8900000,
      contractor: 'SafeGuard Builders',
      startDate: '2024-11-01',
      expectedCompletion: '2025-09-30',
      actualCompletion: '2025-09-15',
      progress: 100,
      description: 'Modern command center for disaster response coordination',
      beneficiaries: 'All municipality residents (45,000 people)'
    },
    {
      id: 'PROJ-2026-008',
      name: 'Renewable Energy Project - Solar Farm',
      category: 'Environment',
      status: 'ongoing',
      location: 'Barangay San Pablo',
      budget: 32000000,
      contractor: 'GreenPower Corp.',
      startDate: '2025-10-01',
      expectedCompletion: '2026-08-31',
      progress: 35,
      description: '2MW solar farm to power municipal facilities',
      beneficiaries: 'Municipal facilities and 500 households'
    },
    {
      id: 'PROJ-2025-025',
      name: 'Fire Station Modernization',
      category: 'Public Safety',
      status: 'completed',
      location: 'Barangay Poblacion',
      budget: 12200000,
      contractor: 'FirePro Builders Inc.',
      startDate: '2024-12-01',
      expectedCompletion: '2025-10-31',
      actualCompletion: '2025-10-20',
      progress: 100,
      description: 'Renovation and equipment upgrade of main fire station',
      beneficiaries: 'All municipality residents (45,000 people)'
    },
    {
      id: 'PROJ-2026-009',
      name: 'Digital Library and Learning Hub',
      category: 'Education',
      status: 'ongoing',
      location: 'Barangay Poblacion',
      budget: 9800000,
      contractor: 'TechEducation Builders',
      startDate: '2025-11-15',
      expectedCompletion: '2026-05-15',
      progress: 50,
      description: 'Modern library with computer lab and internet connectivity',
      beneficiaries: '5,000 students and researchers'
    },
    {
      id: 'PROJ-2025-024',
      name: 'Tourism Information Center',
      category: 'Tourism',
      status: 'completed',
      location: 'Municipal Boundary - Highway',
      budget: 5800000,
      contractor: 'Tourist Hub Builders',
      startDate: '2025-04-01',
      expectedCompletion: '2025-11-30',
      actualCompletion: '2025-11-15',
      progress: 100,
      description: 'Welcome center with tourist information and local products display',
      beneficiaries: 'Tourists and local businesses'
    },
    {
      id: 'PROJ-2026-010',
      name: 'Riverbank Rehabilitation',
      category: 'Environment',
      status: 'planning',
      location: 'San Rafael River',
      budget: 19200000,
      contractor: 'RiverCare Engineering (Under Bidding)',
      startDate: '2026-05-01',
      expectedCompletion: '2027-04-30',
      progress: 8,
      description: 'Riverbank protection and mangrove reforestation project',
      beneficiaries: '20,000 residents along the riverbank'
    },
    {
      id: 'PROJ-2025-023',
      name: 'Public Transportation Terminal',
      category: 'Transportation',
      status: 'completed',
      location: 'Barangay San Rafael Centro',
      budget: 16500000,
      contractor: 'Transit Hub Builders',
      startDate: '2024-10-15',
      expectedCompletion: '2025-09-30',
      actualCompletion: '2025-09-20',
      progress: 100,
      description: 'Modern terminal for buses and jeepneys with passenger amenities',
      beneficiaries: '8,000 daily commuters'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planning':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'ongoing':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const classes = {
      planning: 'bg-yellow-100 text-yellow-800',
      ongoing: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800'
    }[status]
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${classes}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status}</span>
      </span>
    )
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-600'
    if (progress >= 75) return 'bg-blue-600'
    if (progress >= 50) return 'bg-yellow-600'
    if (progress >= 25) return 'bg-orange-600'
    return 'bg-red-600'
  }

  const formatCurrency = (amount: number) => {
    return `₱${amount.toLocaleString()}`
  }

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.contractor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    
    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = [...new Set(projectsData.map(project => project.category))]

  const statusCounts = {
    planning: projectsData.filter(project => project.status === 'planning').length,
    ongoing: projectsData.filter(project => project.status === 'ongoing').length,
    completed: projectsData.filter(project => project.status === 'completed').length
  }

  const totalBudget = projectsData.reduce((sum, project) => sum + project.budget, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Development Projects</h1>
        <p className="text-gray-600">Infrastructure and development projects across all barangays</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{projectsData.length}</h3>
              <p className="text-gray-600 font-medium">Total Projects</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-50">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{statusCounts.planning}</h3>
              <p className="text-gray-600 font-medium">Planning</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{statusCounts.ongoing}</h3>
              <p className="text-gray-600 font-medium">Ongoing</p>
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
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-50">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900">{formatCurrency(totalBudget)}</h3>
              <p className="text-gray-600 font-medium">Total Budget</p>
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
              placeholder="Search projects..."
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
              <option value="planning">Planning</option>
              <option value="ongoing">Ongoing</option>
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
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredProjects.length} of {projectsData.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {project.category}
                  </span>
                  {getStatusBadge(project.status)}
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{project.location}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>Budget: {formatCurrency(project.budget)}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <User className="w-4 h-4 mr-2" />
                <span>Contractor: {project.contractor}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {project.startDate} → {project.actualCompletion || project.expectedCompletion}
                  {project.actualCompletion && ' (Completed)'}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-bold text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`} 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="flex items-center text-sm text-gray-600">
                <Building className="w-4 h-4 mr-2" />
                <span><strong>Beneficiaries:</strong> {project.beneficiaries}</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Project ID: {project.id}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  )
}

export default Projects