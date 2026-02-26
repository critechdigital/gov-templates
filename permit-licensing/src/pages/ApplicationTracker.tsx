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
        return <Clock className="w-5 h-5 text-amber-500" />;
      case 'Under Review':
        return <AlertCircle className="w-5 h-5 text-[#0066CC]" />;
      case 'Inspection':
        return <Search className="w-5 h-5 text-purple-500" />;
      case 'Approved':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'Denied':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Under Review':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Inspection':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Approved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Denied':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Overdue':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-4">
            Application Tracker
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Track the status of your permit and licensing applications
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10 mb-8">
          <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Search Application</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-4">
                Search by:
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="tracking"
                    checked={searchType === 'tracking'}
                    onChange={(e) => setSearchType(e.target.value as 'tracking' | 'name')}
                    className="w-4 h-4 text-[#0066CC] border-[#E5E5E7] focus:ring-[#0066CC] mr-3"
                  />
                  <span className="text-[#1D1D1F]">Tracking Number</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="name"
                    checked={searchType === 'name'}
                    onChange={(e) => setSearchType(e.target.value as 'tracking' | 'name')}
                    className="w-4 h-4 text-[#0066CC] border-[#E5E5E7] focus:ring-[#0066CC] mr-3"
                  />
                  <span className="text-[#1D1D1F]">Applicant Name</span>
                </label>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  searchType === 'tracking' 
                    ? 'Enter tracking number (e.g., BP-123456)' 
                    : 'Enter applicant name'
                }
                className="flex-1 border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
              />
              
              <button
                onClick={handleSearch}
                disabled={!searchTerm.trim() || isSearching}
                className={`px-8 py-4 rounded-full font-medium flex items-center space-x-3 transition-all shadow-sm ${
                  !searchTerm.trim() || isSearching
                    ? 'bg-[#F5F5F7] text-gray-400 cursor-not-allowed'
                    : 'bg-[#0066CC] text-white hover:bg-[#004499]'
                }`}
              >
                <Search size={20} />
                <span>{isSearching ? 'Searching...' : 'Search'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {error && (
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-4">
              <XCircle className="w-6 h-6 text-red-500" />
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        {searchResult && (
          <div className="space-y-8">
            {/* Application Overview */}
            <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-light text-[#1D1D1F] mb-4">
                    {searchResult.trackingNumber}
                  </h2>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <User size={18} />
                      <span>{searchResult.applicantName}</span>
                    </div>
                    {searchResult.businessName && (
                      <div className="flex items-center space-x-3">
                        <span className="w-4 h-4"></span>
                        <span>Business: {searchResult.businessName}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3 mt-6 lg:mt-0">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full border font-medium ${getStatusBadge(searchResult.status)}`}>
                    {getStatusIcon(searchResult.status)}
                    <span className="ml-2">{searchResult.status}</span>
                  </div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full border font-medium ${getPaymentStatusBadge(searchResult.paymentStatus)}`}>
                    <span>Payment: {searchResult.paymentStatus}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <span className="block text-gray-500 text-sm mb-1">Permit Type</span>
                  <p className="font-medium text-[#1D1D1F]">{searchResult.permitType}</p>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-gray-500 text-sm mb-1">Submission Date</span>
                  <p className="font-medium text-[#1D1D1F]">
                    {new Date(searchResult.submissionDate).toLocaleDateString('en-PH')}
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-gray-500 text-sm mb-1">Expected Completion</span>
                  <p className="font-medium text-[#1D1D1F]">
                    {new Date(searchResult.estimatedCompletion).toLocaleDateString('en-PH')}
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <span className="block text-gray-500 text-sm mb-1">Officer Assigned</span>
                  <p className="font-medium text-[#1D1D1F]">{searchResult.officerAssigned}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-6 border-t border-[#E5E5E7]">
                <div>
                  <span className="text-gray-500 text-sm">Total Fee:</span>
                  <span className="font-semibold text-xl text-[#0066CC] ml-3">
                    ₱{searchResult.totalFee.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mt-4 sm:mt-0">
                  <Calendar size={16} />
                  <span>Last updated: {new Date(searchResult.lastUpdate).toLocaleDateString('en-PH')}</span>
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10">
              <h3 className="text-2xl font-light text-[#1D1D1F] mb-8">Status Timeline</h3>
              
              <div className="relative">
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#E5E5E7]"></div>
                
                <div className="space-y-8">
                  {searchResult.statusHistory.map((item, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      <div className="relative z-10 bg-white border-4 border-[#E5E5E7] rounded-2xl p-3">
                        {getStatusIcon(item.status)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                          <h4 className="font-medium text-[#1D1D1F] text-lg">{item.status}</h4>
                          <span className="text-gray-500">
                            {new Date(item.date).toLocaleDateString('en-PH')}
                          </span>
                        </div>
                        {item.note && (
                          <p className="text-gray-600 mt-2 leading-relaxed">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {/* Future steps (if not completed) */}
                  {searchResult.status !== 'Approved' && searchResult.status !== 'Denied' && (
                    <>
                      {searchResult.status !== 'Inspection' && (
                        <div className="relative flex items-start space-x-6 opacity-40">
                          <div className="relative z-10 bg-white border-4 border-[#E5E5E7] rounded-2xl p-3">
                            <Search className="w-5 h-5 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-400 text-lg">Inspection</h4>
                            <p className="text-gray-400 mt-2">Site inspection will be scheduled</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="relative flex items-start space-x-6 opacity-40">
                        <div className="relative z-10 bg-white border-4 border-[#E5E5E7] rounded-2xl p-3">
                          <CheckCircle className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-400 text-lg">Approval</h4>
                          <p className="text-gray-400 mt-2">Final approval and permit release</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {searchResult.status === 'Approved' && (
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-light text-emerald-900 mb-2">Permit Ready for Release</h3>
                    <p className="text-emerald-800 leading-relaxed">Your permit has been approved and is ready for pickup.</p>
                  </div>
                  <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-sm mt-6 sm:mt-0">
                    Download Permit
                  </button>
                </div>
              </div>
            )}

            {searchResult.status === 'Denied' && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-light text-red-900 mb-2">Application Denied</h3>
                    <p className="text-red-800 leading-relaxed">Your application was denied. You may resubmit after addressing the issues.</p>
                  </div>
                  <button className="bg-[#0066CC] text-white px-8 py-3 rounded-full font-medium hover:bg-[#004499] transition-colors shadow-sm mt-6 sm:mt-0">
                    Resubmit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Sample Applications Table */}
        {!searchResult && !error && (
          <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10">
            <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Recent Applications</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-[#E5E5E7]">
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Tracking Number
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                      Submission Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E7]">
                  {mockApplications.slice(0, 10).map((app) => (
                    <tr key={app.trackingNumber} className="hover:bg-[#F5F5F7] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1D1D1F]">
                        {app.trackingNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#1D1D1F]">
                        {app.applicantName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#1D1D1F]">
                        {app.permitType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#1D1D1F]">
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