import { useState } from 'react';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { getSessionsByDateRange } from '../data';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth, addMonths, subMonths } from 'date-fns';
import type { Session } from '../types';

const SessionCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1)); // February 2026
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const monthSessions = getSessionsByDateRange(
    format(monthStart, 'yyyy-MM-dd'),
    format(monthEnd, 'yyyy-MM-dd')
  );

  const getSessionForDate = (date: Date) => {
    return monthSessions.find(session => 
      isSameDay(new Date(session.date), date)
    );
  };

  const getSessionStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSessionTypeColor = (type: string) => {
    return type === 'Special' 
      ? 'bg-purple-100 text-purple-800' 
      : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Calendar className="h-8 w-8 mr-3 text-[#0D1B2A]" />
              Session Calendar
            </h1>
            <p className="mt-2 text-gray-600">
              View council session schedules, agendas, and minutes
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md">
              {/* Calendar Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {format(currentDate, 'MMMM yyyy')}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-6">
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {monthDays.map((day, index) => {
                    const session = getSessionForDate(day);
                    const isCurrentMonth = isSameMonth(day, currentDate);
                    
                    return (
                      <div
                        key={index}
                        className={`min-h-24 p-2 border rounded-md ${
                          isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                        } ${session ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                        onClick={() => session && setSelectedSession(session)}
                      >
                        <div className={`text-sm ${
                          isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {format(day, 'd')}
                        </div>
                        {session && (
                          <div className={`mt-1 p-1 rounded text-xs ${getSessionStatusColor(session.status)}`}>
                            <div className="font-medium">{session.type}</div>
                            <div className="text-xs">2:00 PM</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Session Details Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Session Details</h3>
              </div>
              <div className="p-6">
                {selectedSession ? (
                  <div>
                    <div className="mb-4">
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSessionTypeColor(selectedSession.type)}`}>
                        {selectedSession.type} Session
                      </div>
                      <div className={`inline-block ml-2 px-2 py-1 rounded-full text-xs font-medium ${getSessionStatusColor(selectedSession.status)}`}>
                        {selectedSession.status}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {format(new Date(selectedSession.date), 'MMMM dd, yyyy')}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        2:00 PM - 5:00 PM
                      </div>
                      {selectedSession.attendance && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {selectedSession.attendance.length} members attended
                        </div>
                      )}
                    </div>

                    {selectedSession.agenda && (
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900 mb-3">Agenda</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {selectedSession.agenda.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 text-gray-400">{index + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedSession.minutes && (
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900 mb-3">Minutes</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedSession.minutes}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p>Select a session date to view details</p>
                  </div>
                )}
              </div>
            </div>

            {/* Session Summary */}
            <div className="mt-6 bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Session Summary</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Regular Sessions</span>
                    <span className="text-sm font-medium text-gray-900">
                      {monthSessions.filter(s => s.type === 'Regular').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Special Sessions</span>
                    <span className="text-sm font-medium text-gray-900">
                      {monthSessions.filter(s => s.type === 'Special').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Completed</span>
                    <span className="text-sm font-medium text-green-600">
                      {monthSessions.filter(s => s.status === 'Completed').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Scheduled</span>
                    <span className="text-sm font-medium text-blue-600">
                      {monthSessions.filter(s => s.status === 'Scheduled').length}
                    </span>
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

export default SessionCalendarPage;