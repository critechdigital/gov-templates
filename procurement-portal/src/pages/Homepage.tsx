import { Link } from 'react-router-dom';
import { Calendar, Clock, Award, FileText, ExternalLink, Users, TrendingUp } from 'lucide-react';
import { bidOpportunities, awardedContracts, formatCurrency, formatDate, getDaysUntilDeadline, getStatusColor } from '../data/mockData';

export default function Homepage() {
  const activeBids = bidOpportunities.filter(bid => bid.status === 'Open');
  const recentAwards = awardedContracts.slice(0, 5);
  
  const totalActiveBudget = activeBids.reduce((sum, bid) => sum + bid.approvedBudget, 0);
  const totalAwardedAmount = recentAwards.reduce((sum, contract) => sum + contract.contractAmount, 0);

  const upcomingDeadlines = activeBids
    .filter(bid => getDaysUntilDeadline(bid.submissionDeadline) <= 7)
    .sort((a, b) => getDaysUntilDeadline(a.submissionDeadline) - getDaysUntilDeadline(b.submissionDeadline));

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0038A8] to-blue-700 text-white rounded-lg p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the Provincial Government of Bulacan Procurement Portal
          </h1>
          <p className="text-lg mb-6 text-blue-100">
            Your gateway to transparent and competitive government procurement. 
            Find current bidding opportunities, track awarded contracts, and access 
            procurement information in compliance with RA 9184 and RA 12009.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/opportunities"
              className="bg-white text-[#0038A8] px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              View Bid Opportunities
            </Link>
            <Link
              to="/supplier-registration"
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Register as Supplier
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{activeBids.length}</h3>
                <p className="text-sm text-gray-600">Active Opportunities</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{formatCurrency(totalActiveBudget)}</h3>
                <p className="text-sm text-gray-600">Active Budget</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{awardedContracts.length}</h3>
                <p className="text-sm text-gray-600">Contracts Awarded</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{formatCurrency(totalAwardedAmount)}</h3>
                <p className="text-sm text-gray-600">Total Awarded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Opportunities */}
        <section className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0038A8]" />
                Active Bid Opportunities
              </h2>
              <Link
                to="/opportunities"
                className="text-[#0038A8] hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                View All
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activeBids.slice(0, 5).map((bid) => (
                <div key={bid.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{bid.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bid.status)}`}>
                      {bid.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Reference:</span> {bid.referenceNumber}
                    </div>
                    <div>
                      <span className="font-medium">Budget:</span> {formatCurrency(bid.approvedBudget)}
                    </div>
                    <div>
                      <span className="font-medium">Category:</span> {bid.category}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="font-medium text-orange-600">
                        {getDaysUntilDeadline(bid.submissionDeadline)} days left
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Link
                      to={`/opportunities/${bid.id}`}
                      className="text-[#0038A8] hover:text-blue-700 text-sm font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Awarded */}
        <section className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0038A8]" />
                Recently Awarded Contracts
              </h2>
              <Link
                to="/awarded-contracts"
                className="text-[#0038A8] hover:text-blue-700 text-sm font-medium flex items-center gap-1"
              >
                View All
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentAwards.map((contract) => (
                <div key={contract.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{contract.projectTitle}</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Contractor:</span> {contract.contractor}
                    </div>
                    <div>
                      <span className="font-medium">Amount:</span> {formatCurrency(contract.contractAmount)}
                      <span className="text-xs text-gray-500 ml-1">
                        (ABC: {formatCurrency(contract.approvedBudget)})
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Date Awarded:</span> {formatDate(contract.dateAwarded)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Urgent Deadlines */}
      {upcomingDeadlines.length > 0 && (
        <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Urgent: Deadlines This Week
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingDeadlines.map((bid) => (
              <div key={bid.id} className="bg-white border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{bid.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Deadline: {formatDate(bid.submissionDeadline)}</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                    {getDaysUntilDeadline(bid.submissionDeadline)} days left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BAC Announcements */}
      <section className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#0038A8]" />
            BAC Announcements & Procurement Calendar
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Pre-Bidding Conference Schedule</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• March 3, 2025 - Multi-Purpose Building Construction (PGB-2025-002)</li>
                <li>• March 8, 2025 - Office Supplies Procurement (PGB-2025-001)</li>
                <li>• March 15, 2025 - Medical Equipment Procurement (PGB-2025-004)</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Notice to Suppliers</h3>
              <p className="text-sm text-green-800">
                All suppliers are reminded to update their PhilGEPS registration and ensure 
                compliance with the latest GPPB guidelines. New supplier orientation sessions 
                are scheduled every Friday at the Provincial Capitol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Quick Links & Resources</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">External Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://philgeps.gov.ph" 
                    target="_blank" 
                    className="text-[#0038A8] hover:text-blue-700 flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    PhilGEPS Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[#0038A8] hover:text-blue-700 flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    DBM Procurement Manual
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[#0038A8] hover:text-blue-700 flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GPPB Resolutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Legal Framework</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• RA 9184 - Government Procurement Reform Act</li>
                <li>• RA 12009 - Amendment to RA 9184</li>
                <li>• IRR-A of RA 9184</li>
                <li>• GPPB Guidelines and Resolutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>BAC Secretariat: (044) 662-1109</li>
                <li>Provincial Engineering Office: (044) 662-1104</li>
                <li>General Services Office: (044) 662-1110</li>
                <li>Email: bac@bulacan.gov.ph</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}