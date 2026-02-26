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
    <div className="space-y-4">
      {requirements.map((req, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold text-gray-900">{req.document}</h3>
                {req.required ? (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    Required
                  </span>
                ) : (
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                    Optional
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-2">{req.description}</p>
              {req.note && (
                <div className="flex items-start space-x-2 text-sm text-blue-800 bg-blue-50 p-2 rounded">
                  <Info size={14} className="mt-0.5 flex-shrink-0" />
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Document Requirements</h1>
        <p className="text-gray-600 mb-8">
          Complete list of required documents for each type of permit and clearance
        </p>

        <Tabs.Root defaultValue="business" className="w-full">
          {/* Tab Navigation */}
          <Tabs.List className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
            {permitTypes.map((type) => (
              <Tabs.Trigger
                key={type.id}
                value={type.id}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-white data-[state=active]:text-[#0038A8] data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
              >
                <span>{type.icon}</span>
                <span>{type.name}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Tab Content */}
          {permitTypes.map((type) => (
            <Tabs.Content key={type.id} value={type.id} className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">{type.name}</h2>
                <p className="text-blue-800">{type.description}</p>
              </div>

              {type.id === 'business' ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">New Business Application</h3>
                    {renderRequirements(requirementsByType.business.new)}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Permit Renewal</h3>
                    {renderRequirements(requirementsByType.business.renewal)}
                  </div>
                </div>
              ) : (
                renderRequirements(requirementsByType[type.id as keyof typeof requirementsByType] as any[])
              )}
            </Tabs.Content>
          ))}
        </Tabs.Root>

        {/* File Upload Guidelines */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">File Upload Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fileGuidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 bg-[#0038A8] text-white rounded-lg">
                  {guideline.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{guideline.title}</h3>
                  <p className="text-gray-600 text-sm">{guideline.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Forms */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Sample Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleForms.map((form, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{form.name}</h3>
                  <p className="text-sm text-gray-600">{form.description}</p>
                </div>
                <button className="flex items-center space-x-2 text-[#0038A8] hover:text-blue-700 font-medium">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Important Reminders */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Important Reminders</h3>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li>• All documents must be clear, legible, and complete</li>
                <li>• Original documents may be required for verification during inspection</li>
                <li>• Expired documents will not be accepted - ensure all certificates are current</li>
                <li>• Professional licenses (architect, engineer, etc.) must be valid and in good standing</li>
                <li>• Processing may be delayed if required documents are missing or incomplete</li>
                <li>• Contact our office if you have questions about specific requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;