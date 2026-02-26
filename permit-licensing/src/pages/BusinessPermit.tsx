import { useState } from 'react';
import { ChevronRight, ChevronLeft, Upload, Calculator, CheckCircle } from 'lucide-react';

interface ApplicationData {
  // Step 1: Applicant Info
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
  address: string;
  
  // Step 2: Business Details
  businessName: string;
  businessType: string;
  businessAddress: string;
  capitalization: number;
  grossSales: number;
  isRenewal: boolean;
  
  // Step 3: Requirements
  requirements: Record<string, boolean>;
}

const BusinessPermit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phone: '',
    address: '',
    businessName: '',
    businessType: '',
    businessAddress: '',
    capitalization: 0,
    grossSales: 0,
    isRenewal: false,
    requirements: {},
  });

  const businessTypes = [
    'Sole Proprietorship',
    'Corporation',
    'Partnership',
    'Cooperative',
    'NGO',
    'Others',
  ];

  const requiredDocuments = [
    'Valid ID (photocopy)',
    'TIN Certificate',
    'DTI/SEC Registration',
    'Barangay Clearance',
    'Locational Clearance',
    'Fire Safety Inspection Certificate',
    'Sanitary Permit',
    'Environmental Compliance Certificate',
    'Contract of Lease (if applicable)',
    'Tax Declaration of Property (if owner)',
  ];

  const calculateFee = () => {
    if (data.isRenewal) {
      // Renewal fees based on gross sales
      if (data.grossSales <= 100000) return 500;
      if (data.grossSales <= 500000) return 1500;
      if (data.grossSales <= 1000000) return 3000;
      if (data.grossSales <= 5000000) return 7500;
      return 15000;
    } else {
      // New application fees based on capitalization
      if (data.capitalization <= 50000) return 500;
      if (data.capitalization <= 100000) return 1000;
      if (data.capitalization <= 500000) return 2500;
      if (data.capitalization <= 1000000) return 5000;
      if (data.capitalization <= 5000000) return 10000;
      return 15000;
    }
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Generate random tracking number
    const trackingNumber = `BP-${Date.now().toString().slice(-6)}`;
    alert(`Application submitted successfully! Tracking Number: ${trackingNumber}`);
    // Reset form or redirect
  };

  const updateData = (updates: Partial<ApplicationData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-16">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-light text-sm transition-all duration-200 ${
              step <= currentStep
                ? 'bg-[#0071E3] text-white'
                : 'text-gray-400'
            }`}
          >
            {step}
          </div>
          {step < 5 && (
            <div className="hidden sm:block w-20 h-px bg-[#E5E5E7] mx-3">
              <div
                className={`h-full bg-[#0071E3] transition-all duration-300 ${
                  step < currentStep ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const stepTitles = [
    'Applicant Information',
    'Business Details',
    'Requirements',
    'Fee Calculation',
    'Review & Submit',
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-[#F5F5F7] p-8 lg:p-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-thin text-[#1D1D1F] mb-8 leading-tight">
              Business Permit
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Complete all steps to submit your application
            </p>
          </div>

          {renderStepIndicator()}

          <div className="mb-16">
            <h2 className="text-4xl font-light text-[#1D1D1F] mb-12">
              {stepTitles[currentStep - 1]}
            </h2>

            {/* Step 1: Applicant Information */}
            {currentStep === 1 && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={data.firstName}
                      onChange={(e) => updateData({ firstName: e.target.value })}
                      placeholder="Enter first name"
                      className="apple-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      value={data.middleName}
                      onChange={(e) => updateData({ middleName: e.target.value })}
                      placeholder="Enter middle name"
                      className="apple-input"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={data.lastName}
                      onChange={(e) => updateData({ lastName: e.target.value })}
                      placeholder="Enter last name"
                      className="apple-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => updateData({ email: e.target.value })}
                      placeholder="your@email.com"
                      className="apple-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => updateData({ phone: e.target.value })}
                      placeholder="09XX XXX XXXX"
                      className="apple-input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                    Complete Address
                  </label>
                  <textarea
                    value={data.address}
                    onChange={(e) => updateData({ address: e.target.value })}
                    placeholder="Enter your complete address"
                    className="apple-textarea"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Business Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="bg-[#F5F5F7] rounded-2xl p-6">
                  <h3 className="font-medium text-[#1D1D1F] mb-4">Application Type</h3>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="application-type"
                        checked={!data.isRenewal}
                        onChange={() => updateData({ isRenewal: false })}
                        className="w-4 h-4 text-[#0066CC] border-[#E5E5E7] focus:ring-[#0066CC] mr-3"
                      />
                      <span className="text-[#1D1D1F]">New Application</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="application-type"
                        checked={data.isRenewal}
                        onChange={() => updateData({ isRenewal: true })}
                        className="w-4 h-4 text-[#0066CC] border-[#E5E5E7] focus:ring-[#0066CC] mr-3"
                      />
                      <span className="text-[#1D1D1F]">Renewal</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={data.businessName}
                    onChange={(e) => updateData({ businessName: e.target.value })}
                    className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-light text-[#1D1D1F] mb-4">
                    Business Type
                  </label>
                  <select
                    value={data.businessType}
                    onChange={(e) => updateData({ businessType: e.target.value })}
                    className="apple-select"
                    required
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                    Business Address *
                  </label>
                  <textarea
                    value={data.businessAddress}
                    onChange={(e) => updateData({ businessAddress: e.target.value })}
                    rows={4}
                    className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {!data.isRenewal ? (
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Capitalization (₱) *
                    </label>
                    <input
                      type="number"
                      value={data.capitalization || ''}
                      onChange={(e) => updateData({ capitalization: Number(e.target.value) })}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Gross Sales Last Year (₱) *
                    </label>
                    <input
                      type="number"
                      value={data.grossSales || ''}
                      onChange={(e) => updateData({ grossSales: Number(e.target.value) })}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Requirements */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="bg-[#F5F5F7] rounded-2xl p-6">
                  <h3 className="font-medium text-[#1D1D1F] mb-3">Document Requirements</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Please ensure all required documents are ready for upload. Files should be in PDF, JPG, or PNG format, maximum 5MB each.
                  </p>
                </div>

                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-6 bg-white border border-[#E5E5E7] rounded-2xl hover:shadow-sm transition-all">
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          checked={data.requirements[doc] || false}
                          onChange={(e) => updateData({
                            requirements: { ...data.requirements, [doc]: e.target.checked }
                          })}
                          className="w-5 h-5 text-[#0066CC] border-[#E5E5E7] rounded focus:ring-[#0066CC]"
                        />
                        <span className="font-medium text-[#1D1D1F]">{doc}</span>
                      </div>
                      <button className="flex items-center space-x-2 text-[#0066CC] hover:text-[#004499] font-medium px-4 py-2 rounded-full border border-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all">
                        <Upload size={16} />
                        <span>Upload</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Fee Calculation */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="bg-[#F5F5F7] rounded-2xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calculator className="w-6 h-6 text-[#0066CC]" />
                    <h3 className="text-xl font-light text-[#1D1D1F]">Fee Calculation</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-[#1D1D1F] mb-4">Application Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Application Type:</span>
                          <span className="font-medium text-[#1D1D1F]">{data.isRenewal ? 'Renewal' : 'New Application'}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Business Type:</span>
                          <span className="font-medium text-[#1D1D1F]">{data.businessType}</span>
                        </div>
                        {data.isRenewal ? (
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Gross Sales:</span>
                            <span className="font-medium text-[#1D1D1F]">₱{data.grossSales.toLocaleString()}</span>
                          </div>
                        ) : (
                          <div className="flex justify-between py-2">
                            <span className="text-gray-600">Capitalization:</span>
                            <span className="font-medium text-[#1D1D1F]">₱{data.capitalization.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#1D1D1F] mb-4">Fee Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Base Fee:</span>
                          <span className="font-medium text-[#1D1D1F]">₱{calculateFee().toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Processing Fee:</span>
                          <span className="font-medium text-[#1D1D1F]">₱50</span>
                        </div>
                        <div className="flex justify-between py-3 border-t border-[#E5E5E7] font-semibold">
                          <span className="text-[#1D1D1F]">Total Amount:</span>
                          <span className="text-[#0066CC] text-lg">₱{(calculateFee() + 50).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6">
                  <h4 className="font-medium text-orange-900 mb-3">Payment Instructions</h4>
                  <p className="text-orange-800 leading-relaxed">
                    Please proceed to the City Treasurer's Office for payment. Bring the printed application form and your valid ID. 
                    Payment can also be made through authorized payment centers.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <div className="bg-[#F5F5F7] rounded-2xl p-8">
                  <h3 className="text-xl font-light text-[#1D1D1F] mb-6">Application Summary</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-[#1D1D1F] mb-4">Applicant Information</h4>
                      <div className="space-y-3 text-sm">
                        <div className="py-2"><span className="text-gray-600">Name:</span> <span className="font-medium text-[#1D1D1F]">{data.firstName} {data.middleName} {data.lastName}</span></div>
                        <div className="py-2"><span className="text-gray-600">Email:</span> <span className="font-medium text-[#1D1D1F]">{data.email}</span></div>
                        <div className="py-2"><span className="text-gray-600">Phone:</span> <span className="font-medium text-[#1D1D1F]">{data.phone}</span></div>
                        <div className="py-2"><span className="text-gray-600">Address:</span> <span className="font-medium text-[#1D1D1F]">{data.address}</span></div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#1D1D1F] mb-4">Business Information</h4>
                      <div className="space-y-3 text-sm">
                        <div className="py-2"><span className="text-gray-600">Business Name:</span> <span className="font-medium text-[#1D1D1F]">{data.businessName}</span></div>
                        <div className="py-2"><span className="text-gray-600">Type:</span> <span className="font-medium text-[#1D1D1F]">{data.businessType}</span></div>
                        <div className="py-2"><span className="text-gray-600">Address:</span> <span className="font-medium text-[#1D1D1F]">{data.businessAddress}</span></div>
                        <div className="py-2"><span className="text-gray-600">Application:</span> <span className="font-medium text-[#1D1D1F]">{data.isRenewal ? 'Renewal' : 'New'}</span></div>
                        <div className="py-2"><span className="text-gray-600">Total Fee:</span> <span className="font-medium text-[#0066CC]">₱{(calculateFee() + 50).toLocaleString()}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-green-900 mb-3">Ready to Submit</h4>
                      <p className="text-green-800 leading-relaxed">
                        Please review all information carefully. Once submitted, you will receive a tracking number 
                        and email confirmation with next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-normal text-lg transition-all ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#0071E3] hover:text-[#0077ED]'
              }`}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            {currentStep < 5 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-[#0071E3] text-white px-12 py-4 rounded-full font-normal text-lg hover:bg-[#0077ED] transition-all"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-[#0071E3] text-white px-12 py-4 rounded-full font-normal text-lg hover:bg-[#0077ED] transition-all"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPermit;