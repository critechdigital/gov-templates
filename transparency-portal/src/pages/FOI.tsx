import { useState } from 'react'
import { FileText, Search, Clock, CheckCircle, XCircle, AlertCircle, User, Calendar, MessageCircle } from 'lucide-react'

interface FOIRequest {
  id: string
  referenceNumber: string
  subject: string
  requester: string
  dateSubmitted: string
  status: 'pending' | 'processing' | 'approved' | 'denied' | 'completed'
  category: string
  responseDeadline: string
  lastUpdate: string
  description: string
}

const FOI = () => {
  const [activeTab, setActiveTab] = useState<'submit' | 'track' | 'faq'>('submit')
  const [trackingNumber, setTrackingNumber] = useState('')
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    category: '',
    description: '',
    preferredFormat: 'email'
  })

  const foiRequests: FOIRequest[] = [
    {
      id: '001',
      referenceNumber: 'FOI-2026-001',
      subject: 'Annual Budget Allocation for Education',
      requester: 'Juan dela Cruz',
      dateSubmitted: '2026-02-20',
      status: 'completed',
      category: 'Budget and Finance',
      responseDeadline: '2026-03-05',
      lastUpdate: '2026-02-28',
      description: 'Request for detailed breakdown of education budget allocation for 2025-2026'
    },
    {
      id: '002',
      referenceNumber: 'FOI-2026-002',
      subject: 'List of Government Contractors (2025)',
      requester: 'Maria Santos',
      dateSubmitted: '2026-02-18',
      status: 'processing',
      category: 'Procurement',
      responseDeadline: '2026-03-03',
      lastUpdate: '2026-02-25',
      description: 'Complete list of contractors who won government bids in 2025'
    },
    {
      id: '003',
      referenceNumber: 'FOI-2026-003',
      subject: 'Municipal Ordinances on Environmental Protection',
      requester: 'Environmental Watch Group',
      dateSubmitted: '2026-02-15',
      status: 'approved',
      category: 'Legal Documents',
      responseDeadline: '2026-03-01',
      lastUpdate: '2026-02-26',
      description: 'All ordinances related to environmental protection passed in the last 5 years'
    },
    {
      id: '004',
      referenceNumber: 'FOI-2026-004',
      subject: 'Salary Schedule of Municipal Employees',
      requester: 'Citizens Transparency Coalition',
      dateSubmitted: '2026-02-12',
      status: 'denied',
      category: 'Personnel',
      responseDeadline: '2026-02-26',
      lastUpdate: '2026-02-24',
      description: 'Request for salary schedule and compensation details of municipal employees'
    },
    {
      id: '005',
      referenceNumber: 'FOI-2026-005',
      subject: 'Infrastructure Project Reports (2025)',
      requester: 'Local Journalists Association',
      dateSubmitted: '2026-02-10',
      status: 'completed',
      category: 'Projects and Infrastructure',
      responseDeadline: '2026-02-24',
      lastUpdate: '2026-02-22',
      description: 'Progress reports and completion certificates for all 2025 infrastructure projects'
    }
  ]

  const categories = [
    'Budget and Finance',
    'Procurement',
    'Legal Documents',
    'Personnel',
    'Projects and Infrastructure',
    'Health and Social Services',
    'Environment',
    'Education',
    'Other'
  ]

  const faqItems = [
    {
      question: 'What is the Freedom of Information (FOI) Act?',
      answer: 'The FOI Act ensures public access to government information, promoting transparency and accountability in public administration.'
    },
    {
      question: 'How long does it take to process an FOI request?',
      answer: 'Under the FOI Act, government agencies have 15 working days to respond to requests. Complex requests may require additional time with proper justification.'
    },
    {
      question: 'Is there a fee for filing an FOI request?',
      answer: 'Filing an FOI request is free. However, reasonable fees may apply for reproduction, copying, or delivery of requested documents.'
    },
    {
      question: 'What information can I request?',
      answer: 'You can request any government records, documents, papers, reports, and data. Some exceptions include classified information, personal data, and ongoing investigations.'
    },
    {
      question: 'Can my FOI request be denied?',
      answer: 'Requests may be denied if they involve classified information, violate privacy rights, or fall under other legal exemptions. Denials must be justified in writing.'
    },
    {
      question: 'How can I track my FOI request?',
      answer: 'Use your reference number in the "Track Request" tab to check the status and updates of your submitted request.'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'processing':
        return <AlertCircle className="w-4 h-4 text-blue-500" />
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'denied':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    const classes = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      approved: 'bg-green-100 text-green-800',
      completed: 'bg-green-100 text-green-900',
      denied: 'bg-red-100 text-red-800'
    }[status]
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${classes}`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status}</span>
      </span>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('FOI Request submitted successfully! Your reference number is FOI-2026-006')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      subject: '',
      category: '',
      description: '',
      preferredFormat: 'email'
    })
  }

  const trackedRequest = foiRequests.find(req => req.referenceNumber === trackingNumber)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Freedom of Information (FOI) Requests</h1>
        <p className="text-gray-600">Submit requests for government information and track their status</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">47</h3>
              <p className="text-gray-600 font-medium">Total Requests</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-50">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-gray-600 font-medium">Pending</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-50">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
              <p className="text-gray-600 font-medium">Processing</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-50">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">25</h3>
              <p className="text-gray-600 font-medium">Completed</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-50">
              <XCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">2</h3>
              <p className="text-gray-600 font-medium">Denied</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'submit', label: 'Submit Request', icon: FileText },
              { id: 'track', label: 'Track Request', icon: Search },
              { id: 'faq', label: 'FAQ', icon: MessageCircle }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Submit Request Tab */}
      {activeTab === 'submit' && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit FOI Request</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject/Title of Request *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please provide a detailed description of the information you are requesting..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Response Format</label>
              <select
                name="preferredFormat"
                value={formData.preferredFormat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="email">Email</option>
                <option value="pickup">Pickup at Office</option>
                <option value="mail">Regular Mail</option>
              </select>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Important Notes:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Requests will be processed within 15 working days</li>
                <li>• You will receive a reference number for tracking</li>
                <li>• Some information may be exempted under the FOI Act</li>
                <li>• Reproduction fees may apply for physical documents</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Track Request Tab */}
      {activeTab === 'track' && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Track Your Request</h2>
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your reference number (e.g., FOI-2026-001)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Track
              </button>
            </div>

            {trackingNumber && trackedRequest && (
              <div className="mt-8 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{trackedRequest.subject}</h3>
                    <p className="text-gray-600">Reference: {trackedRequest.referenceNumber}</p>
                  </div>
                  {getStatusBadge(trackedRequest.status)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span>Requester: {trackedRequest.requester}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Submitted: {trackedRequest.dateSubmitted}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Deadline: {trackedRequest.responseDeadline}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span>Last Update: {trackedRequest.lastUpdate}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Description:</h4>
                  <p className="text-gray-600">{trackedRequest.description}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Status Timeline:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Request submitted and acknowledged</span>
                    </div>
                    {trackedRequest.status !== 'pending' && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Request under review</span>
                      </div>
                    )}
                    {(trackedRequest.status === 'completed' || trackedRequest.status === 'denied') && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Response prepared and sent</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {trackingNumber && !trackedRequest && (
              <div className="mt-8 text-center py-8">
                <XCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Request Not Found</h3>
                <p className="text-gray-600">Please check your reference number and try again.</p>
              </div>
            )}
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent FOI Requests</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {foiRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{request.subject}</h3>
                      {getStatusBadge(request.status)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-2">
                      <span>Reference: {request.referenceNumber}</span>
                      <span>Category: {request.category}</span>
                      <span>Submitted: {request.dateSubmitted}</span>
                    </div>
                    <p className="text-sm text-gray-600">{request.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Need More Help?</h3>
            <p className="text-blue-800 mb-4">
              If you have additional questions about the FOI process, please contact our FOI Officer:
            </p>
            <div className="space-y-1 text-blue-800">
              <p><strong>FOI Officer:</strong> Ms. Patricia Gonzales</p>
              <p><strong>Email:</strong> foi.officer@sanrafael.gov.ph</p>
              <p><strong>Phone:</strong> (044) 123-4580</p>
              <p><strong>Office:</strong> Records Management Division, Municipal Hall</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FOI