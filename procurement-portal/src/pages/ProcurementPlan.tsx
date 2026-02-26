import { useState } from 'react';
import { Calendar, Download, Printer, TrendingUp, Building, Filter, PieChart } from 'lucide-react';
import { 
  procurementPlan, 
  formatCurrency
} from '../data/mockData';
import type { ProjectCategory, Quarter } from '../data/mockData';

export default function ProcurementPlan() {
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'table' | 'summary'>('table');

  const filteredPlan = procurementPlan.filter(item => {
    const matchesQuarter = selectedQuarter === 'All' || item.quarter === selectedQuarter;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesQuarter && matchesCategory && matchesStatus;
  });

  // Calculate statistics
  const totalBudget = filteredPlan.reduce((sum, item) => sum + item.estimatedBudget, 0);
  const completedProjects = filteredPlan.filter(item => item.status === 'Completed');
  const ongoingProjects = filteredPlan.filter(item => item.status === 'Ongoing');

  // Category breakdown
  const categoryBreakdown = ['Goods', 'Infrastructure', 'Consulting Services'].map(category => {
    const categoryItems = filteredPlan.filter(item => item.category === category);
    const total = categoryItems.reduce((sum, item) => sum + item.estimatedBudget, 0);
    const count = categoryItems.length;
    return { category, total, count };
  });

  // Quarter breakdown
  const quarterBreakdown = (['Q1', 'Q2', 'Q3', 'Q4'] as Quarter[]).map(quarter => {
    const quarterItems = filteredPlan.filter(item => item.quarter === quarter);
    const total = quarterItems.reduce((sum, item) => sum + item.estimatedBudget, 0);
    const count = quarterItems.length;
    return { quarter, total, count };
  });

  // Procurement mode distribution
  const modeDistribution = ['Public Bidding', 'Shopping', 'SVP', 'Direct Contracting', 'Emergency'].map(mode => {
    const modeItems = filteredPlan.filter(item => item.procurementMode === mode);
    const total = modeItems.reduce((sum, item) => sum + item.estimatedBudget, 0);
    const count = modeItems.length;
    const percentage = totalBudget > 0 ? (total / totalBudget) * 100 : 0;
    return { mode, total, count, percentage };
  });

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-gray-100 text-gray-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 print-friendly">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6 no-print">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#0038A8]" />
            <h1 className="text-2xl font-bold text-gray-900">Annual Procurement Plan 2025</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0038A8] text-white rounded-md hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>
        <p className="text-gray-600">
          The Annual Procurement Plan outlines all planned procurement activities for the fiscal year 2025, 
          including estimated budgets, schedules, and procurement methods for each project.
        </p>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 no-print">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{filteredPlan.length}</h3>
              <p className="text-sm text-gray-600">Total Projects</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{formatCurrency(totalBudget)}</h3>
              <p className="text-sm text-gray-600">Total Budget</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{ongoingProjects.length}</h3>
              <p className="text-sm text-gray-600">Ongoing</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <PieChart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{completedProjects.length}</h3>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="bg-white rounded-lg shadow-sm border p-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-gray-900">Filters</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded text-sm ${
                viewMode === 'table' 
                  ? 'bg-[#0038A8] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Table View
            </button>
            <button
              onClick={() => setViewMode('summary')}
              className={`px-3 py-1 rounded text-sm ${
                viewMode === 'summary' 
                  ? 'bg-[#0038A8] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Summary View
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <select
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value as Quarter | 'All')}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
          >
            <option value="All">All Quarters</option>
            <option value="Q1">Q1 (Jan-Mar)</option>
            <option value="Q2">Q2 (Apr-Jun)</option>
            <option value="Q3">Q3 (Jul-Sep)</option>
            <option value="Q4">Q4 (Oct-Dec)</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ProjectCategory | 'All')}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
          >
            <option value="All">All Categories</option>
            <option value="Goods">Goods</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Consulting Services">Consulting Services</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="Planned">Planned</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <div className="text-sm text-gray-600 flex items-center">
            Showing {filteredPlan.length} of {procurementPlan.length} projects
          </div>
        </div>
      </div>

      {viewMode === 'table' ? (
        /* Table View */
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mode
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quarter
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPlan.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.projectTitle}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{item.procurementMode}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatCurrency(item.estimatedBudget)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{item.quarter}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{item.department}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Summary View */
        <div className="space-y-6">
          {/* Category Breakdown */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget by Category</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {categoryBreakdown.map(({ category, total, count }) => {
                const percentage = totalBudget > 0 ? (total / totalBudget) * 100 : 0;
                return (
                  <div key={category} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{category}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Projects:</span>
                        <span className="font-medium">{count}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">{formatCurrency(total)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Percentage:</span>
                        <span className="font-medium">{percentage.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#0038A8] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quarterly Distribution */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Distribution</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {quarterBreakdown.map(({ quarter, total, count }) => (
                <div key={quarter} className="border border-gray-200 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-gray-900 mb-3">{quarter}</h4>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-[#0038A8]">{count}</div>
                    <div className="text-xs text-gray-600">Projects</div>
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(total)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Procurement Mode Distribution */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Procurement Mode Distribution</h3>
            <div className="space-y-4">
              {modeDistribution
                .filter(({ count }) => count > 0)
                .sort((a, b) => b.percentage - a.percentage)
                .map(({ mode, total, count, percentage }) => (
                  <div key={mode} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{mode}</h4>
                      <p className="text-sm text-gray-600">{count} projects</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{formatCurrency(total)}</div>
                      <div className="text-xs text-gray-600">{percentage.toFixed(1)}%</div>
                    </div>
                    <div className="w-32">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#0038A8] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Print Header (only shows when printing) */}
      <div className="hidden print:block break-before">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Provincial Government of Bulacan</h1>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Annual Procurement Plan 2025</h2>
          <p className="text-sm text-gray-600 mt-2">Generated on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}