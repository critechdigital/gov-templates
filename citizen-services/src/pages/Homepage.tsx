import { Link } from 'react-router-dom';
import { 
  FileText, 
  Heart, 
  Shield, 
  Building, 
  Calculator, 
  Wrench, 
  Phone, 
  Calendar,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { lguInfo, newsArticles, emergencyContacts } from '../data/mockData';

const Homepage = () => {
  const featuredServices = [
    { name: 'Civil Registry', icon: FileText, color: 'bg-blue-500', description: 'Birth, Marriage, Death Certificates' },
    { name: 'Social Welfare', icon: Heart, color: 'bg-green-500', description: 'Senior Citizen, PWD, Solo Parent ID' },
    { name: 'Health Services', icon: Shield, color: 'bg-red-500', description: 'Health Certificates, Immunization' },
    { name: 'Treasury', icon: Calculator, color: 'bg-yellow-500', description: 'Tax Payments, Clearances' },
    { name: 'Assessor', icon: Building, color: 'bg-purple-500', description: 'Tax Declarations, Property Assessment' },
    { name: 'Engineering', icon: Wrench, color: 'bg-orange-500', description: 'Building Permits, Construction' }
  ];

  const latestNews = newsArticles.slice(0, 3);
  const emergencyNumbers = emergencyContacts.filter(contact => contact.type === 'emergency').slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0038A8] to-blue-600 text-white rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to {lguInfo.name}
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Your gateway to efficient government services. Access municipal services, 
              book appointments, and stay informed about community updates.
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex">
              <Link 
                to="/services" 
                className="inline-block bg-white text-[#0038A8] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Services
              </Link>
              <Link 
                to="/appointments" 
                className="inline-block border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0038A8] transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#0038A8] font-bold text-4xl">M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Services</h2>
          <Link to="/services" className="text-[#0038A8] hover:text-blue-600 flex items-center">
            View All Services <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to="/services"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className={`${service.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">{service.name}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-[#0038A8] font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid md:grid-cols-3 gap-6">
        <Link
          to="/appointments"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center"
        >
          <Calendar className="h-12 w-12 text-[#0038A8] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Book Appointment</h3>
          <p className="text-gray-600">Schedule your visit to government offices</p>
        </Link>

        <Link
          to="/complaints"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center"
        >
          <MessageSquare className="h-12 w-12 text-[#0038A8] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Submit Feedback</h3>
          <p className="text-gray-600">Share complaints, suggestions, or commendations</p>
        </Link>

        <Link
          to="/emergency"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-red-200 text-center bg-red-50"
        >
          <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency</h3>
          <p className="text-red-600">Access emergency hotlines and information</p>
        </Link>
      </section>

      {/* Latest News */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Latest News & Announcements</h2>
          <Link to="/news" className="text-[#0038A8] hover:text-blue-600 flex items-center">
            View All News <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">News Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-[#0038A8] text-white text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                <div className="mt-4">
                  <span className="text-[#0038A8] font-medium hover:text-blue-600 cursor-pointer flex items-center">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="bg-red-50 p-8 rounded-lg border border-red-200">
        <h2 className="text-2xl font-bold text-red-800 mb-6">Emergency Hotlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyNumbers.map((contact, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span className="font-semibold text-red-800 text-sm">{contact.agency}</span>
              </div>
              <p className="text-red-600 font-mono text-lg">{contact.number}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link 
            to="/emergency" 
            className="text-red-600 font-medium hover:text-red-700 flex items-center"
          >
            View All Emergency Information <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;