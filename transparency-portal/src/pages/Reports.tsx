import { useState } from 'react'
import { Download, Calendar, FileText, BarChart3, Shield, Eye, Filter, Search } from 'lucide-react'

interface Report {
  id: string
  title: string
  category: string
  year: number
  type: 'Annual Report' | 'Audit Report' | 'Financial Report' | 'Accomplishment Report' | 'Compliance Report'
  date: string
  size: string
  format: 'PDF' | 'XLSX' | 'DOCX'
  description: string
  downloads: number
  featured?: boolean
}

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [yearFilter, setYearFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const reportsData: Report[] = [
    // 2025 Reports
    {
      id: '001',
      title: 'Annual Report 2025 - Municipality of San Rafael',
      category: 'Governance',
      year: 2025,
      type: 'Annual Report',
      date: '2026-01-31',
      size: '5.2 MB',
      format: 'PDF',
      description: 'Comprehensive annual report covering all municipal activities, achievements, and financial performance for 2025',
      downloads: 1247,
      featured: true
    },
    {
      id: '002',
      title: 'COA Audit Report 2025',
      category: 'Finance',
      year: 2025,
      type: 'Audit Report',
      date: '2026-02-15',
      size: '3.8 MB',
      format: 'PDF',
      description: 'Commission on Audit findings and recommendations for fiscal year 2025',
      downloads: 892,
      featured: true
    },
    {
      id: '003',
      title: 'Financial Statement and Budget Performance 2025',
      category: 'Finance',
      year: 2025,
      type: 'Financial Report',
      date: '2026-01-15',
      size: '2.1 MB',
      format: 'XLSX',
      description: 'Detailed financial statements and budget utilization report for 2025',
      downloads: 756
    },
    {
      id: '004',
      title: 'Infrastructure Development Accomplishment Report 2025',
      category: 'Infrastructure',
      year: 2025,
      type: 'Accomplishment Report',
      date: '2026-01-20',
      size: '4.5 MB',
      format: 'PDF',
      description: 'Summary of completed infrastructure projects and development initiatives in 2025',
      downloads: 623
    },
    {
      id: '005',
      title: 'Health Services Annual Report 2025',
      category: 'Health',
      year: 2025,
      type: 'Annual Report',
      date: '2026-02-01',
      size: '2.8 MB',
      format: 'PDF',
      description: 'Health programs, services, and outcomes delivered across all barangays in 2025',
      downloads: 445
    },
    {
      id: '006',
      title: 'Environmental Compliance Report 2025',
      category: 'Environment',
      year: 2025,
      type: 'Compliance Report',
      date: '2026-01-25',
      size: '1.9 MB',
      format: 'PDF',
      description: 'Environmental protection activities and compliance with DENR requirements',
      downloads: 334
    },

    // 2024 Reports
    {
      id: '007',
      title: 'Annual Report 2024 - Municipality of San Rafael',
      category: 'Governance',
      year: 2024,
      type: 'Annual Report',
      date: '2025-01-31',
      size: '4.9 MB',
      format: 'PDF',
      description: 'Comprehensive annual report covering all municipal activities for 2024',
      downloads: 2156,
      featured: true
    },
    {
      id: '008',
      title: 'COA Audit Report 2024',
      category: 'Finance',
      year: 2024,
      type: 'Audit Report',
      date: '2025-02-20',
      size: '3.5 MB',
      format: 'PDF',
      description: 'Commission on Audit findings for fiscal year 2024',
      downloads: 1834
    },
    {
      id: '009',
      title: 'Education Sector Performance Report 2024',
      category: 'Education',
      year: 2024,
      type: 'Accomplishment Report',
      date: '2025-01-15',
      size: '2.7 MB',
      format: 'PDF',
      description: 'Education programs, school facilities, and student outcomes for 2024',
      downloads: 789
    },
    {
      id: '010',
      title: 'Disaster Risk Reduction Management Report 2024',
      category: 'Public Safety',
      year: 2024,
      type: 'Accomplishment Report',
      date: '2025-02-05',
      size: '3.2 MB',
      format: 'PDF',
      description: 'DRRM activities, emergency response operations, and preparedness measures',
      downloads: 567
    },

    // 2023 Reports
    {
      id: '011',
      title: 'Annual Report 2023 - Municipality of San Rafael',
      category: 'Governance',
      year: 2023,
      type: 'Annual Report',
      date: '2024-01-31',
      size: '4.6 MB',
      format: 'PDF',
      description: 'Comprehensive annual report for 2023 municipal activities',
      downloads: 3241
    },
    {
      id: '012',
      title: 'COA Audit Report 2023',
      category: 'Finance',
      year: 2023,
      type: 'Audit Report',
      date: '2024-02-25',
      size: '3.1 MB',
      format: 'PDF',
      description: 'Commission on Audit findings for fiscal year 2023',
      downloads: 2789
    },
    {
      id: '013',
      title: 'Social Services Accomplishment Report 2023',
      category: 'Social Services',
      year: 2023,
      type: 'Accomplishment Report',
      date: '2024-01-20',
      size: '2.4 MB',
      format: 'PDF',
      description: 'Social welfare programs and assistance provided in 2023',
      downloads: 891
    },
    {
      id: '014',
      title: 'Tourism Development Report 2023',
      category: 'Tourism',
      year: 2023,
      type: 'Accomplishment Report',
      date: '2024-02-10',
      size: '3.7 MB',
      format: 'PDF',
      description: 'Tourism initiatives, visitor statistics, and promotion activities for 2023',
      downloads: 456
    },

    // 2022 Reports
    {
      id: '015',
      title: 'Annual Report 2022 - Municipality of San Rafael',
      category: 'Governance',
      year: 2022,
      type: 'Annual Report',
      date: '2023-01-31',
      size: '4.3 MB',
      format: 'PDF',
      description: 'Comprehensive annual report for 2022 municipal activities',
      downloads: 4567
    },
    {
      id: '016',
      title: 'COA Audit Report 2022',
      category: 'Finance',
      year: 2022,
      type: 'Audit Report',
      date: '2023-02-28',
      size: '2.9 MB',
      format: 'PDF',
      description: 'Commission on Audit findings for fiscal year 2022',
      downloads: 3892
    },
    {
      id: '017',
      title: 'Agriculture Development Report 2022',
      category: 'Agriculture',
      year: 2022,
      type: 'Accomplishment Report',
      date: '2023-01-25',
      size: '2.6 MB',
      format: 'PDF',
      description: 'Agricultural programs, crop production, and farmer support initiatives',
      downloads: 723
    },

    // 2021 Reports
    {
      id: '018',
      title: 'Annual Report 2021 - Municipality of San Rafael',
      category: 'Governance',
      year: 2021,
      type: 'Annual Report',
      date: '2022-01-31',
      size: '4.1 MB',
      format: 'PDF',
      description: 'Comprehensive annual report for 2021 municipal activities',
      downloads: 5234
    },
    {
      id: '019',
      title: 'COVID-19 Response Report 2021',
      category: 'Health',
      year: 2021,
      type: 'Accomplishment Report',
      date: '2022-02-15',
      size: '3.8 MB',
      format: 'PDF',
      description: 'Municipal response to COVID-19 pandemic including health measures and assistance programs',
      downloads: 2145,
      featured: true
    },
    {
      id: '020',
      title: 'COA Audit Report 2021',
      category: 'Finance',
      year: 2021,
      type: 'Audit Report',
      date: '2022-03-01',
      size: '2.7 MB',
      format: 'PDF',
      description: 'Commission on Audit findings for fiscal year 2021',
      downloads: 4156
    }
  ]

  const categories = [...new Set(reportsData.map(report => report.category))]
  const years = [...new Set(reportsData.map(report => report.year))].sort((a, b) => b - a)
  const types = [...new Set(reportsData.map(report => report.type))]

  const filteredReports = reportsData.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = yearFilter === 'all' || report.year.toString() === yearFilter
    const matchesCategory = categoryFilter === 'all' || report.category === categoryFilter
    const matchesType = typeFilter === 'all' || report.type === typeFilter
    
    return matchesSearch && matchesYear && matchesCategory && matchesType
  })

  const featuredReports = reportsData.filter(report => report.featured)
  const totalDownloads = reportsData.reduce((sum, report) => sum + report.downloads, 0)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Annual Report':
        return <FileText className="w-5 h-5 text-blue-600" />
      case 'Audit Report':
        return <Shield className="w-5 h-5 text-red-600" />
      case 'Financial Report':
        return <BarChart3 className="w-5 h-5 text-green-600" />
      case 'Accomplishment Report':
        return <Eye className="w-5 h-5 text-purple-600" />
      case 'Compliance Report':
        return <Shield className="w-5 h-5 text-orange-600" />
      default:
        return <FileText className="w-5 h-5 text-gray-600" />
    }
  }

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'PDF':
        return 'bg-red-100 text-red-800'
      case 'XLSX':
        return 'bg-green-100 text-green-800'
      case 'DOCX':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports and Documents</h1>
        <p className="text-gray-600">Access municipal reports, audits, and official documents</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{reportsData.length}</h3>
              <p className="text-gray-600 font-medium">Total Reports</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-50">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{totalDownloads.toLocaleString()}</h3>
              <p className="text-gray-600 font-medium">Total Downloads</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-50">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{years.length}</h3>
              <p className="text-gray-600 font-medium">Years Available</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-50">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{categories.length}</h3>
              <p className="text-gray-600 font-medium">Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Reports */}
      {featuredReports.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Reports</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredReports.map((report) => (
              <div key={report.id} className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-6 text-white">
                <div className="flex items-center mb-4">
                  {getTypeIcon(report.type)}
                  <span className="ml-2 text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded">
                    {report.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{report.title}</h3>
                <p className="text-blue-100 text-sm mb-4">{report.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-100">
                    <p>{report.downloads.toLocaleString()} downloads</p>
                    <p>{report.date}</p>
                  </div>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4">
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
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredReports.length} of {reportsData.length} reports
        </p>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {getTypeIcon(report.type)}
                  <h3 className="text-lg font-bold text-gray-900 ml-2">{report.title}</h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {report.category}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getFormatColor(report.format)}`}>
                    {report.format}
                  </span>
                  <span className="text-sm text-gray-600">Year: {report.year}</span>
                  <span className="text-sm text-gray-600">Size: {report.size}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{report.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Published: {report.date}
                  </span>
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {report.downloads.toLocaleString()} downloads
                  </span>
                </div>
              </div>
              
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No reports found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
        </div>
      )}

      {/* Archive Notice */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Archive Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Document Retention Policy</h3>
            <p className="text-gray-600 text-sm mb-4">
              All municipal reports and documents are maintained according to the National Archives 
              retention schedule. Reports older than 10 years may be archived but remain accessible upon request.
            </p>
            
            <h3 className="font-semibold text-gray-900 mb-2">Requesting Additional Documents</h3>
            <p className="text-gray-600 text-sm">
              If you need reports or documents not available online, please submit a Freedom of Information (FOI) request 
              through our FOI portal or contact the Records Management Office.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
            <div className="space-y-2 text-gray-600 text-sm">
              <p><strong>Records Management Office</strong></p>
              <p>Municipal Hall, Ground Floor</p>
              <p>Phone: (044) 123-4590</p>
              <p>Email: records@sanrafael.gov.ph</p>
              <p>Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports