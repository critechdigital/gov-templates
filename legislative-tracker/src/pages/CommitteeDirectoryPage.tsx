import { useState } from 'react';
import { Users, User, Calendar, Search, Building2 } from 'lucide-react';
import { committees, councilMembers } from '../data';
import type { Committee } from '../types';

const CommitteeDirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);

  const filteredCommittees = committees.filter(committee =>
    committee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    committee.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    committee.chairperson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMemberInfo = (memberName: string) => {
    return councilMembers.find(member => member.name === memberName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Building2 className="h-8 w-8 mr-3 text-[#0D1B2A]" />
              Committee Directory
            </h1>
            <p className="mt-2 text-gray-600">
              Explore city council committees, their members, and responsibilities
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Committee List */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search committees by name, chairperson, or description..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-[#0D1B2A] focus:border-[#0D1B2A]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-6">
              {filteredCommittees.map((committee) => (
                <div 
                  key={committee.id} 
                  className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-colors ${
                    selectedCommittee?.id === committee.id ? 'ring-2 ring-[#0D1B2A]' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedCommittee(committee)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {committee.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {committee.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>Chair: {committee.chairperson.replace('Hon. ', '')}</span>
                        </div>
                        {committee.viceChair && (
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>Vice Chair: {committee.viceChair.replace('Hon. ', '')}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{committee.members.length} members</span>
                        </div>
                      </div>

                      {committee.meetingSchedule && (
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{committee.meetingSchedule}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCommittees.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No committees found</h3>
                <p className="text-gray-500">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>

          {/* Committee Details Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md sticky top-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Committee Details</h3>
              </div>
              <div className="p-6">
                {selectedCommittee ? (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {selectedCommittee.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {selectedCommittee.description}
                    </p>

                    {/* Leadership */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Leadership</h5>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center mr-3">
                            <User className="h-4 w-4 text-[#0D1B2A]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {selectedCommittee.chairperson.replace('Hon. ', '')}
                            </div>
                            <div className="text-xs text-gray-500">Chairperson</div>
                          </div>
                        </div>
                        {selectedCommittee.viceChair && (
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {selectedCommittee.viceChair.replace('Hon. ', '')}
                              </div>
                              <div className="text-xs text-gray-500">Vice Chairperson</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Members */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Members</h5>
                      <div className="space-y-2">
                        {selectedCommittee.members.map((memberName, index) => {
                          const member = getMemberInfo(memberName);
                          return (
                            <div key={index} className="flex items-center">
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                                <User className="h-3 w-3 text-gray-500" />
                              </div>
                              <div className="text-sm text-gray-700">
                                {memberName.replace('Hon. ', '')}
                                {member?.district && (
                                  <span className="text-gray-500"> - {member.district}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Meeting Schedule */}
                    {selectedCommittee.meetingSchedule && (
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Meeting Schedule</h5>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{selectedCommittee.meetingSchedule}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p>Select a committee to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeDirectoryPage;