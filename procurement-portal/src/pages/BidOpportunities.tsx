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
      <div className="bg-[#161B22] rounded-none border border-[#30363D] p-6 terminal-glow terminal-border">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-[#4ADE80]" />
          <h1 className="text-2xl font-mono font-bold text-[#E6EDF3] terminal-breadcrumb">bid_opportunities</h1>
        </div>
        <p className="text-[#8B949E]">
          [SYSTEM] Browse current procurement opportunities from Provincial Government of Bulacan. 
          Select any opportunity to access detailed requirements and submission protocols.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-[#161B22] rounded-none border border-[#30363D] p-6 terminal-glow">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-[#22D3EE]" />
          <h2 className="font-mono font-semibold text-[#E6EDF3]">[FILTER] & SEARCH</h2>
          {(searchTerm || categoryFilter !== 'All' || modeFilter !== 'All' || statusFilter !== 'All' || budgetRangeFilter !== 'All') && (
            <button
              onClick={clearFilters}
              className="ml-auto text-sm text-[#EF4444] hover:text-[#FBBF24] font-mono transition-colors"
            >
              ./clear_filters.sh
            </button>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4ADE80]" />
            <input
              type="text"
              placeholder="search_opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-[#0D1117] border border-[#30363D] rounded-none text-[#E6EDF3] font-mono placeholder-[#8B949E] focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] cursor-blink"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as ProjectCategory | 'All')}
            className="bg-[#0D1117] border border-[#30363D] rounded-none px-3 py-2 text-[#E6EDF3] font-mono focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80]"
          >
            <option value="All">all_categories</option>
            <option value="Goods">goods</option>
            <option value="Infrastructure">infrastructure</option>
            <option value="Consulting Services">consulting_services</option>
          </select>

          <select
            value={modeFilter}
            onChange={(e) => setModeFilter(e.target.value as ProcurementMode | 'All')}
            className="bg-[#0D1117] border border-[#30363D] rounded-none px-3 py-2 text-[#E6EDF3] font-mono focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80]"
          >
            <option value="All">all_procurement_modes</option>
            <option value="Public Bidding">public_bidding</option>
            <option value="Shopping">shopping</option>
            <option value="SVP">small_value_procurement</option>
            <option value="Direct Contracting">direct_contracting</option>
            <option value="Emergency">emergency</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as BidStatus | 'All')}
            className="bg-[#0D1117] border border-[#30363D] rounded-none px-3 py-2 text-[#E6EDF3] font-mono focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80]"
          >
            <option value="All">all_status</option>
            <option value="Open">open</option>
            <option value="Closed">closed</option>
            <option value="Under Evaluation">under_evaluation</option>
            <option value="Awarded">awarded</option>
            <option value="Failed">failed</option>
          </select>

          <select
            value={budgetRangeFilter}
            onChange={(e) => setBudgetRangeFilter(e.target.value)}
            className="bg-[#0D1117] border border-[#30363D] rounded-none px-3 py-2 text-[#E6EDF3] font-mono focus:outline-none focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80]"
          >
            {budgetRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label.toLowerCase().replace(' ', '_')}</option>
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
          <div className="bg-[#161B22] rounded-none border border-[#30363D] p-12 text-center terminal-glow">
            <FileText className="w-12 h-12 text-[#8B949E] mx-auto mb-4" />
            <h3 className="text-lg font-mono font-medium text-[#E6EDF3] mb-2">[ERROR] NO_OPPORTUNITIES_FOUND</h3>
            <p className="text-[#8B949E] font-mono">Adjust filters or search parameters and retry.</p>
          </div>
        ) : (
          filteredOpportunities.map((bid) => (
            <div key={bid.id} className="bg-[#161B22] rounded-none border border-[#30363D] p-6 hover:border-[#4ADE80]/50 transition-colors terminal-glow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#E6EDF3] mb-1">
                        <Link 
                          to={`/opportunities/${bid.id}`}
                          className="hover:text-[#4ADE80] transition-colors"
                        >
                          {bid.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-[#8B949E] font-mono">REF: {bid.referenceNumber}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-none text-sm font-mono font-medium whitespace-nowrap status-badge ${getStatusColor(bid.status)}`}>
                      {bid.status.toUpperCase()}
                    </span>
                  </div>

                  {bid.description && (
                    <p className="text-[#8B949E] text-sm mb-4 line-clamp-2">{bid.description}</p>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#4ADE80]" />
                      <div>
                        <span className="text-[#8B949E] font-mono">ABC:</span>
                        <div className="font-mono font-semibold text-[#E6EDF3]">
                          {formatCurrency(bid.approvedBudget)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#22D3EE]" />
                      <div>
                        <span className="text-[#8B949E] font-mono">CATEGORY:</span>
                        <div className="font-mono font-semibold text-[#E6EDF3]">{bid.category}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-[#FBBF24]" />
                      <div>
                        <span className="text-[#8B949E] font-mono">MODE:</span>
                        <div className="font-mono font-semibold text-[#E6EDF3]">{bid.procurementMode}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#EF4444]" />
                      <div>
                        <span className="text-[#8B949E] font-mono">DEADLINE:</span>
                        <div className="font-mono font-semibold text-[#E6EDF3]">
                          {formatDate(bid.submissionDeadline)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {bid.preBidDate && (
                    <div className="mt-3 p-3 bg-[#0D1117] border border-[#22D3EE] rounded-none">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-[#22D3EE]" />
                        <span className="font-mono font-medium text-[#22D3EE]">
                          PRE_BID_CONFERENCE: {formatDate(bid.preBidDate)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:text-right">
                  {bid.status === 'Open' && (
                    <div className="mb-3">
                      <div className="flex items-center gap-1 text-[#FBBF24] mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-mono font-medium">
                          {getDaysUntilDeadline(bid.submissionDeadline)}D_REMAINING
                        </span>
                      </div>
                      <div className="w-full lg:w-48 bg-[#30363D] rounded-none h-2">
                        <div 
                          className="bg-[#FBBF24] h-2 rounded-none transition-all duration-300"
                          style={{ 
                            width: `${Math.max(0, Math.min(100, (getDaysUntilDeadline(bid.submissionDeadline) / 30) * 100))}%`
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <Link
                    to={`/opportunities/${bid.id}`}
                    className="inline-block bg-transparent border-2 border-[#4ADE80] text-[#4ADE80] px-4 py-2 rounded-none text-sm font-mono font-medium hover:bg-[#4ADE80] hover:text-[#0D1117] transition-colors"
                  >
                    ./view_details.sh
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <div className="bg-[#161B22] rounded-none border border-[#30363D] p-6 terminal-glow">
        <h3 className="font-mono font-semibold text-[#E6EDF3] mb-4">[SUMMARY_STATISTICS]</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-mono font-bold text-[#4ADE80]">
              {filteredOpportunities.filter(bid => bid.status === 'Open').length}
            </div>
            <div className="text-sm text-[#8B949E] font-mono">OPEN_OPPORTUNITIES</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-[#22D3EE]">
              {formatCurrency(filteredOpportunities
                .filter(bid => bid.status === 'Open')
                .reduce((sum, bid) => sum + bid.approvedBudget, 0)
              )}
            </div>
            <div className="text-sm text-[#8B949E] font-mono">ACTIVE_BUDGET</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-[#FBBF24]">
              {filteredOpportunities.filter(bid => bid.category === 'Infrastructure').length}
            </div>
            <div className="text-sm text-[#8B949E] font-mono">INFRASTRUCTURE_PROJECTS</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-[#EF4444]">
              {filteredOpportunities.filter(bid => bid.procurementMode === 'Public Bidding').length}
            </div>
            <div className="text-sm text-[#8B949E] font-mono">PUBLIC_BIDDING</div>
          </div>
        </div>
      </div>
    </div>
  );
}