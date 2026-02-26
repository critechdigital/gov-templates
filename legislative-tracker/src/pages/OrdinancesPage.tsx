import { useState, useMemo } from 'react';
import { Search, Scale, Download, Eye, Calendar, User, Tag } from 'lucide-react';
import { ordinances } from '../data';
import { format } from 'date-fns';

const OrdinancesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Get unique values for filters
  const categories = ['All', ...new Set(ordinances.map(ord => ord.category))];
  const authors = ['All', ...new Set(ordinances.map(ord => ord.author))];
  const statuses = ['All', ...new Set(ordinances.map(ord => ord.status))];
  const years = ['All', ...new Set(ordinances.map(ord => new Date(ord.dateEnacted).getFullYear().toString()))];

  // Filter and sort ordinances
  const filteredOrdinances = useMemo(() => {
    let filtered = ordinances;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(ord => 
        ord.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ord.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ord.summary?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(ord => ord.category === selectedCategory);
    }

    // Author filter
    if (selectedAuthor !== 'All') {
      filtered = filtered.filter(ord => ord.author === selectedAuthor);
    }

    // Status filter
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(ord => ord.status === selectedStatus);
    }

    // Year filter
    if (selectedYear !== 'All') {
      filtered = filtered.filter(ord => 
        new Date(ord.dateEnacted).getFullYear().toString() === selectedYear
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.dateEnacted);
          bValue = new Date(b.dateEnacted);
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'number':
          aValue = a.number.toLowerCase();
          bValue = b.number.toLowerCase();
          break;
        case 'author':
          aValue = a.author.toLowerCase();
          bValue = b.author.toLowerCase();
          break;
        default:
          aValue = a.dateEnacted;
          bValue = b.dateEnacted;
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedAuthor, selectedStatus, selectedYear, sortBy, sortOrder]);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Amended':
        return 'bg-yellow-100 text-yellow-800';
      case 'Repealed':
        return 'bg-red-100 text-red-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Tax': 'bg-purple-100 text-purple-800',
      'Traffic': 'bg-red-100 text-red-800',
      'Health': 'bg-green-100 text-green-800',
      'Environment': 'bg-emerald-100 text-emerald-800',
      'Peace & Order': 'bg-blue-100 text-blue-800',
      'Zoning': 'bg-orange-100 text-orange-800',
      'Education': 'bg-indigo-100 text-indigo-800',
      'Infrastructure': 'bg-gray-100 text-gray-800',
      'Business': 'bg-yellow-100 text-yellow-800',
      'Social Services': 'bg-pink-100 text-pink-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Page Header */}
      <div className="bg-white border-b border-[#AEA79F]/20 rounded-b-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#2C001E] flex items-center">
                  <Scale className="h-8 w-8 mr-3 text-[#E95420]" />
                  City Ordinances
                </h1>
                <p className="mt-2 text-[#AEA79F]">
                  Browse and search the complete database of city ordinances
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#AEA79F]">Total Ordinances</p>
                <p className="text-2xl font-bold text-[#E95420]">{filteredOrdinances.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-[#AEA79F]/20 mb-8">
          <div className="p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-[#AEA79F]" />
                <input
                  type="text"
                  placeholder="Search ordinances by title, number, or content..."
                  className="w-full pl-10 pr-4 py-3 border border-[#AEA79F]/30 rounded-lg focus:ring-[#E95420] focus:border-[#E95420] transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {authors.map(author => (
                    <option key={author} value={author}>
                      {author === 'All' ? 'All Authors' : author.replace('Hon. ', '')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <button
                onClick={() => handleSort('date')}
                className={`px-3 py-1 rounded text-sm ${
                  sortBy === 'date' 
                    ? 'bg-[#0D1B2A] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Date {sortBy === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button
                onClick={() => handleSort('title')}
                className={`px-3 py-1 rounded text-sm ${
                  sortBy === 'title' 
                    ? 'bg-[#0D1B2A] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Title {sortBy === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button
                onClick={() => handleSort('number')}
                className={`px-3 py-1 rounded text-sm ${
                  sortBy === 'number' 
                    ? 'bg-[#0D1B2A] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Number {sortBy === 'number' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
            </div>
          </div>
        </div>

        {/* Ordinances List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Ordinances ({filteredOrdinances.length} found)
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredOrdinances.map((ordinance) => (
              <div key={ordinance.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 mr-3">
                        {ordinance.number}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ordinance.status)}`}>
                        {ordinance.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-900 mb-3 text-base leading-relaxed">
                      {ordinance.title}
                    </p>
                    
                    {ordinance.summary && (
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {ordinance.summary}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{ordinance.author.replace('Hon. ', '')}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{format(new Date(ordinance.dateEnacted), 'MMMM dd, yyyy')}</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(ordinance.category)}`}>
                          {ordinance.category}
                        </span>
                      </div>
                    </div>

                    {ordinance.tags && ordinance.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {ordinance.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <button className="flex items-center px-3 py-2 text-sm bg-[#0D1B2A] text-white rounded hover:bg-gray-800 transition-colors">
                      <Eye className="h-4 w-4 mr-1" />
                      View Full Text
                    </button>
                    <button className="flex items-center px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOrdinances.length === 0 && (
            <div className="p-12 text-center">
              <Scale className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No ordinances found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdinancesPage;