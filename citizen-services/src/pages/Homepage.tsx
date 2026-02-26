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
      <section className="aws-alert-banner mb-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl font-bold mb-3 text-[#16191F] aws-dense">
              Welcome to {lguInfo.name}
            </h1>
            <p className="text-base mb-4 text-[#16191F] aws-dense">
              Your gateway to efficient government services. Access municipal services, 
              book appointments, and stay informed about community updates.
            </p>
            <div className="space-y-2 sm:space-y-0 sm:space-x-3 sm:flex">
              <Link 
                to="/services" 
                className="aws-btn-primary inline-block hover:bg-[#e88b00] transition-colors"
              >
                Browse Services
              </Link>
              <Link 
                to="/appointments" 
                className="aws-btn-secondary inline-block hover:bg-gray-50 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-[#FF9900] rounded flex items-center justify-center">
              <span className="text-[#232F3E] font-bold text-2xl">M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#16191F]">Featured Services</h2>
          <Link to="/services" className="text-[#FF9900] hover:text-[#007185] flex items-center text-sm font-medium">
            View All Services <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to="/services"
                className="aws-card aws-card-important hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <div className={`${service.color} p-2 rounded`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#16191F] ml-3 aws-dense">{service.name}</h3>
                </div>
                <p className="text-[#16191F] text-sm aws-dense mb-3">{service.description}</p>
                <div className="text-[#FF9900] font-medium flex items-center text-sm">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid md:grid-cols-3 gap-4">
        <Link
          to="/appointments"
          className="aws-card hover:shadow-md transition-shadow text-center"
        >
          <Calendar className="h-10 w-10 text-[#FF9900] mx-auto mb-3" />
          <h3 className="text-base font-semibold text-[#16191F] mb-2">Book Appointment</h3>
          <p className="text-[#16191F] text-sm aws-dense">Schedule your visit to government offices</p>
        </Link>

        <Link
          to="/complaints"
          className="aws-card hover:shadow-md transition-shadow text-center"
        >
          <MessageSquare className="h-10 w-10 text-[#FF9900] mx-auto mb-3" />
          <h3 className="text-base font-semibold text-[#16191F] mb-2">Submit Feedback</h3>
          <p className="text-[#16191F] text-sm aws-dense">Share complaints, suggestions, or commendations</p>
        </Link>

        <Link
          to="/emergency"
          className="aws-card hover:shadow-md transition-shadow text-center border-t-3 border-t-red-500"
        >
          <Phone className="h-10 w-10 text-red-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-red-800 mb-2">Emergency</h3>
          <p className="text-red-600 text-sm aws-dense">Access emergency hotlines and information</p>
        </Link>
      </section>

      {/* Latest News */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#16191F]">Latest News & Announcements</h2>
          <Link to="/news" className="text-[#FF9900] hover:text-[#007185] flex items-center text-sm font-medium">
            View All News <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {latestNews.map((article) => (
            <div key={article.id} className="aws-card aws-card-important">
              <div className="h-32 bg-[#F0F2F2] flex items-center justify-center mb-3 rounded">
                <span className="text-[#16191F] text-sm">News Image</span>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-[#FF9900] text-[#16191F] text-xs px-2 py-1 rounded font-medium">
                    {article.category}
                  </span>
                  <span className="text-[#16191F] text-xs ml-2">{article.date}</span>
                </div>
                <h3 className="text-base font-semibold text-[#16191F] mb-2 aws-dense line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[#16191F] text-sm aws-dense line-clamp-3 mb-3">{article.excerpt}</p>
                <div>
                  <span className="text-[#FF9900] font-medium hover:text-[#007185] cursor-pointer flex items-center text-sm">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Hotlines */}
      <section className="bg-red-50 border border-red-200 aws-compact-padding rounded">
        <h2 className="text-lg font-bold text-red-800 mb-4">Emergency Hotlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {emergencyNumbers.map((contact, index) => (
            <div key={index} className="bg-white aws-compact-padding rounded border border-red-200">
              <div className="flex items-center mb-1">
                <Phone className="h-4 w-4 text-red-600 mr-1" />
                <span className="font-semibold text-red-800 text-xs aws-dense">{contact.agency}</span>
              </div>
              <p className="text-red-600 font-mono text-base">{contact.number}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link 
            to="/emergency" 
            className="text-red-600 font-medium hover:text-red-700 flex items-center text-sm"
          >
            View All Emergency Information <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;