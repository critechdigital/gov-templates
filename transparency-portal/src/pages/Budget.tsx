import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Download, Calendar, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const Budget = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026')

  const budgetBySection = [
    { name: 'Education', amount: 135000000, percentage: 30, color: '#0038A8' },
    { name: 'Health', amount: 90000000, percentage: 20, color: '#1E40AF' },
    { name: 'Infrastructure', amount: 112500000, percentage: 25, color: '#3B82F6' },
    { name: 'Social Services', amount: 67500000, percentage: 15, color: '#60A5FA' },
    { name: 'General Administration', amount: 45000000, percentage: 10, color: '#93C5FD' },
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Budget Transparency</h1>
        <p className="text-gray-600">Annual budget breakdown and expenditure tracking for Municipality of San Rafael, Bulacan</p>
      </div>

      {/* Budget Summary */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Budget Summary</h2>
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>2025-2026</option>
            <option>2024-2025</option>
            <option>2023-2024</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">₱450M</h3>
            <p className="text-gray-600">Total Annual Budget</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600">₱415.1M</h3>
            <p className="text-gray-600">Total Expenditure</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-600">92.2%</h3>
            <p className="text-gray-600">Utilization Rate</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Pie Chart - Budget by Sector */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Budget Allocation by Sector</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetBySection}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                  label={({ name }) => name}
                >
                  {budgetBySection.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart - Quarterly Expenditure */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quarterly Expenditure Tracking</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyExpenditure}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), '']} />
                <Bar dataKey="budgeted" fill="#E5E7EB" name="Budgeted" />
                <Bar dataKey="actual" fill="#0038A8" name="Actual" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Budget Trend */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          5-Year Budget Trend
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={budgetTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Budget']} />
              <Line type="monotone" dataKey="amount" stroke="#0038A8" strokeWidth={3} dot={{ fill: '#0038A8', r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sector Breakdown Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Detailed Sector Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocated Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {budgetBySection.map((sector, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sector.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(sector.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sector.percentage}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Downloadable Documents */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Download className="w-5 h-5 mr-2 text-blue-600" />
          Downloadable Budget Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetDocuments.map((doc, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {doc.date}
                    </span>
                    <span>{doc.size}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{doc.type}</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Budget