import { useState } from 'react';
import { Upload, Calculator, Home, FileText } from 'lucide-react';

interface BuildingPermitData {
  // Owner Information
  ownerFirstName: string;
  ownerLastName: string;
  ownerMiddleName: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerAddress: string;
  
  // Lot Details
  lotNumber: string;
  blockNumber: string;
  subdivision: string;
  barangay: string;
  lotArea: number;
  
  // Building Details
  buildingType: string;
  floorArea: number;
  numberOfFloors: number;
  estimatedCost: number;
  constructionType: string;
  
  // Documents
  requirements: Record<string, boolean>;
}

const BuildingPermit = () => {
  const [data, setData] = useState<BuildingPermitData>({
    ownerFirstName: '',
    ownerLastName: '',
    ownerMiddleName: '',
    ownerEmail: '',
    ownerPhone: '',
    ownerAddress: '',
    lotNumber: '',
    blockNumber: '',
    subdivision: '',
    barangay: '',
    lotArea: 0,
    buildingType: '',
    floorArea: 0,
    numberOfFloors: 1,
    estimatedCost: 0,
    constructionType: '',
    requirements: {},
  });

  const buildingTypes = [
    'Residential - Single Family',
    'Residential - Duplex',
    'Residential - Townhouse',
    'Residential - Condominium',
    'Commercial - Office',
    'Commercial - Retail',
    'Commercial - Restaurant',
    'Industrial - Warehouse',
    'Industrial - Factory',
    'Mixed Use',
    'Others',
  ];

  const constructionTypes = [
    'Reinforced Concrete',
    'Steel Frame',
    'Wood Frame',
    'Concrete Hollow Blocks',
    'Mixed Materials',
  ];

  const barangays = [
    'Bagbaguin',
    'Bahay Pare',
    'Bancal',
    'Banga',
    'Bayugo',
    'Caingin',
    'Calvario',
    'Camalig',
    'Hulo',
    'Iba',
    'Lawa',
    'Libtong',
    'Longos',
    'Look 1st',
    'Look 2nd',
    'Malhacan',
    'Pajo',
    'Pandayan',
    'Pantoc',
    'Perez',
    'Poblacion',
    'San Isidro',
    'Taal',
    'Tugatog',
    'Ubihan',
    'Zamora',
  ];

  const requiredDocuments = [
    'Certified True Copy of Title/Tax Declaration',
    'Location Plan/Vicinity Map',
    'Architectural Plans (signed by licensed architect)',
    'Structural Plans (signed by licensed engineer)',
    'Electrical Plans (signed by licensed electrical engineer)',
    'Plumbing Plans (signed by licensed master plumber)',
    'Building Specifications',
    'Bill of Materials',
    'Certificate of Electrical Inspection',
    'Fire Safety Evaluation Clearance',
    'Environmental Compliance Certificate',
    'Lot Survey Plan',
  ];

  const calculateBuildingPermitFee = () => {
    // Building permit fee calculation based on floor area and estimated cost
    const baseRate = 12; // ₱12 per square meter
    const floorAreaFee = data.floorArea * baseRate;
    
    // Additional percentage based on estimated cost
    const costPercentage = 0.002; // 0.2% of estimated cost
    const costFee = data.estimatedCost * costPercentage;
    
    // Minimum fee
    const minimumFee = 500;
    
    return Math.max(floorAreaFee + costFee, minimumFee);
  };

  const updateData = (updates: Partial<BuildingPermitData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const handleSubmit = () => {
    // Generate random tracking number
    const trackingNumber = `BP-${Date.now().toString().slice(-6)}`;
    alert(`Building permit application submitted successfully! Tracking Number: ${trackingNumber}`);
    // Reset form or redirect
  };

  const isFormValid = () => {
    return (
      data.ownerFirstName &&
      data.ownerLastName &&
      data.ownerEmail &&
      data.ownerPhone &&
      data.lotNumber &&
      data.barangay &&
      data.buildingType &&
      data.floorArea > 0 &&
      data.estimatedCost > 0
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Home className="w-8 h-8 text-[#0038A8]" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Building Permit Application</h1>
            <p className="text-gray-600">Submit your building permit application for construction projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Owner Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <FileText size={20} />
                <span>Owner Information</span>
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={data.ownerFirstName}
                      onChange={(e) => updateData({ ownerFirstName: e.target.value })}
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
                      value={data.ownerMiddleName}
                      onChange={(e) => updateData({ ownerMiddleName: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={data.ownerLastName}
                      onChange={(e) => updateData({ ownerLastName: e.target.value })}
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
                      value={data.ownerEmail}
                      onChange={(e) => updateData({ ownerEmail: e.target.value })}
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
                      value={data.ownerPhone}
                      onChange={(e) => updateData({ ownerPhone: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner's Address *
                  </label>
                  <textarea
                    value={data.ownerAddress}
                    onChange={(e) => updateData({ ownerAddress: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Lot Details */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Lot Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lot Number *
                    </label>
                    <input
                      type="text"
                      value={data.lotNumber}
                      onChange={(e) => updateData({ lotNumber: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Block Number
                    </label>
                    <input
                      type="text"
                      value={data.blockNumber}
                      onChange={(e) => updateData({ blockNumber: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subdivision
                    </label>
                    <input
                      type="text"
                      value={data.subdivision}
                      onChange={(e) => updateData({ subdivision: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lot Area (sq.m.) *
                    </label>
                    <input
                      type="number"
                      value={data.lotArea || ''}
                      onChange={(e) => updateData({ lotArea: Number(e.target.value) })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Barangay *
                  </label>
                  <select
                    value={data.barangay}
                    onChange={(e) => updateData({ barangay: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  >
                    <option value="">Select barangay</option>
                    {barangays.map((barangay) => (
                      <option key={barangay} value={barangay}>{barangay}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Building Details */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Building Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Building Type *
                  </label>
                  <select
                    value={data.buildingType}
                    onChange={(e) => updateData({ buildingType: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  >
                    <option value="">Select building type</option>
                    {buildingTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Floor Area (sq.m.) *
                    </label>
                    <input
                      type="number"
                      value={data.floorArea || ''}
                      onChange={(e) => updateData({ floorArea: Number(e.target.value) })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Floors *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={data.numberOfFloors || 1}
                      onChange={(e) => updateData({ numberOfFloors: Number(e.target.value) })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Cost (₱) *
                    </label>
                    <input
                      type="number"
                      value={data.estimatedCost || ''}
                      onChange={(e) => updateData({ estimatedCost: Number(e.target.value) })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Construction Type *
                  </label>
                  <select
                    value={data.constructionType}
                    onChange={(e) => updateData({ constructionType: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                    required
                  >
                    <option value="">Select construction type</option>
                    {constructionTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Document Requirements */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  Please prepare all required documents. Files should be in PDF, JPG, or PNG format, maximum 10MB each.
                  All architectural and engineering plans must be signed and sealed by licensed professionals.
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
            </section>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className={`px-8 py-3 rounded-md font-semibold ${
                  isFormValid()
                    ? 'bg-[#0038A8] text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Application
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fee Calculator */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calculator className="w-6 h-6 text-[#0038A8]" />
                <h3 className="text-lg font-semibold text-gray-900">Fee Calculator</h3>
              </div>
              
              {data.floorArea > 0 && data.estimatedCost > 0 ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Floor Area:</span>
                    <span className="font-medium">{data.floorArea} sq.m.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Area Fee (₱12/sq.m.):</span>
                    <span className="font-medium">₱{(data.floorArea * 12).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cost Fee (0.2%):</span>
                    <span className="font-medium">₱{(data.estimatedCost * 0.002).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Estimated Total:</span>
                      <span className="text-[#0038A8]">₱{calculateBuildingPermitFee().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 text-sm">
                  Enter floor area and estimated cost to calculate fees.
                </p>
              )}
            </div>

            {/* Process Timeline */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Timeline</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0038A8] rounded-full"></div>
                  <span>Document Review: 3-5 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0038A8] rounded-full"></div>
                  <span>Site Inspection: 2-3 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0038A8] rounded-full"></div>
                  <span>Final Approval: 1-2 days</span>
                </div>
                <div className="border-t pt-3 font-semibold">
                  Total: 6-10 working days
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Need Help?</h3>
              <p className="text-yellow-800 text-sm mb-3">
                Contact our Building Permits Office for assistance with your application.
              </p>
              <div className="space-y-1 text-sm text-yellow-800">
                <p>Phone: (044) 123-4567 ext. 205</p>
                <p>Email: building@meycauayan.gov.ph</p>
                <p>Office Hours: 7AM-5PM (M-F)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingPermit;