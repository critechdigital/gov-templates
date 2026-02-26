import { useState, useMemo } from 'react';
import { Search, FileText, Download, Eye, Calendar, User, Tag } from 'lucide-react';
import { resolutions } from '../data';
import { format } from 'date-fns';

const ResolutionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Get unique values for filters
  const types = ['All', ...new Set(resolutions.map(res => res.type))];
  const authors = ['All', ...new Set(resolutions.map(res => res.author))];
  const years = ['All', ...new Set(resolutions.map(res => new Date(res.dateEnacted).getFullYear().toString()))];

  // Filter and sort resolutions
  const filteredResolutions = useMemo(() => {
    let filtered = resolutions;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(res => 
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.recipient?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Type filter
    if (selectedType !== 'All') {
      filtered = filtered.filter(res => res.type === selectedType);
    }

    // Author filter
    if (selectedAuthor !== 'All') {
      filtered = filtered.filter(res => res.author === selectedAuthor);
    }

    // Year filter
    if (selectedYear !== 'All') {
      filtered = filtered.filter(res => 
        new Date(res.dateEnacted).getFullYear().toString() === selectedYear
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
  }, [searchTerm, selectedType, selectedAuthor, selectedYear, sortBy, sortOrder]);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Commendation': 'bg-green-100 text-green-800',
      'Endorsement': 'bg-blue-100 text-blue-800',
      'Request to National Agency': 'bg-purple-100 text-purple-800',
      'Declaration': 'bg-yellow-100 text-yellow-800',
      'Authorization': 'bg-orange-100 text-orange-800',
      'Appreciation': 'bg-pink-100 text-pink-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  <FileText className="h-8 w-8 mr-3 text-[#0D1B2A]" />
                  City Resolutions
                </h1>
                <p className="mt-2 text-gray-600">
                  Browse resolutions, commendations, endorsements, and official declarations
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Resolutions</p>
                <p className="text-2xl font-bold text-[#0D1B2A]">{filteredResolutions.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resolutions by title, number, recipient, or content..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
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
            </div>
          </div>
        </div>

        {/* Resolutions List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Resolutions ({filteredResolutions.length} found)
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredResolutions.map((resolution) => (
              <div key={resolution.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 mr-3">
                        {resolution.number}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resolution.type)}`}>
                        {resolution.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-900 mb-3 text-base leading-relaxed">
                      {resolution.title}
                    </p>
                    
                    {resolution.summary && (
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {resolution.summary}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{resolution.author.replace('Hon. ', '')}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{format(new Date(resolution.dateEnacted), 'MMMM dd, yyyy')}</span>
                      </div>
                      {resolution.recipient && (
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          <span className="text-blue-600">{resolution.recipient}</span>
                        </div>
                      )}
                    </div>

                    {resolution.tags && resolution.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {resolution.tags.map((tag, index) => (
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

          {filteredResolutions.length === 0 && (
            <div className="p-12 text-center">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No resolutions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResolutionsPage;