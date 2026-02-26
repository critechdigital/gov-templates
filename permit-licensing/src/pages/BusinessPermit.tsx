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
    <div className="flex items-center justify-between mb-8">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step <= currentStep
                ? 'bg-[#0038A8] text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step}
          </div>
          {step < 5 && (
            <div className="hidden sm:block w-16 h-0.5 bg-gray-200 mx-2">
              <div
                className={`h-full bg-[#0038A8] transition-all ${
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Permit Application</h1>
        <p className="text-gray-600 mb-8">
          Complete all steps to submit your business permit application
        </p>

        {renderStepIndicator()}

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Step {currentStep}: {stepTitles[currentStep - 1]}
          </h2>

          {/* Step 1: Applicant Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={data.firstName}
                    onChange={(e) => updateData({ firstName: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    value={data.middleName}
                    onChange={(e) => updateData({ middleName: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={(e) => updateData({ lastName: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateData({ email: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => updateData({ phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Complete Address *
                </label>
                <textarea
                  value={data.address}
                  onChange={(e) => updateData({ address: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Business Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="application-type"
                    checked={!data.isRenewal}
                    onChange={() => updateData({ isRenewal: false })}
                    className="mr-2"
                  />
                  <span>New Application</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="application-type"
                    checked={data.isRenewal}
                    onChange={() => updateData({ isRenewal: true })}
                    className="mr-2"
                  />
                  <span>Renewal</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={data.businessName}
                  onChange={(e) => updateData({ businessName: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type *
                </label>
                <select
                  value={data.businessType}
                  onChange={(e) => updateData({ businessType: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                  required
                >
                  <option value="">Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Address *
                </label>
                <textarea
                  value={data.businessAddress}
                  onChange={(e) => updateData({ businessAddress: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                  required
                />
              </div>

              {!data.isRenewal ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Capitalization (₱) *
                  </label>
                  <input
                    type="number"
                    value={data.capitalization || ''}
                    onChange={(e) => updateData({ capitalization: Number(e.target.value) })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gross Sales Last Year (₱) *
                  </label>
                  <input
                    type="number"
                    value={data.grossSales || ''}
                    onChange={(e) => updateData({ grossSales: Number(e.target.value) })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 3: Requirements */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Document Requirements</h3>
                <p className="text-blue-800 text-sm">
                  Please ensure all required documents are ready for upload. Files should be in PDF, JPG, or PNG format, maximum 5MB each.
                </p>
              </div>

              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={data.requirements[doc] || false}
                        onChange={(e) => updateData({
                          requirements: { ...data.requirements, [doc]: e.target.checked }
                        })}
                        className="w-4 h-4 text-[#0038A8]"
                      />
                      <span className="text-sm font-medium text-gray-900">{doc}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-[#0038A8] hover:text-blue-700 text-sm font-medium">
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
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calculator className="w-6 h-6 text-[#0038A8]" />
                  <h3 className="text-lg font-semibold text-gray-900">Fee Calculation</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Application Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Application Type:</span>
                        <span className="font-medium">{data.isRenewal ? 'Renewal' : 'New Application'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Business Type:</span>
                        <span className="font-medium">{data.businessType}</span>
                      </div>
                      {data.isRenewal ? (
                        <div className="flex justify-between">
                          <span>Gross Sales:</span>
                          <span className="font-medium">₱{data.grossSales.toLocaleString()}</span>
                        </div>
                      ) : (
                        <div className="flex justify-between">
                          <span>Capitalization:</span>
                          <span className="font-medium">₱{data.capitalization.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Fee Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Base Fee:</span>
                        <span className="font-medium">₱{calculateFee().toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee:</span>
                        <span className="font-medium">₱50</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 font-semibold">
                        <span>Total Amount:</span>
                        <span className="text-[#0038A8]">₱{(calculateFee() + 50).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <h4 className="font-medium text-yellow-900 mb-2">Payment Instructions</h4>
                <p className="text-yellow-800 text-sm">
                  Please proceed to the City Treasurer's Office for payment. Bring the printed application form and your valid ID. 
                  Payment can also be made through authorized payment centers.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Summary</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Applicant Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-600">Name:</span> {data.firstName} {data.middleName} {data.lastName}</div>
                      <div><span className="text-gray-600">Email:</span> {data.email}</div>
                      <div><span className="text-gray-600">Phone:</span> {data.phone}</div>
                      <div><span className="text-gray-600">Address:</span> {data.address}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Business Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-600">Business Name:</span> {data.businessName}</div>
                      <div><span className="text-gray-600">Type:</span> {data.businessType}</div>
                      <div><span className="text-gray-600">Address:</span> {data.businessAddress}</div>
                      <div><span className="text-gray-600">Application:</span> {data.isRenewal ? 'Renewal' : 'New'}</div>
                      <div><span className="text-gray-600">Total Fee:</span> ₱{(calculateFee() + 50).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Ready to Submit</h4>
                    <p className="text-green-800 text-sm">
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
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          {currentStep < 5 ? (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 bg-[#0038A8] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessPermit;