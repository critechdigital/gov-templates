import { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, AlertCircle, User, Calendar } from 'lucide-react';

interface Application {
  trackingNumber: string;
  applicantName: string;
  permitType: string;
  status: 'Submitted' | 'Under Review' | 'Inspection' | 'Approved' | 'Denied';
  submissionDate: string;
  estimatedCompletion: string;
  officerAssigned: string;
  lastUpdate: string;
  statusHistory: {
    status: string;
    date: string;
    note?: string;
  }[];
  businessName?: string;
  totalFee: number;
  paymentStatus: 'Pending' | 'Paid' | 'Overdue';
}

const ApplicationTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<'tracking' | 'name'>('tracking');
  const [searchResult, setSearchResult] = useState<Application | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  // Mock applications data
  const mockApplications: Application[] = [
    {
      trackingNumber: 'BP-123456',
      applicantName: 'Juan Dela Cruz',
      businessName: 'JDC General Merchandise',
      permitType: 'Business Permit',
      status: 'Under Review',
      submissionDate: '2026-02-20',
      estimatedCompletion: '2026-02-28',
      officerAssigned: 'Maria Santos',
      lastUpdate: '2026-02-24',
      totalFee: 1550,
      paymentStatus: 'Paid',
      statusHistory: [
        { status: 'Submitted', date: '2026-02-20', note: 'Application received and assigned tracking number' },
        { status: 'Under Review', date: '2026-02-22', note: 'Document verification in progress' },
      ],
    },
    {
      trackingNumber: 'BLD-789012',
      applicantName: 'Maria Garcia',
      permitType: 'Building Permit',
      status: 'Inspection',
      submissionDate: '2026-02-15',
      estimatedCompletion: '2026-02-25',
      officerAssigned: 'Roberto Cruz',
      lastUpdate: '2026-02-23',
      totalFee: 8500,
      paymentStatus: 'Paid',
      statusHistory: [
        { status: 'Submitted', date: '2026-02-15', note: 'Building permit application received' },
        { status: 'Under Review', date: '2026-02-18', note: 'Plans reviewed and approved by architect' },
        { status: 'Inspection', date: '2026-02-22', note: 'Site inspection scheduled for February 25' },
      ],
    },
    {
      trackingNumber: 'BP-345678',
      applicantName: 'Ana Reyes',
      businessName: 'Ana\'s Bakery',
      permitType: 'Business Permit',
      status: 'Approved',
      submissionDate: '2026-02-10',
      estimatedCompletion: '2026-02-20',
      officerAssigned: 'Carlos Lopez',
      lastUpdate: '2026-02-19',
      totalFee: 750,
      paymentStatus: 'Paid',
      statusHistory: [
        { status: 'Submitted', date: '2026-02-10', note: 'Renewal application submitted' },
        { status: 'Under Review', date: '2026-02-12', note: 'Document review completed' },
        { status: 'Inspection', date: '2026-02-15', note: 'Site inspection passed' },
        { status: 'Approved', date: '2026-02-19', note: 'Permit approved and ready for release' },
      ],
    },
    {
      trackingNumber: 'BP-901234',
      applicantName: 'Pedro Martinez',
      businessName: 'PM Auto Parts',
      permitType: 'Business Permit',
      status: 'Denied',
      submissionDate: '2026-02-05',
      estimatedCompletion: '2026-02-15',
      officerAssigned: 'Lisa Fernandez',
      lastUpdate: '2026-02-14',
      totalFee: 2000,
      paymentStatus: 'Pending',
      statusHistory: [
        { status: 'Submitted', date: '2026-02-05', note: 'New business permit application' },
        { status: 'Under Review', date: '2026-02-08', note: 'Missing required documents identified' },
        { status: 'Denied', date: '2026-02-14', note: 'Application denied due to incomplete zoning clearance' },
      ],
    },
    {
      trackingNumber: 'BLD-567890',
      applicantName: 'Jose Villanueva',
      permitType: 'Building Permit',
      status: 'Submitted',
      submissionDate: '2026-02-25',
      estimatedCompletion: '2026-03-05',
      officerAssigned: 'Anna Diaz',
      lastUpdate: '2026-02-25',
      totalFee: 12500,
      paymentStatus: 'Paid',
      statusHistory: [
        { status: 'Submitted', date: '2026-02-25', note: 'Application submitted for residential building permit' },
      ],
    },
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setError('');
    setSearchResult(null);

    setTimeout(() => {
      const result = mockApplications.find(app => {
        if (searchType === 'tracking') {
          return app.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return app.applicantName.toLowerCase().includes(searchTerm.toLowerCase());
        }
      });

      if (result) {
        setSearchResult(result);
      } else {
        setError('No application found. Please check your search term and try again.');
      }
      setIsSearching(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Submitted':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'Under Review':
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'Inspection':
        return <Search className="w-5 h-5 text-purple-500" />;
      case 'Approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Denied':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Inspection':
        return 'bg-purple-100 text-purple-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Denied':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Tracker</h1>
        <p className="text-gray-600 mb-8">
          Track the status of your permit and licensing applications
        </p>

        {/* Search Form */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Application</h2>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by:
              </label>
              <div className="flex space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="searchType"
                    value="tracking"
                    checked={searchType === 'tracking'}
                    onChange={(e) => setSearchType(e.target.value as 'tracking' | 'name')}
                    className="mr-2"
                  />
                  <span>Tracking Number</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="searchType"
                    value="name"
                    checked={searchType === 'name'}
                    onChange={(e) => setSearchType(e.target.value as 'tracking' | 'name')}
                    className="mr-2"
                  />
                  <span>Applicant Name</span>
                </label>
              </div>
              
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  searchType === 'tracking' 
                    ? 'Enter tracking number (e.g., BP-123456)' 
                    : 'Enter applicant name'
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
              />
            </div>
            
            <button
              onClick={handleSearch}
              disabled={!searchTerm.trim() || isSearching}
              className={`px-6 py-2 rounded-md font-medium flex items-center space-x-2 ${
                !searchTerm.trim() || isSearching
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#0038A8] text-white hover:bg-blue-700'
              }`}
            >
              <Search size={20} />
              <span>{isSearching ? 'Searching...' : 'Search'}</span>
            </button>
          </div>
        </div>

        {/* Search Results */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
            <div className="flex items-center space-x-3">
              <XCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {searchResult && (
          <div className="space-y-6">
            {/* Application Overview */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {searchResult.trackingNumber}
                  </h2>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{searchResult.applicantName}</span>
                    </div>
                    {searchResult.businessName && (
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4"></span>
                        <span>Business: {searchResult.businessName}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(searchResult.status)}`}>
                    {getStatusIcon(searchResult.status)}
                    <span className="ml-2">{searchResult.status}</span>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${getPaymentStatusBadge(searchResult.paymentStatus)}`}>
                    <span>Payment: {searchResult.paymentStatus}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Permit Type:</span>
                  <p className="font-medium">{searchResult.permitType}</p>
                </div>
                <div>
                  <span className="text-gray-600">Submission Date:</span>
                  <p className="font-medium">
                    {new Date(searchResult.submissionDate).toLocaleDateString('en-PH')}
                  </p>
                </div>
                <div>
                  <span className="text-gray-600">Expected Completion:</span>
                  <p className="font-medium">
                    {new Date(searchResult.estimatedCompletion).toLocaleDateString('en-PH')}
                  </p>
                </div>
                <div>
                  <span className="text-gray-600">Officer Assigned:</span>
                  <p className="font-medium">{searchResult.officerAssigned}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <div>
                  <span className="text-gray-600 text-sm">Total Fee:</span>
                  <span className="font-semibold text-lg text-[#0038A8] ml-2">
                    ₱{searchResult.totalFee.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>Last updated: {new Date(searchResult.lastUpdate).toLocaleDateString('en-PH')}</span>
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Status Timeline</h3>
              
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-6">
                  {searchResult.statusHistory.map((item, index) => (
                    <div key={index} className="relative flex items-start space-x-4">
                      <div className="relative z-10 bg-white border-4 border-gray-200 rounded-full p-2">
                        {getStatusIcon(item.status)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-gray-900">{item.status}</h4>
                          <span className="text-sm text-gray-500">
                            {new Date(item.date).toLocaleDateString('en-PH')}
                          </span>
                        </div>
                        {item.note && (
                          <p className="text-sm text-gray-600 mt-1">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {/* Future steps (if not completed) */}
                  {searchResult.status !== 'Approved' && searchResult.status !== 'Denied' && (
                    <>
                      {searchResult.status !== 'Inspection' && (
                        <div className="relative flex items-start space-x-4 opacity-50">
                          <div className="relative z-10 bg-white border-4 border-gray-200 rounded-full p-2">
                            <Search className="w-5 h-5 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-400">Inspection</h4>
                            <p className="text-sm text-gray-400 mt-1">Site inspection will be scheduled</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="relative flex items-start space-x-4 opacity-50">
                        <div className="relative z-10 bg-white border-4 border-gray-200 rounded-full p-2">
                          <CheckCircle className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-400">Approval</h4>
                          <p className="text-sm text-gray-400 mt-1">Final approval and permit release</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {searchResult.status === 'Approved' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Permit Ready for Release</h3>
                    <p className="text-green-800">Your permit has been approved and is ready for pickup.</p>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700">
                    Download Permit
                  </button>
                </div>
              </div>
            )}

            {searchResult.status === 'Denied' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-red-900">Application Denied</h3>
                    <p className="text-red-800">Your application was denied. You may resubmit after addressing the issues.</p>
                  </div>
                  <button className="bg-[#0038A8] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                    Resubmit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Sample Applications Table */}
        {!searchResult && !error && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Applications</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tracking Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submission Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockApplications.slice(0, 10).map((app) => (
                    <tr key={app.trackingNumber} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {app.trackingNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.applicantName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.permitType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(app.submissionDate).toLocaleDateString('en-PH')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTracker;