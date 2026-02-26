import { FileText, Download, AlertCircle, CheckCircle, Info } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

const Requirements = () => {
  const permitTypes = [
    {
      id: 'business',
      name: 'Business Permit',
      description: 'Required documents for new business permit applications and renewals',
      icon: '🏪',
    },
    {
      id: 'building',
      name: 'Building Permit',
      description: 'Required documents for building construction, renovation, and alteration permits',
      icon: '🏗️',
    },
    {
      id: 'zoning',
      name: 'Zoning Clearance',
      description: 'Required documents for zoning compliance certificates',
      icon: '📍',
    },
    {
      id: 'sanitary',
      name: 'Sanitary Permit',
      description: 'Required documents for health department clearances',
      icon: '🏥',
    },
    {
      id: 'fire',
      name: 'Fire Safety',
      description: 'Required documents for fire safety inspections and clearances',
      icon: '🚒',
    },
    {
      id: 'barangay',
      name: 'Barangay Clearance',
      description: 'Required documents for barangay certificates and clearances',
      icon: '🏘️',
    },
  ];

  const requirementsByType = {
    business: {
      new: [
        {
          document: 'Valid Government-issued ID',
          description: 'Original and photocopy of valid ID (Driver\'s License, Passport, etc.)',
          required: true,
          note: 'Must be valid and not expired',
        },
        {
          document: 'TIN Certificate',
          description: 'Certificate of Registration from Bureau of Internal Revenue',
          required: true,
          note: 'Original and photocopy required',
        },
        {
          document: 'DTI/SEC/CDA Registration',
          description: 'Business registration certificate (DTI for sole proprietorship, SEC for corporation, CDA for cooperative)',
          required: true,
          note: 'Must match the business name in application',
        },
        {
          document: 'Barangay Business Clearance',
          description: 'Certificate from barangay where business will operate',
          required: true,
          note: 'Valid for current year',
        },
        {
          document: 'Locational Clearance',
          description: 'City Planning Office clearance for business location',
          required: true,
          note: 'Ensures compliance with zoning ordinances',
        },
        {
          document: 'Fire Safety Inspection Certificate (FSIC)',
          description: 'Certificate from Bureau of Fire Protection',
          required: true,
          note: 'Required for all business establishments',
        },
        {
          document: 'Sanitary Permit',
          description: 'Health certificate from City Health Office',
          required: true,
          note: 'Required for food establishments and similar businesses',
        },
        {
          document: 'Environmental Compliance Certificate',
          description: 'Certificate from Environmental Management Bureau',
          required: false,
          note: 'Required for establishments with potential environmental impact',
        },
        {
          document: 'Contract of Lease',
          description: 'Lease agreement if business location is rented',
          required: false,
          note: 'Original and photocopy, notarized preferred',
        },
        {
          document: 'Tax Declaration of Property',
          description: 'Property tax declaration if applicant owns the property',
          required: false,
          note: 'From City Assessor\'s Office',
        },
      ],
      renewal: [
        {
          document: 'Previous Business Permit',
          description: 'Copy of previous year\'s business permit',
          required: true,
          note: 'Must be the immediately preceding year',
        },
        {
          document: 'Valid Government-issued ID',
          description: 'Original and photocopy of valid ID',
          required: true,
          note: 'Must be valid and not expired',
        },
        {
          document: 'Annual Income Tax Return (ITR)',
          description: 'BIR-filed ITR for the previous year',
          required: true,
          note: 'With BIR stamp or electronic filing receipt',
        },
        {
          document: 'Barangay Business Clearance',
          description: 'Updated certificate from barangay',
          required: true,
          note: 'Valid for current year',
        },
        {
          document: 'Fire Safety Inspection Certificate (FSIC)',
          description: 'Updated FSIC from Bureau of Fire Protection',
          required: true,
          note: 'Must be current year',
        },
        {
          document: 'Sanitary Permit',
          description: 'Updated health certificate',
          required: true,
          note: 'For applicable business types',
        },
      ],
    },
    building: [
      {
        document: 'Certified True Copy of Title/Tax Declaration',
        description: 'Property ownership documents',
        required: true,
        note: 'From Register of Deeds or City Assessor',
      },
      {
        document: 'Location Plan/Vicinity Map',
        description: 'Map showing exact location of the property',
        required: true,
        note: 'Scale 1:2000 or larger, with street names',
      },
      {
        document: 'Lot Survey Plan',
        description: 'Geodetic survey of the property',
        required: true,
        note: 'Prepared by licensed geodetic engineer',
      },
      {
        document: 'Architectural Plans',
        description: 'Complete architectural drawings of the structure',
        required: true,
        note: 'Signed and sealed by licensed architect, 3 sets',
      },
      {
        document: 'Structural Plans',
        description: 'Structural engineering drawings and calculations',
        required: true,
        note: 'Signed and sealed by licensed structural engineer',
      },
      {
        document: 'Electrical Plans',
        description: 'Electrical layout and specifications',
        required: true,
        note: 'Signed and sealed by licensed electrical engineer',
      },
      {
        document: 'Plumbing Plans',
        description: 'Plumbing layout and specifications',
        required: true,
        note: 'Signed and sealed by licensed master plumber',
      },
      {
        document: 'Building Specifications',
        description: 'Detailed specifications of materials and construction methods',
        required: true,
        note: 'Should match the architectural plans',
      },
      {
        document: 'Bill of Materials',
        description: 'Complete list of construction materials with quantities',
        required: true,
        note: 'For cost estimation and planning',
      },
      {
        document: 'Certificate of Electrical Inspection',
        description: 'Electrical safety inspection certificate',
        required: false,
        note: 'Required before occupancy',
      },
      {
        document: 'Environmental Compliance Certificate',
        description: 'ECC for projects with environmental impact',
        required: false,
        note: 'Required for large-scale developments',
      },
    ],
    zoning: [
      {
        document: 'Application Form',
        description: 'Completely filled zoning clearance application',
        required: true,
        note: 'Available at City Planning Office',
      },
      {
        document: 'Tax Declaration/Title',
        description: 'Proof of property ownership or lease agreement',
        required: true,
        note: 'Original and photocopy required',
      },
      {
        document: 'Location Map',
        description: 'Map showing the exact location of the property',
        required: true,
        note: 'With nearby landmarks and street names',
      },
      {
        document: 'Valid ID',
        description: 'Government-issued identification of applicant',
        required: true,
        note: 'Original and photocopy',
      },
    ],
    sanitary: [
      {
        document: 'Application Form',
        description: 'Sanitary permit application form',
        required: true,
        note: 'Available at City Health Office',
      },
      {
        document: 'Business Permit',
        description: 'Valid business permit or application',
        required: true,
        note: 'Original and photocopy',
      },
      {
        document: 'Health Certificates of Food Handlers',
        description: 'Medical certificates of all personnel handling food',
        required: true,
        note: 'From accredited medical facilities',
      },
      {
        document: 'Water Analysis Report',
        description: 'Potability test results of water source',
        required: true,
        note: 'From DOH-accredited laboratory',
      },
      {
        document: 'Floor Plan',
        description: 'Layout of the establishment',
        required: true,
        note: 'Showing kitchen, dining, storage areas',
      },
    ],
    fire: [
      {
        document: 'Application Form',
        description: 'Fire Safety Inspection Certificate application',
        required: true,
        note: 'Available at Bureau of Fire Protection',
      },
      {
        document: 'Building Plans',
        description: 'Architectural and electrical plans of the building',
        required: true,
        note: 'Must show fire exits and safety features',
      },
      {
        document: 'Fire Safety Evaluation',
        description: 'Professional assessment of fire safety measures',
        required: true,
        note: 'By licensed fire protection engineer',
      },
      {
        document: 'Occupancy Permit',
        description: 'Certificate of occupancy from local government',
        required: true,
        note: 'Or building permit for new constructions',
      },
    ],
    barangay: [
      {
        document: 'Application Form',
        description: 'Barangay clearance application form',
        required: true,
        note: 'Available at barangay hall',
      },
      {
        document: 'Valid ID',
        description: 'Government-issued identification',
        required: true,
        note: 'Original and photocopy',
      },
      {
        document: 'Barangay Residency Certificate',
        description: 'Proof of residence in the barangay',
        required: true,
        note: 'Or affidavit of residence',
      },
      {
        document: 'Community Tax Certificate (Cedula)',
        description: 'Current year cedula',
        required: true,
        note: 'From city treasurer\'s office',
      },
    ],
  };

  const fileGuidelines = [
    {
      title: 'File Formats',
      content: 'Accepted formats: PDF, JPG, PNG. PDF is preferred for multi-page documents.',
      icon: <FileText size={16} />,
    },
    {
      title: 'File Size',
      content: 'Maximum file size: 10MB per document. For larger files, please compress or split.',
      icon: <Info size={16} />,
    },
    {
      title: 'Image Quality',
      content: 'Ensure documents are clear, readable, and properly oriented. Minimum 300 DPI resolution.',
      icon: <CheckCircle size={16} />,
    },
    {
      title: 'File Naming',
      content: 'Use descriptive names like "DTI_Registration_2026.pdf" for easy identification.',
      icon: <AlertCircle size={16} />,
    },
  ];

  const sampleForms = [
    {
      name: 'Business Permit Application Form',
      description: 'Standard application form for new business permits',
      filename: 'business-permit-form.pdf',
    },
    {
      name: 'Building Permit Application Form',
      description: 'Application form for building permits and construction',
      filename: 'building-permit-form.pdf',
    },
    {
      name: 'Barangay Clearance Application',
      description: 'Application form for barangay clearance certificate',
      filename: 'barangay-clearance-form.pdf',
    },
    {
      name: 'Fire Safety Inspection Application',
      description: 'FSIC application form for Bureau of Fire Protection',
      filename: 'fire-safety-form.pdf',
    },
  ];

  const renderRequirements = (requirements: any[]) => (
    <div className="space-y-6">
      {requirements.map((req, index) => (
        <div key={index} className="bg-white border border-[#E5E5E7] rounded-2xl p-6 hover:shadow-sm transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <h3 className="font-medium text-[#1D1D1F] text-lg">{req.document}</h3>
                {req.required ? (
                  <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full border border-red-200 font-medium">
                    Required
                  </span>
                ) : (
                  <span className="text-xs bg-gray-50 text-gray-600 px-3 py-1 rounded-full border border-gray-200 font-medium">
                    Optional
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{req.description}</p>
              {req.note && (
                <div className="flex items-start space-x-3 text-sm text-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                  <Info size={16} className="mt-0.5 flex-shrink-0 text-blue-600" />
                  <span>{req.note}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FBFBFD] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-4">
            Document Requirements
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complete list of required documents for each type of permit and clearance
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-12">
          <Tabs.Root defaultValue="business" className="w-full">
            {/* Tab Navigation */}
            <Tabs.List className="flex flex-wrap gap-3 mb-12 p-2 bg-[#F5F5F7] rounded-2xl">
              {permitTypes.map((type) => (
                <Tabs.Trigger
                  key={type.id}
                  value={type.id}
                  className="flex items-center space-x-3 px-6 py-3 text-sm font-medium rounded-xl transition-all data-[state=active]:bg-white data-[state=active]:text-[#0066CC] data-[state=active]:shadow-sm text-gray-600 hover:text-[#1D1D1F] hover:bg-white/60"
                >
                  <span className="text-lg">{type.icon}</span>
                  <span>{type.name}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* Tab Content */}
            {permitTypes.map((type) => (
              <Tabs.Content key={type.id} value={type.id} className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                  <h2 className="text-2xl font-light text-blue-900 mb-3">{type.name}</h2>
                  <p className="text-blue-800 leading-relaxed">{type.description}</p>
                </div>

                {type.id === 'business' ? (
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-xl font-light text-[#1D1D1F] mb-8">New Business Application</h3>
                      {renderRequirements(requirementsByType.business.new)}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-light text-[#1D1D1F] mb-8">Business Permit Renewal</h3>
                      {renderRequirements(requirementsByType.business.renewal)}
                    </div>
                  </div>
                ) : (
                  renderRequirements(requirementsByType[type.id as keyof typeof requirementsByType] as any[])
                )}
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>

        {/* File Upload Guidelines */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10">
          <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">File Upload Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fileGuidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-[#0066CC] text-white rounded-2xl">
                  {guideline.icon}
                </div>
                <div>
                  <h3 className="font-medium text-[#1D1D1F] mb-2">{guideline.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{guideline.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Forms */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10">
          <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Sample Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleForms.map((form, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-[#F5F5F7] rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-[#1D1D1F] mb-1">{form.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{form.description}</p>
                </div>
                <button className="flex items-center space-x-2 text-[#0066CC] hover:text-[#004499] font-medium px-4 py-2 rounded-full border border-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-all">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Important Reminders */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 rounded-3xl p-8 lg:p-10">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-light text-orange-900 mb-6">Important Reminders</h3>
              <ul className="space-y-3 text-orange-800">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <span>All documents must be clear, legible, and complete</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <span>Original documents may be required for verification during inspection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <span>Expired documents will not be accepted - ensure all certificates are current</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <span>Professional licenses (architect, engineer, etc.) must be valid and in good standing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <span>Processing may be delayed if required documents are missing or incomplete</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                  <span>Contact our office if you have questions about specific requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;