import { Link } from 'react-router-dom';
import { Calendar, FileText, Scale, Users, Clock, Gavel } from 'lucide-react';
import { 
  getRecentOrdinances, 
  getRecentResolutions, 
  getUpcomingSessions,
  councilMembers,
  getLegislativeStats,
  cityInfo 
} from '../data';
import { format } from 'date-fns';

const HomePage = () => {
  const recentOrdinances = getRecentOrdinances(5);
  const recentResolutions = getRecentResolutions(3);
  const upcomingSessions = getUpcomingSessions(3);
  const stats = getLegislativeStats();
  const featuredMembers = councilMembers.slice(0, 4); // Vice Mayor + 3 Councilors

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Hero Section */}
      <div className="bg-[#2C001E] text-white ubuntu-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Legislative Tracking System
            </h1>
            <p className="text-xl text-[#AEA79F] mb-2">
              {cityInfo.name}
            </p>
            <p className="text-lg text-[#E95420] mb-8 font-medium">
              Transparency • Accountability • Progress
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ordinances" 
                className="bg-[#E95420] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d4421c] transition-colors shadow-md"
              >
                Browse Ordinances
              </Link>
              <Link 
                to="/sessions" 
                className="border-2 border-[#E95420] text-[#E95420] px-6 py-3 rounded-lg font-semibold hover:bg-[#E95420] hover:text-white transition-colors"
              >
                Session Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-[#AEA79F]/20">
            <div className="w-12 h-12 bg-[#E95420]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Scale className="h-6 w-6 text-[#E95420]" />
            </div>
            <div className="text-3xl font-bold text-[#2C001E] mb-1">{stats.totalOrdinances}</div>
            <div className="text-sm text-[#AEA79F]">Total Ordinances</div>
            <div className="text-xs text-[#E95420] mt-1 font-medium">{stats.activeOrdinances} Active</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-[#AEA79F]/20">
            <div className="w-12 h-12 bg-[#77216F]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 w-6 text-[#77216F]" />
            </div>
            <div className="text-3xl font-bold text-[#2C001E] mb-1">{stats.totalResolutions}</div>
            <div className="text-sm text-[#AEA79F]">Resolutions</div>
            <div className="text-xs text-[#77216F] mt-1 font-medium">2024 Active</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-[#AEA79F]/20">
            <div className="w-12 h-12 bg-[#E95420]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Gavel className="h-6 w-6 text-[#E95420]" />
            </div>
            <div className="text-3xl font-bold text-[#2C001E] mb-1">{stats.pendingBills}</div>
            <div className="text-sm text-[#AEA79F]">Pending Bills</div>
            <div className="text-xs text-[#E95420] mt-1 font-medium">Under Review</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-[#AEA79F]/20">
            <div className="w-12 h-12 bg-[#77216F]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-[#77216F]" />
            </div>
            <div className="text-3xl font-bold text-[#2C001E] mb-1">{stats.completedSessions}</div>
            <div className="text-sm text-[#AEA79F]">Sessions Completed</div>
            <div className="text-xs text-[#77216F] mt-1 font-medium">{stats.upcomingSessions} Upcoming</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Ordinances */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-[#AEA79F]/20">
              <div className="px-6 py-4 border-b border-[#AEA79F]/20">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#2C001E] flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-[#E95420]" />
                    Latest Ordinances
                  </h2>
                  <Link to="/ordinances" className="text-[#E95420] hover:text-[#d4421c] text-sm font-medium transition-colors">
                    View All →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrdinances.map((ordinance) => (
                    <div key={ordinance.id} className="border-l-4 border-[#E95420] pl-4 py-2 hover:bg-[#F7F7F7] rounded-r-lg transition-colors">
                      <h3 className="font-semibold text-[#2C001E] mb-1">
                        {ordinance.number}
                      </h3>
                      <p className="text-[#77216F] mb-2">{ordinance.title}</p>
                      <div className="flex items-center justify-between text-sm text-[#AEA79F]">
                        <span>By {ordinance.author}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            ordinance.status === 'Active' 
                              ? 'bg-[#E95420]/10 text-[#E95420]'
                              : ordinance.status === 'Amended'
                              ? 'bg-[#77216F]/10 text-[#77216F]'
                              : 'bg-[#AEA79F]/10 text-[#AEA79F]'
                          }`}>
                            {ordinance.status}
                          </span>
                          <span>{format(new Date(ordinance.dateEnacted), 'MMM dd, yyyy')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-[#AEA79F]/20 mb-8">
              <div className="px-6 py-4 border-b border-[#AEA79F]/20">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#2C001E] flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#E95420]" />
                    Upcoming Sessions
                  </h2>
                  <Link to="/sessions" className="text-[#E95420] hover:text-[#d4421c] text-sm font-medium transition-colors">
                    View Calendar →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-start space-x-3 hover:bg-[#F7F7F7] rounded-lg p-2 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-[#E95420] text-white rounded-xl flex items-center justify-center shadow-md">
                          <span className="text-sm font-semibold">
                            {format(new Date(session.date), 'dd')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#2C001E]">
                          {session.type} Session
                        </p>
                        <p className="text-sm text-[#77216F]">
                          {format(new Date(session.date), 'MMMM dd, yyyy')}
                        </p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1 text-[#AEA79F]" />
                          <span className="text-xs text-[#AEA79F]">2:00 PM</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Latest Resolutions */}
            <div className="bg-white rounded-xl shadow-lg border border-[#AEA79F]/20">
              <div className="px-6 py-4 border-b border-[#AEA79F]/20">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#2C001E] flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#E95420]" />
                    Recent Resolutions
                  </h2>
                  <Link to="/resolutions" className="text-[#E95420] hover:text-[#d4421c] text-sm font-medium transition-colors">
                    View All →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {recentResolutions.map((resolution) => (
                    <div key={resolution.id} className="border-b border-[#AEA79F]/20 last:border-b-0 pb-3 last:pb-0 hover:bg-[#F7F7F7] rounded-lg p-2 transition-colors">
                      <p className="font-medium text-[#2C001E] text-sm mb-1">
                        {resolution.title}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#AEA79F]">
                        <span className="text-[#77216F] font-medium">{resolution.type}</span>
                        <span>{format(new Date(resolution.dateEnacted), 'MMM dd')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Council Members */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg border border-[#AEA79F]/20">
            <div className="px-6 py-4 border-b border-[#AEA79F]/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#2C001E] flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#E95420]" />
                  City Council Leadership
                </h2>
                <Link to="/council" className="text-[#E95420] hover:text-[#d4421c] text-sm font-medium transition-colors">
                  View All Members →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMembers.map((member) => (
                  <div key={member.id} className="text-center p-4 rounded-xl hover:bg-[#F7F7F7] transition-colors">
                    <div className="w-20 h-20 bg-[#E95420]/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-10 w-10 text-[#E95420]" />
                    </div>
                    <h3 className="font-semibold text-[#2C001E] mb-1">{member.name.replace('Hon. ', '')}</h3>
                    <p className="text-sm text-[#E95420] mb-1 font-medium">{member.position}</p>
                    {member.district && (
                      <p className="text-xs text-[#77216F]">{member.district}</p>
                    )}
                    <p className="text-xs text-[#AEA79F] mt-1">{member.party}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;