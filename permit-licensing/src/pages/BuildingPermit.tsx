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
    <div className="min-h-screen bg-[#FBFBFD] py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#004499] rounded-2xl flex items-center justify-center">
              <Home className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-2">
                Building Permit
              </h1>
              <p className="text-lg text-gray-600">Submit your construction project application</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-12">
              {/* Owner Information */}
              <section>
                <div className="flex items-center space-x-3 mb-8">
                  <FileText className="w-6 h-6 text-[#0066CC]" />
                  <h2 className="text-2xl font-light text-[#1D1D1F]">Owner Information</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={data.ownerFirstName}
                        onChange={(e) => updateData({ ownerFirstName: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        value={data.ownerMiddleName}
                        onChange={(e) => updateData({ ownerMiddleName: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={data.ownerLastName}
                        onChange={(e) => updateData({ ownerLastName: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={data.ownerEmail}
                        onChange={(e) => updateData({ ownerEmail: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={data.ownerPhone}
                        onChange={(e) => updateData({ ownerPhone: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Owner's Address *
                    </label>
                    <textarea
                      value={data.ownerAddress}
                      onChange={(e) => updateData({ ownerAddress: e.target.value })}
                      rows={4}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Lot Details */}
              <section>
                <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Lot Details</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Lot Number *
                      </label>
                      <input
                        type="text"
                        value={data.lotNumber}
                        onChange={(e) => updateData({ lotNumber: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Block Number
                      </label>
                      <input
                        type="text"
                        value={data.blockNumber}
                        onChange={(e) => updateData({ blockNumber: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Subdivision
                      </label>
                      <input
                        type="text"
                        value={data.subdivision}
                        onChange={(e) => updateData({ subdivision: e.target.value })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Lot Area (sq.m.) *
                      </label>
                      <input
                        type="number"
                        value={data.lotArea || ''}
                        onChange={(e) => updateData({ lotArea: Number(e.target.value) })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Barangay *
                    </label>
                    <select
                      value={data.barangay}
                      onChange={(e) => updateData({ barangay: e.target.value })}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all appearance-none bg-white"
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
                <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Building Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Building Type *
                    </label>
                    <select
                      value={data.buildingType}
                      onChange={(e) => updateData({ buildingType: e.target.value })}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all appearance-none bg-white"
                      required
                    >
                      <option value="">Select building type</option>
                      {buildingTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Floor Area (sq.m.) *
                      </label>
                      <input
                        type="number"
                        value={data.floorArea || ''}
                        onChange={(e) => updateData({ floorArea: Number(e.target.value) })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Number of Floors *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={data.numberOfFloors || 1}
                        onChange={(e) => updateData({ numberOfFloors: Number(e.target.value) })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                        Estimated Cost (₱) *
                      </label>
                      <input
                        type="number"
                        value={data.estimatedCost || ''}
                        onChange={(e) => updateData({ estimatedCost: Number(e.target.value) })}
                        className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Construction Type *
                    </label>
                    <select
                      value={data.constructionType}
                      onChange={(e) => updateData({ constructionType: e.target.value })}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all appearance-none bg-white"
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
                <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Required Documents</h2>
                <div className="bg-[#F5F5F7] rounded-2xl p-6 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    Please prepare all required documents. Files should be in PDF, JPG, or PNG format, maximum 10MB each.
                    All architectural and engineering plans must be signed and sealed by licensed professionals.
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
              </section>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid()}
                  className={`px-12 py-4 rounded-full font-medium text-lg transition-all shadow-sm ${
                    isFormValid()
                      ? 'bg-[#0066CC] text-white hover:bg-[#004499]'
                      : 'bg-[#F5F5F7] text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Application
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Fee Calculator */}
              <div className="bg-[#F5F5F7] rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Calculator className="w-6 h-6 text-[#0066CC]" />
                  <h3 className="text-xl font-light text-[#1D1D1F]">Fee Calculator</h3>
                </div>
                
                {data.floorArea > 0 && data.estimatedCost > 0 ? (
                  <div className="space-y-4">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Floor Area:</span>
                      <span className="font-medium text-[#1D1D1F]">{data.floorArea} sq.m.</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Area Fee (₱12/sq.m.):</span>
                      <span className="font-medium text-[#1D1D1F]">₱{(data.floorArea * 12).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Cost Fee (0.2%):</span>
                      <span className="font-medium text-[#1D1D1F]">₱{(data.estimatedCost * 0.002).toLocaleString()}</span>
                    </div>
                    <div className="border-t border-[#E5E5E7] pt-4">
                      <div className="flex justify-between font-semibold">
                        <span className="text-[#1D1D1F]">Estimated Total:</span>
                        <span className="text-[#0066CC] text-lg">₱{calculateBuildingPermitFee().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    Enter floor area and estimated cost to calculate fees.
                  </p>
                )}
              </div>

              {/* Process Timeline */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E5E7]">
                <h3 className="text-xl font-light text-[#1D1D1F] mb-6">Processing Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#0066CC] rounded-full"></div>
                    <span className="text-gray-600">Document Review: 3-5 days</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#0066CC] rounded-full"></div>
                    <span className="text-gray-600">Site Inspection: 2-3 days</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#0066CC] rounded-full"></div>
                    <span className="text-gray-600">Final Approval: 1-2 days</span>
                  </div>
                  <div className="border-t border-[#E5E5E7] pt-4 font-medium text-[#1D1D1F]">
                    Total: 6-10 working days
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 rounded-2xl p-8">
                <h3 className="text-xl font-light text-orange-900 mb-4">Need Help?</h3>
                <p className="text-orange-800 leading-relaxed mb-4">
                  Contact our Building Permits Office for assistance with your application.
                </p>
                <div className="space-y-2 text-orange-800">
                  <p>Phone: (044) 123-4567 ext. 205</p>
                  <p>Email: building@meycauayan.gov.ph</p>
                  <p>Office Hours: 7AM-5PM (M-F)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingPermit;