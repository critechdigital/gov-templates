import { useState } from 'react';
import { Award, Search, Filter, TrendingUp, TrendingDown, Calendar, Building } from 'lucide-react';
import { 
  awardedContracts, 
  formatCurrency, 
  formatDate
} from '../data/mockData';
import type { ProjectCategory, ProcurementMode } from '../data/mockData';

export default function AwardedContracts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | 'All'>('All');
  const [modeFilter, setModeFilter] = useState<ProcurementMode | 'All'>('All');
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'savings'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredContracts = awardedContracts.filter(contract => {
    const matchesSearch = contract.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.contractor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || contract.category === categoryFilter;
    const matchesMode = modeFilter === 'All' || contract.procurementMode === modeFilter;

    return matchesSearch && matchesCategory && matchesMode;
  });

  const sortedContracts = [...filteredContracts].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'date':
        comparison = a.dateAwarded.getTime() - b.dateAwarded.getTime();
        break;
      case 'amount':
        comparison = a.contractAmount - b.contractAmount;
        break;
      case 'savings':
        const savingsA = a.approvedBudget - a.contractAmount;
        const savingsB = b.approvedBudget - b.contractAmount;
        comparison = savingsA - savingsB;
        break;
    }
    
    return sortOrder === 'desc' ? -comparison : comparison;
  });

  const totalContractValue = filteredContracts.reduce((sum, contract) => sum + contract.contractAmount, 0);
  const totalApprovedBudget = filteredContracts.reduce((sum, contract) => sum + contract.approvedBudget, 0);
  const totalSavings = totalApprovedBudget - totalContractValue;
  const avgSavingsPercentage = totalApprovedBudget > 0 ? (totalSavings / totalApprovedBudget) * 100 : 0;

  const handleSort = (field: 'date' | 'amount' | 'savings') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getSavingsPercentage = (approved: number, awarded: number): number => {
    return approved > 0 ? ((approved - awarded) / approved) * 100 : 0;
  };

  const getSavingsColor = (percentage: number): string => {
    if (percentage > 10) return 'text-green-600';
    if (percentage > 5) return 'text-blue-600';
    if (percentage > 0) return 'text-gray-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-[#0038A8]" />
          <h1 className="text-2xl font-bold text-gray-900">Awarded Contracts</h1>
        </div>
        <p className="text-gray-600">
          View contracts awarded by the Provincial Government of Bulacan. 
          Compare approved budgets with actual contract amounts to see cost savings achieved.
        </p>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{filteredContracts.length}</h3>
              <p className="text-sm text-gray-600">Total Contracts</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{formatCurrency(totalContractValue)}</h3>
              <p className="text-sm text-gray-600">Total Value</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingDown className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{formatCurrency(totalSavings)}</h3>
              <p className="text-sm text-gray-600">Total Savings</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Building className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{avgSavingsPercentage.toFixed(1)}%</h3>
              <p className="text-sm text-gray-600">Avg. Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="font-semibold text-gray-900">Filter & Search</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contracts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as ProjectCategory | 'All')}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
          >
            <option value="All">All Categories</option>
            <option value="Goods">Goods</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Consulting Services">Consulting Services</option>
          </select>

          <select
            value={modeFilter}
            onChange={(e) => setModeFilter(e.target.value as ProcurementMode | 'All')}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
          >
            <option value="All">All Procurement Modes</option>
            <option value="Public Bidding">Public Bidding</option>
            <option value="Shopping">Shopping</option>
            <option value="SVP">Small Value Procurement (SVP)</option>
            <option value="Direct Contracting">Direct Contracting</option>
            <option value="Emergency">Emergency</option>
          </select>

          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              setSortBy(field as 'date' | 'amount' | 'savings');
              setSortOrder(order as 'asc' | 'desc');
            }}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="amount-desc">Highest Amount</option>
            <option value="amount-asc">Lowest Amount</option>
            <option value="savings-desc">Highest Savings</option>
            <option value="savings-asc">Lowest Savings</option>
          </select>
        </div>

        <div className="text-sm text-gray-600 mt-4">
          Showing {filteredContracts.length} of {awardedContracts.length} contracts
        </div>
      </div>

      {/* Contracts List */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('amount')}
                    className="flex items-center gap-1 hover:text-gray-700"
                  >
                    Contract Amount
                    {sortBy === 'amount' && (
                      sortOrder === 'desc' ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('savings')}
                    className="flex items-center gap-1 hover:text-gray-700"
                  >
                    Savings
                    {sortBy === 'savings' && (
                      sortOrder === 'desc' ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contractor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('date')}
                    className="flex items-center gap-1 hover:text-gray-700"
                  >
                    Date Awarded
                    {sortBy === 'date' && (
                      sortOrder === 'desc' ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />
                    )}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedContracts.map((contract) => {
                const savingsAmount = contract.approvedBudget - contract.contractAmount;
                const savingsPercentage = getSavingsPercentage(contract.approvedBudget, contract.contractAmount);
                
                return (
                  <tr key={contract.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {contract.projectTitle}
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>Ref: {contract.referenceNumber}</div>
                          <div className="flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              {contract.category}
                            </span>
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                              {contract.procurementMode}
                            </span>
                          </div>
                          <div>Duration: {contract.contractDuration}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">
                          {formatCurrency(contract.contractAmount)}
                        </div>
                        <div className="text-xs text-gray-600">
                          ABC: {formatCurrency(contract.approvedBudget)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className={`font-semibold ${getSavingsColor(savingsPercentage)}`}>
                          {savingsAmount >= 0 ? '+' : ''}{formatCurrency(savingsAmount)}
                        </div>
                        <div className={`text-xs ${getSavingsColor(savingsPercentage)}`}>
                          {savingsPercentage.toFixed(1)}%
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {contract.contractor}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="text-gray-900">
                          {formatDate(contract.dateAwarded)}
                        </div>
                        <div className="text-xs text-gray-600 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {Math.floor((new Date().getTime() - contract.dateAwarded.getTime()) / (1000 * 60 * 60 * 24))} days ago
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        {['Goods', 'Infrastructure', 'Consulting Services'].map(category => {
          const categoryContracts = filteredContracts.filter(c => c.category === category);
          const categoryTotal = categoryContracts.reduce((sum, c) => sum + c.contractAmount, 0);
          const categoryCount = categoryContracts.length;
          
          return (
            <div key={category} className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Contracts:</span>
                  <span className="text-sm font-medium text-gray-900">{categoryCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Value:</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(categoryTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg. Contract:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {categoryCount > 0 ? formatCurrency(categoryTotal / categoryCount) : '₱0'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}