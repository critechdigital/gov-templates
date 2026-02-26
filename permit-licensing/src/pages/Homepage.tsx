import { Link } from 'react-router-dom';
import { FileText, Building, Shield, Briefcase, Users } from 'lucide-react';

const Homepage = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Permit',
      description: 'Apply for new business registration or renew existing permits with streamlined digital processes.',
      link: '/business-permit',
    },
    {
      icon: Building,
      title: 'Building Permit',
      description: 'Construction, renovation, and building permit applications processed efficiently.',
      link: '/building-permit',
    },
    {
      icon: FileText,
      title: 'Zoning Clearance',
      description: 'Zoning compliance certificates and clearances for your property development.',
      link: '/building-permit',
    },
    {
      icon: Shield,
      title: 'Sanitary Permit',
      description: 'Health department clearances and sanitary permits for food establishments.',
      link: '/business-permit',
    },
    {
      icon: Users,
      title: 'Community Services',
      description: 'Additional municipal services and community development programs.',
      link: '/contact',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Prepare Requirements',
      description: 'Review the complete list of required documents for your permit type.',
    },
    {
      number: '02', 
      title: 'Submit Application',
      description: 'Complete the online form or visit our office to submit your application.',
    },
    {
      number: '03',
      title: 'Track Progress',
      description: 'Monitor your application status online using our tracking system.',
    },
    {
      number: '04',
      title: 'Receive Permit',
      description: 'Collect your approved permit from our office or via registered mail.',
    },
  ];

  return (
    <div className="bg-[#FBFBFD]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-extralight text-[#1D1D1F] leading-tight mb-6">
              Digital Permit
              <br />
              <span className="font-light">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Streamlined government services for the City of Meycauayan. 
              Apply, track, and manage your permits with ease.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/business-permit"
                className="inline-flex items-center px-8 py-4 bg-[#0066CC] text-white font-medium rounded-full hover:bg-[#004499] transition-all duration-200 shadow-sm"
              >
                Get Started
              </Link>
              <Link
                to="/tracker"
                className="inline-flex items-center px-8 py-4 bg-transparent text-[#0066CC] font-medium rounded-full border border-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all duration-200"
              >
                Track Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive permit and licensing services designed for efficiency and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#F5F5F7] rounded-2xl flex items-center justify-center group-hover:bg-[#0066CC] transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-[#1D1D1F] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-6">
              Simple Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Four easy steps to get your permit processed quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-[#F5F5F7] text-[#0066CC] text-xl font-light rounded-2xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-light text-[#1D1D1F] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Choose your permit type below or contact us for assistance with your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/requirements"
              className="inline-flex items-center px-8 py-4 bg-[#0066CC] text-white font-medium rounded-full hover:bg-[#004499] transition-all duration-200 shadow-sm"
            >
              View Requirements
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-[#0066CC] font-medium rounded-full border border-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;