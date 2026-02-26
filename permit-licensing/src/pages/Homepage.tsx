import { Link } from 'react-router-dom';
import { FileText, Building, Shield, Briefcase, Users } from 'lucide-react';

const Homepage = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Permit',
      description: 'Apply for new business registration or renew existing permits',
      link: '/business-permit',
      color: 'bg-blue-500',
    },
    {
      icon: Building,
      title: 'Building Permit',
      description: 'Construction, renovation, and building permit applications',
      link: '/building-permit',
      color: 'bg-green-500',
    },
    {
      icon: FileText,
      title: 'Zoning Clearance',
      description: 'Zoning compliance certificates and clearances',
      link: '/building-permit',
      color: 'bg-purple-500',
    },
    {
      icon: Shield,
      title: 'Sanitary Permit',
      description: 'Health department clearances and sanitary permits',
      link: '/business-permit',
      color: 'bg-red-500',
    },
    {
      icon: Shield,
      title: 'Fire Safety',
      description: 'Fire safety inspections and clearance certificates',
      link: '/business-permit',
      color: 'bg-orange-500',
    },
    {
      icon: Users,
      title: 'Barangay Clearance',
      description: 'Community clearances and barangay certificates',
      link: '/business-permit',
      color: 'bg-indigo-500',
    },
  ];

  const announcements = [
    {
      date: '2026-02-25',
      title: 'Extended Holiday Schedule',
      content: 'City Hall will be closed on February 28 for EDSA People Power Revolution Day.',
      type: 'info',
    },
    {
      date: '2026-02-20',
      title: 'Business Permit Renewal Deadline',
      content: 'Reminder: All business permits must be renewed before March 31, 2026 to avoid penalties.',
      type: 'warning',
    },
    {
      date: '2026-02-15',
      title: 'New Online System Features',
      content: 'We have added document upload functionality and real-time application tracking.',
      type: 'success',
    },
    {
      date: '2026-02-10',
      title: 'Updated Fee Schedule',
      content: 'New fee structure for building permits is now in effect. Check the fee schedule for details.',
      type: 'info',
    },
    {
      date: '2026-02-01',
      title: 'System Maintenance',
      content: 'The online portal will undergo maintenance on February 29, 2:00 AM - 6:00 AM.',
      type: 'warning',
    },
  ];

  const getAnnouncementStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50 text-green-800';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50 text-yellow-800';
      case 'info':
      default:
        return 'border-blue-200 bg-blue-50 text-blue-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-[#0038A8] text-white rounded-lg px-8 py-12 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Online Permit and Licensing System
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Apply for permits and licenses online. Fast, convenient, and transparent 
            services for the citizens of Meycauayan.
          </p>
          <Link
            to="/tracker"
            className="inline-block bg-white text-[#0038A8] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Track Your Application
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
              >
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="inline-block bg-[#0038A8] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Two Column Layout for Announcements and Office Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Announcements */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Announcements</h2>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 ${getAnnouncementStyle(announcement.type)}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{announcement.title}</h3>
                  <span className="text-sm opacity-75">
                    {new Date(announcement.date).toLocaleDateString('en-PH')}
                  </span>
                </div>
                <p className="text-sm">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Hours and Quick Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h2>
          
          {/* Office Hours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-semibold">7:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-red-600">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
            <div className="space-y-3">
              <Link
                to="/requirements"
                className="block text-[#0038A8] hover:text-blue-700 font-medium"
              >
                Document Requirements →
              </Link>
              <Link
                to="/fee-schedule"
                className="block text-[#0038A8] hover:text-blue-700 font-medium"
              >
                Fee Schedule →
              </Link>
              <Link
                to="/contact"
                className="block text-[#0038A8] hover:text-blue-700 font-medium"
              >
                Contact Information →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;