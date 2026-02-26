import { useState } from 'react';
import { UserPlus, Upload, CheckCircle2, AlertCircle, FileText, Building, User, Phone } from 'lucide-react';

interface FormData {
  // Company Information
  companyName: string;
  businessType: string;
  registrationNumber: string;
  tinNumber: string;
  philgepsNumber: string;
  
  // Contact Information
  address: string;
  city: string;
  province: string;
  zipCode: string;
  phoneNumber: string;
  mobileNumber: string;
  emailAddress: string;
  website: string;
  
  // Authorized Representative
  contactPerson: string;
  contactPosition: string;
  contactEmail: string;
  contactPhone: string;
  
  // Business Details
  yearEstablished: string;
  employees: string;
  paidUpCapital: string;
  businessCategories: string[];
  
  // Licenses and Permits
  mayorPermit: boolean;
  birCertificate: boolean;
  sssRegistration: boolean;
  philhealthRegistration: boolean;
  pagibigRegistration: boolean;
  
  // Additional Information
  bankName: string;
  accountNumber: string;
  trackRecord: string;
  specialization: string;
}

export default function SupplierRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessType: 'Corporation',
    registrationNumber: '',
    tinNumber: '',
    philgepsNumber: '',
    address: '',
    city: '',
    province: 'Bulacan',
    zipCode: '',
    phoneNumber: '',
    mobileNumber: '',
    emailAddress: '',
    website: '',
    contactPerson: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: '',
    yearEstablished: '',
    employees: '',
    paidUpCapital: '',
    businessCategories: [],
    mayorPermit: false,
    birCertificate: false,
    sssRegistration: false,
    philhealthRegistration: false,
    pagibigRegistration: false,
    bankName: '',
    accountNumber: '',
    trackRecord: '',
    specialization: ''
  });

  const businessTypes = [
    'Corporation',
    'Partnership',
    'Sole Proprietorship',
    'Cooperative',
    'Joint Venture'
  ];

  const businessCategoriesOptions = [
    'Goods and Supplies',
    'Office Equipment',
    'IT Equipment and Software',
    'Medical Equipment and Supplies',
    'Construction Materials',
    'Janitorial and Sanitation Supplies',
    'Food and Catering Services',
    'Transportation Services',
    'Security Services',
    'Consulting Services',
    'Technical Services',
    'Infrastructure Development',
    'Road and Bridge Construction',
    'Building Construction',
    'Electrical Works',
    'Plumbing and Sanitary Works',
    'Landscaping and Maintenance'
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategoryToggle = (category: string) => {
    const currentCategories = formData.businessCategories;
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter(c => c !== category)
      : [...currentCategories, category];
    
    handleInputChange('businessCategories', newCategories);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Registration submitted successfully! You will receive a confirmation email within 24 hours.');
  };



  const steps = [
    { number: 1, title: 'Company Info', icon: Building },
    { number: 2, title: 'Contact Details', icon: Phone },
    { number: 3, title: 'Representative', icon: User },
    { number: 4, title: 'Documents', icon: FileText },
    { number: 5, title: 'Review', icon: CheckCircle2 }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 corporate-card corporate-card-primary">
        <div className="flex items-center gap-3 mb-4">
          <UserPlus className="w-6 h-6 text-[#0071DC]" />
          <h1 className="text-2xl font-semibold text-[#2E2F32]">Supplier Registration</h1>
        </div>
        <p className="text-[#74767C]">
          Register as a supplier for the Provincial Government of Bulacan. Complete all required 
          information to be eligible for bidding opportunities and procurement activities.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.number === currentStep 
                    ? 'bg-[#0038A8] text-white' 
                    : step.number < currentStep 
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.number < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step.number}
                </div>
                <div className="mt-2 text-xs font-medium text-gray-600 text-center">
                  {step.title}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 ${
                  step.number < currentStep ? 'bg-green-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-[#0038A8]" />
              Company Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                >
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SEC/DTI Registration Number *
                </label>
                <input
                  type="text"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Enter registration number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TIN Number *
                </label>
                <input
                  type="text"
                  value={formData.tinNumber}
                  onChange={(e) => handleInputChange('tinNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="000-000-000-000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PhilGEPS Registration Number
                </label>
                <input
                  type="text"
                  value={formData.philgepsNumber}
                  onChange={(e) => handleInputChange('philgepsNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Enter PhilGEPS number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year Established *
                </label>
                <input
                  type="number"
                  value={formData.yearEstablished}
                  onChange={(e) => handleInputChange('yearEstablished', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="YYYY"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <select
                  value={formData.employees}
                  onChange={(e) => handleInputChange('employees', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-100">51-100 employees</option>
                  <option value="101-500">101-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Paid-up Capital (PHP)
                </label>
                <input
                  type="text"
                  value={formData.paidUpCapital}
                  onChange={(e) => handleInputChange('paidUpCapital', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#0038A8]" />
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complete Address *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Street, Barangay, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City/Municipality *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Enter city/municipality"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Province *
                </label>
                <input
                  type="text"
                  value={formData.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="(02) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="+63 900 000 0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="https://www.company.com"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-[#0038A8]" />
              Authorized Representative
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  value={formData.contactPosition}
                  onChange={(e) => handleInputChange('contactPosition', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="e.g., General Manager, President"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="representative@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="+63 900 000 0000"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Business Categories *
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Select all categories that apply to your business operations:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {businessCategoriesOptions.map(category => (
                  <label key={category} className="flex items-start gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.businessCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="mt-1 text-[#0038A8] focus:ring-[#0038A8]"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0038A8]" />
              Required Documents
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Document Upload Notice</p>
                  <p>Please ensure all documents are valid and up-to-date. Document verification may take 3-5 business days.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 mb-3">Required Government Registrations</h3>
              
              {[
                { key: 'mayorPermit', label: "Valid Mayor's/Business Permit", required: true },
                { key: 'birCertificate', label: 'BIR Certificate of Registration', required: true },
                { key: 'sssRegistration', label: 'SSS Registration Certificate', required: true },
                { key: 'philhealthRegistration', label: 'PhilHealth Registration Certificate', required: true },
                { key: 'pagibigRegistration', label: 'Pag-IBIG Registration Certificate', required: true }
              ].map(({ key, label, required }) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData[key as keyof FormData] as boolean}
                        onChange={(e) => handleInputChange(key as keyof FormData, e.target.checked)}
                        className="text-[#0038A8] focus:ring-[#0038A8]"
                      />
                      <span className="font-medium text-gray-900">
                        {label} {required && <span className="text-red-500">*</span>}
                      </span>
                    </label>
                    {formData[key as keyof FormData] && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div className="ml-6">
                    <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                      <Upload className="w-4 h-4" />
                      Upload Document
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 mb-3">Additional Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="Enter bank name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="Enter account number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Track Record / Previous Experience
                </label>
                <textarea
                  value={formData.trackRecord}
                  onChange={(e) => handleInputChange('trackRecord', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Briefly describe your company's experience and notable projects..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Specialization
                </label>
                <textarea
                  value={formData.specialization}
                  onChange={(e) => handleInputChange('specialization', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="Describe your company's specialization and core competencies..."
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0038A8]" />
              Review & Submit
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-800">
                  <p className="font-medium mb-1">Registration Almost Complete</p>
                  <p>Please review all information before submitting your registration.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Company Information</h3>
                <div className="text-sm space-y-2">
                  <div><span className="text-gray-600">Company:</span> {formData.companyName || 'Not provided'}</div>
                  <div><span className="text-gray-600">Type:</span> {formData.businessType}</div>
                  <div><span className="text-gray-600">TIN:</span> {formData.tinNumber || 'Not provided'}</div>
                  <div><span className="text-gray-600">PhilGEPS:</span> {formData.philgepsNumber || 'Not provided'}</div>
                </div>

                <h3 className="font-medium text-gray-900 pt-4">Contact Information</h3>
                <div className="text-sm space-y-2">
                  <div><span className="text-gray-600">Email:</span> {formData.emailAddress || 'Not provided'}</div>
                  <div><span className="text-gray-600">Phone:</span> {formData.phoneNumber || 'Not provided'}</div>
                  <div><span className="text-gray-600">Address:</span> {formData.address || 'Not provided'}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Representative</h3>
                <div className="text-sm space-y-2">
                  <div><span className="text-gray-600">Name:</span> {formData.contactPerson || 'Not provided'}</div>
                  <div><span className="text-gray-600">Position:</span> {formData.contactPosition || 'Not provided'}</div>
                  <div><span className="text-gray-600">Email:</span> {formData.contactEmail || 'Not provided'}</div>
                </div>

                <h3 className="font-medium text-gray-900 pt-4">Business Categories</h3>
                <div className="text-sm">
                  {formData.businessCategories.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1">
                      {formData.businessCategories.slice(0, 3).map(category => (
                        <li key={category}>{category}</li>
                      ))}
                      {formData.businessCategories.length > 3 && (
                        <li>+ {formData.businessCategories.length - 3} more</li>
                      )}
                    </ul>
                  ) : (
                    <span className="text-gray-500">No categories selected</span>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium text-gray-900 mb-3">Terms and Conditions</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-32 overflow-y-auto text-sm text-gray-700">
                <p>
                  By submitting this registration, you agree to the following terms and conditions:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>All information provided is accurate and up-to-date</li>
                  <li>You will maintain valid business permits and registrations</li>
                  <li>You agree to comply with all applicable laws and regulations</li>
                  <li>The Provincial Government reserves the right to verify all submitted information</li>
                  <li>Registration approval is subject to document verification and evaluation</li>
                </ul>
              </div>
              
              <label className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  className="mt-1 text-[#0038A8] focus:ring-[#0038A8]"
                />
                <span className="text-sm text-gray-700">
                  I acknowledge that I have read, understood, and agree to the terms and conditions. *
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentStep < 5 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-[#0038A8] text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Registration
            </button>
          )}
        </div>
      </div>
    </div>
  );
}