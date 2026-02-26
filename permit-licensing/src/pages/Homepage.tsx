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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-7xl lg:text-8xl font-thin text-[#1D1D1F] leading-[0.9] mb-12">
              Digital Permit
              <br />
              <span className="font-extralight">Services</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-500 max-w-4xl mx-auto leading-relaxed mb-16 font-light">
              Streamlined government services for the City of Meycauayan
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/business-permit"
                className="inline-flex items-center px-12 py-5 bg-[#0071E3] text-white font-normal rounded-full hover:bg-[#0077ED] transition-all duration-300 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/tracker"
                className="inline-flex items-center px-12 py-5 text-[#0071E3] font-normal hover:text-[#0077ED] transition-all duration-300 text-lg"
              >
                Track Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed Image Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/permit-construction.jpg`} 
          alt="Infrastructure development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 text-center">
          <p className="text-2xl font-light text-[#1D1D1F]">Building Meycauayan's future, one permit at a time.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-7xl font-thin text-[#1D1D1F] mb-8 leading-tight">
              Our Services
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Comprehensive permit and licensing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className={`group bg-white p-12 transition-all duration-300 hover:-translate-y-2 fade-in-scale animate-delay-${index * 100}`}
                >
                  <div className="mb-8">
                    <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-[#0071E3] transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-light text-[#1D1D1F] mb-6">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-lg">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="min-h-screen flex items-center py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-7xl font-thin text-[#1D1D1F] mb-8 leading-tight">
              Simple Process
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Four steps to get your permit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-8">
                  <span className="inline-flex items-center justify-center w-20 h-20 text-gray-400 text-2xl font-thin">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-[#1D1D1F] mb-6">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-32 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-6xl lg:text-7xl font-thin text-[#1D1D1F] mb-12 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-16 font-light">
            Choose your permit type or contact us for assistance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/requirements"
              className="inline-flex items-center px-12 py-5 bg-[#0071E3] text-white font-normal rounded-full hover:bg-[#0077ED] transition-all duration-300 text-lg"
            >
              View Requirements
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-5 text-[#0071E3] font-normal hover:text-[#0077ED] transition-all duration-300 text-lg"
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