import { Users, Mail, Phone, Building, Shield, Eye } from 'lucide-react';
import { bacMembers } from '../data/mockData';

export default function BACComposition() {
  const getRoleColor = (role: string): string => {
    switch (role) {
      case 'Chairman':
        return 'bg-blue-100 text-blue-800';
      case 'Vice-Chairman':
        return 'bg-purple-100 text-purple-800';
      case 'Member':
        return 'bg-green-100 text-green-800';
      case 'TWG':
        return 'bg-orange-100 text-orange-800';
      case 'Secretariat':
        return 'bg-gray-100 text-gray-800';
      case 'Observer':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Chairman':
      case 'Vice-Chairman':
        return <Shield className="w-5 h-5" />;
      case 'Observer':
        return <Eye className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const groupedMembers = {
    leadership: bacMembers.filter(member => ['Chairman', 'Vice-Chairman'].includes(member.role)),
    members: bacMembers.filter(member => member.role === 'Member'),
    support: bacMembers.filter(member => ['TWG', 'Secretariat'].includes(member.role)),
    observers: bacMembers.filter(member => member.role === 'Observer')
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-[#0038A8]" />
          <h1 className="text-2xl font-bold text-gray-900">BAC Composition</h1>
        </div>
        <p className="text-gray-600">
          The Bids and Awards Committee (BAC) is responsible for conducting procurement activities 
          in accordance with RA 9184 and its implementing rules and regulations. The committee ensures 
          transparency, competitiveness, and efficiency in government procurement.
        </p>
      </div>

      {/* Committee Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="p-3 bg-blue-100 rounded-full w-12 h-12 mx-auto mb-3">
            <Shield className="w-6 h-6 text-blue-600 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">2</h3>
          <p className="text-sm text-gray-600">Leadership</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="p-3 bg-green-100 rounded-full w-12 h-12 mx-auto mb-3">
            <Users className="w-6 h-6 text-green-600 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{groupedMembers.members.length}</h3>
          <p className="text-sm text-gray-600">Members</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="p-3 bg-orange-100 rounded-full w-12 h-12 mx-auto mb-3">
            <Building className="w-6 h-6 text-orange-600 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{groupedMembers.support.length}</h3>
          <p className="text-sm text-gray-600">Support Staff</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
          <div className="p-3 bg-yellow-100 rounded-full w-12 h-12 mx-auto mb-3">
            <Eye className="w-6 h-6 text-yellow-600 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{groupedMembers.observers.length}</h3>
          <p className="text-sm text-gray-600">Observers</p>
        </div>
      </div>

      {/* Leadership */}
      <section className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#0038A8]" />
          BAC Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groupedMembers.leadership.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  {getRoleIcon(member.role)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.organization}</p>
                  
                  <div className="space-y-2">
                    {member.contactEmail && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.contactEmail}`} className="hover:text-[#0038A8]">
                          {member.contactEmail}
                        </a>
                      </div>
                    )}
                    {member.contactPhone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{member.contactPhone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regular Members */}
      <section className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#0038A8]" />
          BAC Members
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedMembers.members.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-700 mb-1">{member.position}</p>
                  <p className="text-xs text-gray-600 mb-3">{member.organization}</p>
                  
                  <div className="space-y-1">
                    {member.contactEmail && (
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Mail className="w-3 h-3" />
                        <a href={`mailto:${member.contactEmail}`} className="hover:text-[#0038A8] truncate">
                          {member.contactEmail}
                        </a>
                      </div>
                    )}
                    {member.contactPhone && (
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{member.contactPhone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Staff */}
      <section className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Building className="w-5 h-5 text-[#0038A8]" />
          Technical Working Group & Secretariat
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groupedMembers.support.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Building className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.organization}</p>
                  
                  <div className="space-y-2">
                    {member.contactEmail && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.contactEmail}`} className="hover:text-[#0038A8]">
                          {member.contactEmail}
                        </a>
                      </div>
                    )}
                    {member.contactPhone && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{member.contactPhone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Observers */}
      <section className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#0038A8]" />
          Observers
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groupedMembers.observers.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Eye className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.organization}</p>
                  
                  <div className="space-y-2">
                    {member.contactEmail && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.contactEmail}`} className="hover:text-[#0038A8]">
                          {member.contactEmail}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Committee Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">BAC Responsibilities</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#0038A8] rounded-full mt-2"></div>
              <span>Conduct procurement activities in accordance with RA 9184</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#0038A8] rounded-full mt-2"></div>
              <span>Ensure competitive and transparent bidding process</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#0038A8] rounded-full mt-2"></div>
              <span>Evaluate bids and award contracts to qualified bidders</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#0038A8] rounded-full mt-2"></div>
              <span>Recommend award of contract to the Head of Procuring Entity</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#0038A8] rounded-full mt-2"></div>
              <span>Maintain procurement records and documentation</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Schedule & Contact</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Regular Meetings</h4>
              <p className="text-gray-700">Every Tuesday and Friday, 2:00 PM - 5:00 PM</p>
              <p className="text-gray-600">Conference Room A, 2nd Floor, Provincial Capitol</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Special Meetings</h4>
              <p className="text-gray-700">As needed for urgent procurement activities</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">BAC Secretariat Contact</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>(044) 662-1109</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bac@bulacan.gov.ph" className="hover:text-[#0038A8]">
                    bac@bulacan.gov.ph
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Framework */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Legal Framework</h3>
        <p className="text-sm text-blue-800 mb-3">
          The Bids and Awards Committee is established in accordance with Republic Act No. 9184, 
          also known as the "Government Procurement Reform Act" and its Implementing Rules and Regulations.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-blue-900 mb-1">RA 9184</h4>
            <p className="text-blue-800">Government Procurement Reform Act</p>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-1">RA 12009</h4>
            <p className="text-blue-800">Amendment to RA 9184</p>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-1">IRR-A</h4>
            <p className="text-blue-800">Implementing Rules and Regulations</p>
          </div>
        </div>
      </div>
    </div>
  );
}