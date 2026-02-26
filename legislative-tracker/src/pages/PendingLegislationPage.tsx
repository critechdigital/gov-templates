import { useState, useMemo } from 'react';
import { Search, Gavel, User, Calendar, Building2, FileText } from 'lucide-react';
import { pendingBills } from '../data';
import { format } from 'date-fns';

const PendingLegislationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedCommittee, setSelectedCommittee] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [sortBy] = useState('date');
  const [sortOrder] = useState('desc');

  // Get unique values for filters
  const stages = ['All', ...new Set(pendingBills.map(bill => bill.stage))];
  const committees = ['All', ...new Set(pendingBills.map(bill => bill.committee))];
  const authors = ['All', ...new Set(pendingBills.map(bill => bill.author))];

  // Filter and sort bills
  const filteredBills = useMemo(() => {
    let filtered = pendingBills;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(bill => 
        bill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bill.abstract.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Stage filter
    if (selectedStage !== 'All') {
      filtered = filtered.filter(bill => bill.stage === selectedStage);
    }

    // Committee filter
    if (selectedCommittee !== 'All') {
      filtered = filtered.filter(bill => bill.committee === selectedCommittee);
    }

    // Author filter
    if (selectedAuthor !== 'All') {
      filtered = filtered.filter(bill => bill.author === selectedAuthor);
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.dateFiled);
          bValue = new Date(b.dateFiled);
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          aValue = a.dateFiled;
          bValue = b.dateFiled;
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedStage, selectedCommittee, selectedAuthor, sortBy, sortOrder]);

  const getStageColor = (stage: string) => {
    const colors: { [key: string]: string } = {
      'Committee Level': 'bg-yellow-100 text-yellow-800',
      '1st Reading': 'bg-blue-100 text-blue-800',
      '2nd Reading': 'bg-purple-100 text-purple-800',
      '3rd Reading': 'bg-orange-100 text-orange-800',
      'Approved': 'bg-green-100 text-green-800',
      'Vetoed': 'bg-red-100 text-red-800',
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  const getStageProgress = (stage: string) => {
    const stages = ['Committee Level', '1st Reading', '2nd Reading', '3rd Reading', 'Approved'];
    const currentIndex = stages.indexOf(stage);
    return currentIndex >= 0 ? ((currentIndex + 1) / stages.length) * 100 : 0;
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
                  <Gavel className="h-8 w-8 mr-3 text-[#0D1B2A]" />
                  Pending Legislation
                </h1>
                <p className="mt-2 text-gray-600">
                  Track bills under deliberation and their progress through the legislative process
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Pending Bills</p>
                <p className="text-2xl font-bold text-[#0D1B2A]">{filteredBills.length}</p>
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
                  placeholder="Search pending bills by title or abstract..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reading Stage</label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Committee</label>
                <select
                  value={selectedCommittee}
                  onChange={(e) => setSelectedCommittee(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                >
                  {committees.map(committee => (
                    <option key={committee} value={committee}>{committee}</option>
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
            </div>
          </div>
        </div>

        {/* Bills List */}
        <div className="space-y-6">
          {filteredBills.map((bill) => (
            <div key={bill.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {bill.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{bill.author.replace('Hon. ', '')}</span>
                      </div>
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        <span>Committee on {bill.committee}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Filed: {format(new Date(bill.dateFiled), 'MMMM dd, yyyy')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStageColor(bill.stage)}`}>
                      {bill.stage}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Legislative Progress</span>
                    <span>{Math.round(getStageProgress(bill.stage))}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#0D1B2A] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getStageProgress(bill.stage)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {bill.abstract}
                  </p>
                </div>

                {bill.tags && bill.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {bill.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Next Action:</span> Committee Review
                  </div>
                  <button className="flex items-center px-4 py-2 text-sm bg-[#0D1B2A] text-white rounded hover:bg-gray-800 transition-colors">
                    <FileText className="h-4 w-4 mr-1" />
                    View Full Bill
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBills.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Gavel className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No pending bills found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingLegislationPage;