import { useState } from 'react';
import { Users, User, Mail, Phone, Building2, FileText, Scale } from 'lucide-react';
import { councilMembers, getOrdinancesByAuthor, getResolutionsByAuthor } from '../data';
import type { CouncilMember } from '../types';

const CouncilMembersPage = () => {
  const [selectedMember, setSelectedMember] = useState<CouncilMember | null>(null);

  const getMemberStats = (member: CouncilMember) => {
    const ordinances = getOrdinancesByAuthor(member.name);
    const resolutions = getResolutionsByAuthor(member.name);
    return {
      ordinances: ordinances.length,
      resolutions: resolutions.length,
      committees: member.committees.length
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Users className="h-8 w-8 mr-3 text-[#0D1B2A]" />
              City Council Members
            </h1>
            <p className="mt-2 text-gray-600">
              Meet your elected representatives and their legislative work
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Members Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {councilMembers.map((member) => {
                const stats = getMemberStats(member);
                return (
                  <div
                    key={member.id}
                    className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-colors ${
                      selectedMember?.id === member.id ? 'ring-2 ring-[#0D1B2A]' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <User className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {member.name.replace('Hon. ', '')}
                        </h3>
                        <p className="text-sm text-[#0D1B2A] font-medium">
                          {member.position}
                        </p>
                        {member.district && (
                          <p className="text-sm text-gray-500">{member.district}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{member.party}</span>
                      <span>{member.term}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div>
                        <div className="text-lg font-bold text-[#0D1B2A]">{stats.ordinances}</div>
                        <div className="text-gray-500">Ordinances</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#0D1B2A]">{stats.resolutions}</div>
                        <div className="text-gray-500">Resolutions</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#0D1B2A]">{stats.committees}</div>
                        <div className="text-gray-500">Committees</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Member Details Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md sticky top-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Member Profile</h3>
              </div>
              <div className="p-6">
                {selectedMember ? (
                  <div>
                    {/* Profile */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <User className="h-12 w-12 text-gray-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {selectedMember.name.replace('Hon. ', '')}
                      </h4>
                      <p className="text-[#0D1B2A] font-medium mb-1">
                        {selectedMember.position}
                      </p>
                      {selectedMember.district && (
                        <p className="text-gray-500 text-sm">{selectedMember.district}</p>
                      )}
                      <p className="text-gray-500 text-sm">{selectedMember.party}</p>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6">
                      <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                      <div className="space-y-2">
                        {selectedMember.contact.email && (
                          <div className="flex items-center text-sm">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            <a 
                              href={`mailto:${selectedMember.contact.email}`} 
                              className="text-[#0D1B2A] hover:underline"
                            >
                              {selectedMember.contact.email}
                            </a>
                          </div>
                        )}
                        {selectedMember.contact.phone && (
                          <div className="flex items-center text-sm">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">{selectedMember.contact.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Committee Assignments */}
                    <div className="mb-6">
                      <h5 className="font-medium text-gray-900 mb-3">Committee Assignments</h5>
                      <div className="space-y-2">
                        {selectedMember.committees.map((committee, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Building2 className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">{committee}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legislative Work */}
                    <div className="mb-6">
                      <h5 className="font-medium text-gray-900 mb-3">Legislative Work</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <Scale className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">Authored Ordinances</span>
                          </div>
                          <span className="text-[#0D1B2A] font-medium">
                            {getMemberStats(selectedMember).ordinances}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm">
                            <FileText className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">Authored Resolutions</span>
                          </div>
                          <span className="text-[#0D1B2A] font-medium">
                            {getMemberStats(selectedMember).resolutions}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Term Information */}
                    <div className="border-t pt-4">
                      <h5 className="font-medium text-gray-900 mb-2">Term Information</h5>
                      <div className="text-sm text-gray-600">
                        <p>Current Term: {selectedMember.term}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p>Select a council member to view their profile</p>
                  </div>
                )}
              </div>
            </div>

            {/* Council Statistics */}
            <div className="mt-6 bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Council Statistics</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Members</span>
                    <span className="text-sm font-medium text-gray-900">{councilMembers.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Presiding Officer</span>
                    <span className="text-sm font-medium text-gray-900">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Councilors</span>
                    <span className="text-sm font-medium text-gray-900">{councilMembers.length - 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Current Term</span>
                    <span className="text-sm font-medium text-gray-900">2022-2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilMembersPage;