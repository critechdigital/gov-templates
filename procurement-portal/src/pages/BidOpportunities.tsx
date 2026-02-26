import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, DollarSign, FileText } from 'lucide-react';
import { 
  bidOpportunities, 
  formatCurrency, 
  formatDate, 
  getDaysUntilDeadline, 
  getStatusColor
} from '../data/mockData';
import type { ProjectCategory, ProcurementMode, BidStatus } from '../data/mockData';

export default function BidOpportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | 'All'>('All');
  const [modeFilter, setModeFilter] = useState<ProcurementMode | 'All'>('All');
  const [statusFilter, setStatusFilter] = useState<BidStatus | 'All'>('All');
  const [budgetRangeFilter, setBudgetRangeFilter] = useState<string>('All');

  const budgetRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under ₱500K', value: 'under-500k' },
    { label: '₱500K - ₱2M', value: '500k-2m' },
    { label: '₱2M - ₱10M', value: '2m-10m' },
    { label: 'Over ₱10M', value: 'over-10m' }
  ];

  const filteredOpportunities = bidOpportunities.filter(bid => {
    const matchesSearch = bid.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bid.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (bid.description && bid.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'All' || bid.category === categoryFilter;
    const matchesMode = modeFilter === 'All' || bid.procurementMode === modeFilter;
    const matchesStatus = statusFilter === 'All' || bid.status === statusFilter;
    
    let matchesBudget = true;
    if (budgetRangeFilter !== 'All') {
      switch (budgetRangeFilter) {
        case 'under-500k':
          matchesBudget = bid.approvedBudget < 500000;
          break;
        case '500k-2m':
          matchesBudget = bid.approvedBudget >= 500000 && bid.approvedBudget < 2000000;
          break;
        case '2m-10m':
          matchesBudget = bid.approvedBudget >= 2000000 && bid.approvedBudget < 10000000;
          break;
        case 'over-10m':
          matchesBudget = bid.approvedBudget >= 10000000;
          break;
      }
    }

    return matchesSearch && matchesCategory && matchesMode && matchesStatus && matchesBudget;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setModeFilter('All');
    setStatusFilter('All');
    setBudgetRangeFilter('All');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="corporate-card corporate-card-primary p-6">
        <div className="flex items-center gap-4 mb-4">
          <FileText className="w-7 h-7 text-[#0071DC]" />
          <h1 className="text-2xl font-semibold text-[#2E2F32]">Bid Opportunities</h1>
        </div>
        <p className="text-[#74767C] leading-relaxed">
          Browse current procurement opportunities from Provincial Government of Bulacan. 
          Select any opportunity to access detailed requirements and submission protocols.
        </p>
      </div>

      {/* Filters */}
      <div className="corporate-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-5 h-5 text-[#0071DC]" />
          <h2 className="font-semibold text-[#2E2F32]">Filter & Search</h2>
          {(searchTerm || categoryFilter !== 'All' || modeFilter !== 'All' || statusFilter !== 'All' || budgetRangeFilter !== 'All') && (
            <button
              onClick={clearFilters}
              className="ml-auto btn-outline text-sm px-4 py-2"
            >
              Clear Filters
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#74767C]" />
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-[#2E2F32] placeholder-[#74767C] focus:outline-none focus:border-[#0071DC] focus:ring-2 focus:ring-[#0071DC]/20 focus-walmart"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as ProjectCategory | 'All')}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-[#2E2F32] focus:outline-none focus:border-[#0071DC] focus:ring-2 focus:ring-[#0071DC]/20"
          >
            <option value="All">All Categories</option>
            <option value="Goods">Goods</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Consulting Services">Consulting Services</option>
          </select>

          <select
            value={modeFilter}
            onChange={(e) => setModeFilter(e.target.value as ProcurementMode | 'All')}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-[#2E2F32] focus:outline-none focus:border-[#0071DC] focus:ring-2 focus:ring-[#0071DC]/20"
          >
            <option value="All">All Procurement Modes</option>
            <option value="Public Bidding">Public Bidding</option>
            <option value="Shopping">Shopping</option>
            <option value="SVP">Small Value Procurement</option>
            <option value="Direct Contracting">Direct Contracting</option>
            <option value="Emergency">Emergency</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as BidStatus | 'All')}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-[#2E2F32] focus:outline-none focus:border-[#0071DC] focus:ring-2 focus:ring-[#0071DC]/20"
          >
            <option value="All">All Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Under Evaluation">Under Evaluation</option>
            <option value="Awarded">Awarded</option>
            <option value="Failed">Failed</option>
          </select>

          <select
            value={budgetRangeFilter}
            onChange={(e) => setBudgetRangeFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-[#2E2F32] focus:outline-none focus:border-[#0071DC] focus:ring-2 focus:ring-[#0071DC]/20"
          >
            {budgetRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>

        <div className="text-sm text-[#8B949E] font-mono">
          [RESULT] {filteredOpportunities.length} of {bidOpportunities.length} opportunities
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredOpportunities.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center corporate-card">
            <FileText className="w-12 h-12 text-[#74767C] mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#2E2F32] mb-2">No Opportunities Found</h3>
            <p className="text-[#74767C]">Adjust filters or search parameters and retry.</p>
          </div>
        ) : (
          filteredOpportunities.map((bid) => (
            <div key={bid.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#0071DC]/30 hover:shadow-sm transition-all corporate-card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#2E2F32] mb-1">
                        <Link 
                          to={`/opportunities/${bid.id}`}
                          className="hover:text-[#0071DC] transition-colors"
                        >
                          {bid.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-[#74767C]">REF: {bid.referenceNumber}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-none text-sm font-mono font-medium whitespace-nowrap status-badge ${getStatusColor(bid.status)}`}>
                      {bid.status.toUpperCase()}
                    </span>
                  </div>

                  {bid.description && (
                    <p className="text-[#74767C] text-sm mb-4 line-clamp-2">{bid.description}</p>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#0071DC]" />
                      <div>
                        <span className="text-[#74767C]">ABC:</span>
                        <div className="font-semibold text-[#2E2F32]">
                          {formatCurrency(bid.approvedBudget)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0071DC]" />
                      <div>
                        <span className="text-[#74767C]">Category:</span>
                        <div className="font-semibold text-[#2E2F32]">{bid.category}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-[#0071DC]" />
                      <div>
                        <span className="text-[#74767C]">Mode:</span>
                        <div className="font-semibold text-[#2E2F32]">{bid.procurementMode}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FFC220]" />
                      <div>
                        <span className="text-[#74767C]">Deadline:</span>
                        <div className="font-semibold text-[#2E2F32]">
                          {formatDate(bid.submissionDeadline)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {bid.preBidDate && (
                    <div className="mt-3 p-3 bg-[#EFF6FF] border border-[#0071DC] rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-[#0071DC]" />
                        <span className="font-medium text-[#0071DC]">
                          Pre-Bid Conference: {formatDate(bid.preBidDate)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:text-right">
                  {bid.status === 'Open' && (
                    <div className="mb-3">
                      <div className="flex items-center gap-1 text-[#FFC220] mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {getDaysUntilDeadline(bid.submissionDeadline)} days remaining
                        </span>
                      </div>
                      <div className="w-full lg:w-48 bg-gray-200 rounded-lg h-2">
                        <div 
                          className="bg-[#FFC220] h-2 rounded-lg transition-all duration-300"
                          style={{ 
                            width: `${Math.max(0, Math.min(100, (getDaysUntilDeadline(bid.submissionDeadline) / 30) * 100))}%`
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <Link
                    to={`/opportunities/${bid.id}`}
                    className="inline-block bg-[#0071DC] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#005bb5] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 corporate-card">
        <h3 className="font-semibold text-[#2E2F32] mb-4">Summary Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[#0071DC]">
              {filteredOpportunities.filter(bid => bid.status === 'Open').length}
            </div>
            <div className="text-sm text-[#74767C]">Open Opportunities</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#2A8703]">
              {formatCurrency(filteredOpportunities
                .filter(bid => bid.status === 'Open')
                .reduce((sum, bid) => sum + bid.approvedBudget, 0)
              )}
            </div>
            <div className="text-sm text-[#74767C]">Active Budget</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#FFC220]">
              {filteredOpportunities.filter(bid => bid.category === 'Infrastructure').length}
            </div>
            <div className="text-sm text-[#74767C]">Infrastructure Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#74767C]">
              {filteredOpportunities.filter(bid => bid.procurementMode === 'Public Bidding').length}
            </div>
            <div className="text-sm text-[#74767C]">Public Bidding</div>
          </div>
        </div>
      </div>
    </div>
  );
}