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
      <section className="bg-gradient-to-r from-[#0071DC] to-[#005bb5] text-white rounded-lg p-8 corporate-card">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FFC220] rounded-full"></div>
            <h1 className="text-3xl font-semibold text-white">
              Welcome to Bulacan Procurement Portal
            </h1>
          </div>
          <p className="text-lg mb-6 text-white/90 leading-relaxed">
            Your gateway to transparent government procurement. 
            Access bidding opportunities, contract tracking, and procurement data 
            in compliance with RA 9184 and RA 12009 regulations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/opportunities"
              className="btn-secondary"
            >
              View Opportunities
            </Link>
            <Link
              to="/supplier-registration"
              className="btn-outline bg-white text-[#0071DC] border-white hover:bg-gray-100"
            >
              Register as Supplier
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="corporate-card corporate-card-primary p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0071DC]/10 rounded-lg">
                <FileText className="w-7 h-7 text-[#0071DC]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2E2F32]">{activeBids.length}</h3>
                <p className="text-sm text-[#74767C] font-medium">Active Opportunities</p>
              </div>
            </div>
          </div>
          <div className="corporate-card corporate-card-accent p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FFC220]/10 rounded-lg">
                <TrendingUp className="w-7 h-7 text-[#FFC220]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2E2F32]">{formatCurrency(totalActiveBudget)}</h3>
                <p className="text-sm text-[#74767C] font-medium">Active Budget</p>
              </div>
            </div>
          </div>
          <div className="corporate-card corporate-card-success p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#2A8703]/10 rounded-lg">
                <Award className="w-7 h-7 text-[#2A8703]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2E2F32]">{awardedContracts.length}</h3>
                <p className="text-sm text-[#74767C] font-medium">Contracts Awarded</p>
              </div>
            </div>
          </div>
          <div className="corporate-card p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#74767C]/10 rounded-lg">
                <Users className="w-7 h-7 text-[#74767C]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2E2F32]">{formatCurrency(totalAwardedAmount)}</h3>
                <p className="text-sm text-[#74767C] font-medium">Total Awarded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Opportunities */}
        <section className="corporate-card corporate-card-primary">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#2E2F32] flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#0071DC]" />
                Active Bid Opportunities
              </h2>
              <Link
                to="/opportunities"
                className="text-[#0071DC] hover:text-[#005bb5] text-sm font-medium flex items-center gap-1 transition-colors"
              >
                View All
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activeBids.slice(0, 5).map((bid) => (
                <div key={bid.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#0071DC]/30 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-[#2E2F32] text-sm leading-5">{bid.title}</h3>
                    <span className={`status-badge ${getStatusColor(bid.status)}`}>
                      {bid.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-[#74767C]">
                    <div>
                      <span className="font-medium text-[#0071DC]">Ref:</span> {bid.referenceNumber}
                    </div>
                    <div>
                      <span className="font-medium text-[#0071DC]">Budget:</span> {formatCurrency(bid.approvedBudget)}
                    </div>
                    <div>
                      <span className="font-medium text-[#0071DC]">Category:</span> {bid.category}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#FFC220]" />
                      <span className="text-[#FFC220] font-medium">
                        {getDaysUntilDeadline(bid.submissionDeadline)} days left
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link
                      to={`/opportunities/${bid.id}`}
                      className="text-[#0071DC] hover:text-[#005bb5] text-sm font-medium transition-colors"
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
        <section className="corporate-card corporate-card-success">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#2E2F32] flex items-center gap-3">
                <Award className="w-5 h-5 text-[#2A8703]" />
                Recently Awarded Contracts
              </h2>
              <Link
                to="/awarded-contracts"
                className="text-[#2A8703] hover:text-[#1f6302] text-sm font-medium flex items-center gap-1 transition-colors"
              >
                View All
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentAwards.map((contract) => (
                <div key={contract.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#2A8703]/30 hover:shadow-sm transition-all">
                  <h3 className="font-medium text-[#2E2F32] text-sm mb-3 leading-5">{contract.projectTitle}</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-[#74767C]">
                    <div>
                      <span className="font-medium text-[#2A8703]">Contractor:</span> {contract.contractor}
                    </div>
                    <div>
                      <span className="font-medium text-[#2A8703]">Amount:</span> {formatCurrency(contract.contractAmount)}
                      <span className="text-xs text-[#74767C] ml-2">
                        (ABC: {formatCurrency(contract.approvedBudget)})
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-[#2A8703]">Date Awarded:</span> {formatDate(contract.dateAwarded)}
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
        <section className="corporate-card border-l-4 border-red-500 bg-red-50">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Urgent Deadlines This Week
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {upcomingDeadlines.map((bid) => (
                <div key={bid.id} className="bg-white border border-red-200 rounded-lg p-4">
                  <h3 className="font-medium text-[#2E2F32] text-sm mb-3 leading-5">{bid.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#74767C]">Deadline: {formatDate(bid.submissionDeadline)}</span>
                    <span className="badge-danger">
                      {getDaysUntilDeadline(bid.submissionDeadline)} days left
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BAC Announcements */}
      <section className="corporate-card corporate-card-accent">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#2E2F32] flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#FFC220]" />
            BAC Announcements & Procurement Calendar
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="bg-[#EFF6FF] border border-[#0071DC]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#0071DC] mb-3">Pre-Bidding Conference Schedule</h3>
              <ul className="space-y-2 text-sm text-[#74767C]">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#0071DC] rounded-full mt-2 flex-shrink-0"></span>
                  March 3, 2025: Multi-Purpose Building Construction (PGB-2025-002)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#0071DC] rounded-full mt-2 flex-shrink-0"></span>
                  March 8, 2025: Office Supplies Procurement (PGB-2025-001)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#0071DC] rounded-full mt-2 flex-shrink-0"></span>
                  March 15, 2025: Medical Equipment Procurement (PGB-2025-004)
                </li>
              </ul>
            </div>
            <div className="bg-[#F0FDF4] border border-[#2A8703]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#2A8703] mb-3">Notice to Suppliers</h3>
              <p className="text-sm text-[#74767C] leading-relaxed">
                All suppliers are required to update their PhilGEPS registration and ensure 
                compliance with the latest GPPB guidelines. New supplier orientation sessions 
                are scheduled every Friday at the Provincial Capitol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="corporate-card">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#2E2F32]">Quick Links & Resources</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-[#0071DC] mb-4">External Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="https://philgeps.gov.ph" 
                    target="_blank" 
                    className="text-[#74767C] hover:text-[#0071DC] flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    PhilGEPS Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[#74767C] hover:text-[#0071DC] flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    DBM Procurement Manual
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[#74767C] hover:text-[#0071DC] flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GPPB Resolutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#0071DC] mb-4">Legal Framework</h3>
              <ul className="space-y-2 text-sm text-[#74767C]">
                <li>• RA 9184 - Government Procurement Reform Act</li>
                <li>• RA 12009 - Amendment to RA 9184</li>
                <li>• IRR-A of RA 9184</li>
                <li>• GPPB Guidelines and Resolutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#0071DC] mb-4">Contact Information</h3>
              <ul className="space-y-2 text-sm text-[#74767C]">
                <li>BAC Secretariat: (044) 662-1109</li>
                <li>Provincial Engineering: (044) 662-1104</li>
                <li>General Services: (044) 662-1110</li>
                <li>Email: bac@bulacan.gov.ph</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}