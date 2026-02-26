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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Legislative Tracking System
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              {cityInfo.name}
            </p>
            <p className="text-lg text-[#FFD700] mb-8">
              Transparency • Accountability • Progress
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ordinances" 
                className="bg-[#FFD700] text-[#0D1B2A] px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
              >
                Browse Ordinances
              </Link>
              <Link 
                to="/sessions" 
                className="border-2 border-[#FFD700] text-[#FFD700] px-6 py-3 rounded-md font-semibold hover:bg-[#FFD700] hover:text-[#0D1B2A] transition-colors"
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
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Scale className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalOrdinances}</div>
            <div className="text-sm text-gray-600">Total Ordinances</div>
            <div className="text-xs text-green-600 mt-1">{stats.activeOrdinances} Active</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalResolutions}</div>
            <div className="text-sm text-gray-600">Resolutions</div>
            <div className="text-xs text-blue-600 mt-1">2024 Active</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Gavel className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.pendingBills}</div>
            <div className="text-sm text-gray-600">Pending Bills</div>
            <div className="text-xs text-orange-600 mt-1">Under Review</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.completedSessions}</div>
            <div className="text-sm text-gray-600">Sessions Completed</div>
            <div className="text-xs text-green-600 mt-1">{stats.upcomingSessions} Upcoming</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Ordinances */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-[#0D1B2A]" />
                    Latest Ordinances
                  </h2>
                  <Link to="/ordinances" className="text-[#0D1B2A] hover:text-[#FFD700] text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrdinances.map((ordinance) => (
                    <div key={ordinance.id} className="border-l-4 border-[#FFD700] pl-4 py-2">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {ordinance.number}
                      </h3>
                      <p className="text-gray-700 mb-2">{ordinance.title}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>By {ordinance.author}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            ordinance.status === 'Active' 
                              ? 'bg-green-100 text-green-800'
                              : ordinance.status === 'Amended'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
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
            <div className="bg-white rounded-lg shadow-md mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#0D1B2A]" />
                    Upcoming Sessions
                  </h2>
                  <Link to="/sessions" className="text-[#0D1B2A] hover:text-[#FFD700] text-sm font-medium">
                    View Calendar →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-[#0D1B2A] text-white rounded-lg flex items-center justify-center">
                          <span className="text-sm font-semibold">
                            {format(new Date(session.date), 'dd')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {session.type} Session
                        </p>
                        <p className="text-sm text-gray-500">
                          {format(new Date(session.date), 'MMMM dd, yyyy')}
                        </p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1 text-gray-400" />
                          <span className="text-xs text-gray-400">2:00 PM</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Latest Resolutions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#0D1B2A]" />
                    Recent Resolutions
                  </h2>
                  <Link to="/resolutions" className="text-[#0D1B2A] hover:text-[#FFD700] text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {recentResolutions.map((resolution) => (
                    <div key={resolution.id} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                      <p className="font-medium text-gray-900 text-sm mb-1">
                        {resolution.title}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{resolution.type}</span>
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
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#0D1B2A]" />
                  City Council Leadership
                </h2>
                <Link to="/council" className="text-[#0D1B2A] hover:text-[#FFD700] text-sm font-medium">
                  View All Members →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMembers.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{member.name.replace('Hon. ', '')}</h3>
                    <p className="text-sm text-[#0D1B2A] mb-1">{member.position}</p>
                    {member.district && (
                      <p className="text-xs text-gray-500">{member.district}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{member.party}</p>
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