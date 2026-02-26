import { useState } from 'react';
import { Search, Clock, DollarSign, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { services, departments } from '../data/mockData';

const ServiceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDepartmentInfo = (departmentId: string) => {
    return departments.find(dept => dept.id === departmentId);
  };

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#16191F] mb-3 aws-dense">Service Directory</h1>
        <p className="text-[#16191F] text-base aws-dense">
          Complete list of government services offered by the Municipality of Marilao, Bulacan. 
          Click on any service to view detailed information including requirements, fees, and step-by-step process.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="aws-card">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 pl-10 border border-[#D5D9D9] rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9900] focus:border-[#FF9900]"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="lg:w-56">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-[#D5D9D9] rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9900] focus:border-[#FF9900]"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3 text-xs text-[#16191F] aws-dense">
          Showing {filteredServices.length} of {services.length} services
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {filteredServices.map((service) => {
          const department = getDepartmentInfo(service.department);
          const isExpanded = expandedService === service.id;

          return (
            <div key={service.id} className="bg-white rounded-lg shadow-md border border-gray-200">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleServiceExpansion(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                      <span className="bg-[#0038A8] text-white text-xs px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.processingTime}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {service.fee}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        {department?.name}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                      <ul className="space-y-1">
                        {service.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-[#0038A8] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-800 mb-2">Responsible Office</h4>
                        <div className="text-gray-600">
                          <p className="font-medium">{department?.name}</p>
                          <p>Head: {department?.head}</p>
                          <p>Contact: {department?.contact}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Step-by-Step Process</h4>
                      <ol className="space-y-2">
                        {service.process.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-[#0038A8] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold text-[#0038A8] mb-1">Processing Information</h5>
                        <p className="text-sm text-gray-600">Processing Time: {service.processingTime}</p>
                        <p className="text-sm text-gray-600">Fee: {service.fee}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
        </div>
      )}

      {/* Help Section */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-[#0038A8] mb-2">Need Help?</h3>
        <p className="text-gray-700 mb-4">
          Can't find the service you're looking for? Contact our office for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="tel:(044)815-2300" 
            className="inline-flex items-center px-4 py-2 bg-[#0038A8] text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileText className="h-4 w-4 mr-2" />
            Call (044) 815-2300
          </a>
          <a 
            href="mailto:info@marilao.gov.ph" 
            className="inline-flex items-center px-4 py-2 border border-[#0038A8] text-[#0038A8] rounded-lg hover:bg-blue-50 transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDirectory;