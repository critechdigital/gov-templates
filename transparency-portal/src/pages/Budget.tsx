import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Download, Calendar, TrendingUp, Filter, RefreshCw, Share2, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react'
import { useState } from 'react'

const Budget = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026')

  const budgetBySection = [
    { name: 'Education', amount: 135000000, percentage: 30, color: '#0078D4' },
    { name: 'Health', amount: 90000000, percentage: 20, color: '#5B2D8E' },
    { name: 'Infrastructure', amount: 112500000, percentage: 25, color: '#00B7C3' },
    { name: 'Social Services', amount: 67500000, percentage: 15, color: '#16C60C' },
    { name: 'General Administration', amount: 45000000, percentage: 10, color: '#FF8C00' },
  ]

  const quarterlyExpenditure = [
    { quarter: 'Q1 2025', budgeted: 112500000, actual: 98750000, percentage: 87.8 },
    { quarter: 'Q2 2025', budgeted: 112500000, actual: 105300000, percentage: 93.6 },
    { quarter: 'Q3 2025', budgeted: 112500000, actual: 108900000, percentage: 96.8 },
    { quarter: 'Q4 2025', budgeted: 112500000, actual: 102150000, percentage: 90.8 },
  ]

  const budgetTrend = [
    { year: '2021-2022', amount: 380000000 },
    { year: '2022-2023', amount: 395000000 },
    { year: '2023-2024', amount: 420000000 },
    { year: '2024-2025', amount: 435000000 },
    { year: '2025-2026', amount: 450000000 },
  ]

  const budgetDocuments = [
    {
      title: 'Annual Budget 2025-2026 (Final)',
      date: '2025-12-15',
      size: '2.4 MB',
      type: 'PDF'
    },
    {
      title: 'Budget Ordinance No. 2025-008',
      date: '2025-12-10',
      size: '1.8 MB',
      type: 'PDF'
    },
    {
      title: 'Quarterly Expenditure Report Q4 2025',
      date: '2026-01-31',
      size: '1.2 MB',
      type: 'PDF'
    },
    {
      title: 'Budget vs Actual Analysis 2025',
      date: '2026-02-15',
      size: '956 KB',
      type: 'XLSX'
    }
  ]

  const formatCurrency = (value: number) => {
    return `₱${(value / 1000000).toFixed(1)}M`
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold">{data.name}</p>
          <p className="text-blue-600">Amount: {formatCurrency(data.amount)}</p>
          <p className="text-gray-600">Percentage: {data.percentage}%</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="max-w-none">
      {/* Header */}
      <div className="mb-8">
        <h1 className="ms-text-title mb-2">Budget Transparency Dashboard</h1>
        <p className="text-gray-600 text-lg">Real-time budget allocation and expenditure analytics for Municipality of San Rafael, Bulacan</p>
      </div>

      {/* Command Bar */}
      <div className="ms-command-bar mb-6">
        <span className="text-sm font-semibold text-gray-700">Budget Actions:</span>
        <button className="ms-command-button">
          <Filter className="w-4 h-4" />
          Filter Data
        </button>
        <button className="ms-command-button">
          <Download className="w-4 h-4" />
          Export Report
        </button>
        <button className="ms-command-button">
          <RefreshCw className="w-4 h-4" />
          Refresh Data
        </button>
        <button className="ms-command-button">
          <Share2 className="w-4 h-4" />
          Share Dashboard
        </button>
        
        <div className="ml-auto">
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 border border-[#EDEBE9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078D4] ms-focus bg-white"
          >
            <option>2025-2026</option>
            <option>2024-2025</option>
            <option>2023-2024</option>
          </select>
        </div>
      </div>

      {/* KPI Cards - Power BI Style */}
      <div className="ms-grid-dense ms-grid-4col mb-8">
        <div className="fluent-card fluent-card-blue p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ms-pill ms-pill-blue">+12% YoY</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">₱450M</h3>
            <p className="font-semibold text-gray-700">Total Annual Budget</p>
            <p className="text-sm text-gray-600">Fiscal Year {selectedYear}</p>
          </div>
        </div>

        <div className="fluent-card fluent-card-green p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <div className="ms-pill ms-pill-green">On Track</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">₱415.1M</h3>
            <p className="font-semibold text-gray-700">Total Expenditure</p>
            <p className="text-sm text-gray-600">Actual spending to date</p>
          </div>
        </div>

        <div className="fluent-card fluent-card-orange p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ms-pill ms-pill-orange">Excellent</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">92.2%</h3>
            <p className="font-semibold text-gray-700">Utilization Rate</p>
            <p className="text-sm text-gray-600">Budget efficiency</p>
          </div>
        </div>

        <div className="fluent-card fluent-card-purple p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <PieChartIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ms-pill ms-pill-purple">5 Sectors</div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">₱34.9M</h3>
            <p className="font-semibold text-gray-700">Remaining Balance</p>
            <p className="text-sm text-gray-600">Available for allocation</p>
          </div>
        </div>
      </div>

      {/* Charts Section - Power BI Style */}
      <div className="ms-grid-dense" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* Pie Chart - Budget by Sector */}
        <div className="fluent-card fluent-card-teal">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-blue-50">
            <h3 className="ms-text-subtitle flex items-center">
              <PieChartIcon className="w-5 h-5 mr-2 text-teal-600" />
              Budget Allocation by Sector
            </h3>
            <p className="text-sm text-gray-600 mt-1">Distribution across government sectors</p>
          </div>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetBySection}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ name, value }) => `${name} ${((value as number) / 450000000 * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {budgetBySection.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="mt-4 grid grid-cols-1 gap-2">
              {budgetBySection.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm font-medium">{entry.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{formatCurrency(entry.amount)}</div>
                    <div className="text-xs text-gray-500">{entry.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart - Quarterly Expenditure */}
        <div className="fluent-card fluent-card-purple">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <h3 className="ms-text-subtitle flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
              Quarterly Performance Analysis
            </h3>
            <p className="text-sm text-gray-600 mt-1">Budget vs actual expenditure tracking</p>
          </div>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quarterlyExpenditure} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="quarter" 
                    tick={{ fontSize: 12 }}
                    tickLine={{ stroke: '#e0e0e0' }}
                  />
                  <YAxis 
                    tickFormatter={(value) => formatCurrency(value)} 
                    tick={{ fontSize: 12 }}
                    tickLine={{ stroke: '#e0e0e0' }}
                  />
                  <Tooltip 
                    formatter={(value) => [formatCurrency(Number(value)), '']} 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Bar dataKey="budgeted" fill="#E5E7EB" name="Budgeted" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="actual" fill="#5B2D8E" name="Actual Spending" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* Performance indicators */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              {quarterlyExpenditure.map((quarter, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900">{quarter.quarter}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-600">Efficiency</span>
                    <div className={`ms-pill ms-pill-${
                      quarter.percentage >= 95 ? 'green' : 
                      quarter.percentage >= 85 ? 'orange' : 'red'
                    }`} style={{ fontSize: '10px', padding: '2px 6px' }}>
                      {quarter.percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Budget Trend - Full width */}
      <div className="fluent-card fluent-card-blue mt-8 mb-8">
        <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h3 className="ms-text-subtitle flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
            5-Year Budget Growth Trend Analysis
          </h3>
          <p className="text-sm text-gray-600 mt-1">Historical budget progression and future projections</p>
        </div>
        <div className="p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={budgetTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fontSize: 12 }}
                  tickLine={{ stroke: '#e0e0e0' }}
                />
                <YAxis 
                  tickFormatter={(value) => formatCurrency(value)} 
                  tick={{ fontSize: 12 }}
                  tickLine={{ stroke: '#e0e0e0' }}
                />
                <Tooltip 
                  formatter={(value) => [formatCurrency(Number(value)), 'Annual Budget']}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#0078D4" 
                  strokeWidth={4} 
                  dot={{ fill: '#0078D4', strokeWidth: 2, r: 8 }}
                  activeDot={{ r: 10, fill: '#5B2D8E' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-600">+18.4%</div>
              <div className="text-sm text-gray-600">5-Year Growth</div>
            </div>
            <div className="p-4 bg-green-50 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600">₱70M</div>
              <div className="text-sm text-gray-600">Total Increase</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600">3.5%</div>
              <div className="text-sm text-gray-600">Avg Annual Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="ms-grid-dense" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Sector Breakdown Table */}
        <div className="fluent-card">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
            <h3 className="ms-text-subtitle">Detailed Sector Analysis</h3>
            <p className="text-sm text-gray-600 mt-1">Comprehensive breakdown by government sector</p>
          </div>
          <div className="p-6">
            <div className="overflow-hidden">
              {budgetBySection.map((sector, index) => (
                <div key={index} className={`fluent-card fluent-card-${
                  sector.name === 'Education' ? 'blue' :
                  sector.name === 'Health' ? 'purple' :
                  sector.name === 'Infrastructure' ? 'teal' :
                  sector.name === 'Social Services' ? 'green' : 'orange'
                } p-4 mb-4 group hover:shadow-lg transition-all cursor-pointer`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-lg">{sector.name}</h4>
                    <div className={`ms-pill ms-pill-${
                      sector.name === 'Education' ? 'blue' :
                      sector.name === 'Health' ? 'purple' :
                      sector.name === 'Infrastructure' ? 'teal' :
                      sector.name === 'Social Services' ? 'green' : 'orange'
                    }`}>
                      {sector.percentage}% of Budget
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold" style={{ color: sector.color }}>
                      {formatCurrency(sector.amount)}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Allocated Amount</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000" 
                      style={{ 
                        width: `${sector.percentage}%`,
                        backgroundColor: sector.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Downloadable Documents */}
        <div className="fluent-card fluent-card-green">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-teal-50">
            <h3 className="ms-text-subtitle flex items-center">
              <Download className="w-5 h-5 mr-2 text-green-600" />
              Budget Resources
            </h3>
            <p className="text-sm text-gray-600 mt-1">Official documents and reports</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {budgetDocuments.map((doc, index) => (
                <div key={index} className="group p-4 border border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{doc.title}</h4>
                      <div className="flex items-center space-x-3 text-sm text-gray-600 mt-2">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {doc.date}
                        </span>
                        <span>{doc.size}</span>
                      </div>
                      <div className={`ms-pill ms-pill-${
                        doc.type === 'PDF' ? 'blue' : 'green'
                      } mt-2`}>
                        {doc.type}
                      </div>
                    </div>
                    <button className="p-3 rounded-xl text-green-600 hover:text-white hover:bg-green-600 transition-all group-hover:scale-110">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="ms-button w-full">
                <Download className="w-4 h-4 mr-2" />
                Download All Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budget