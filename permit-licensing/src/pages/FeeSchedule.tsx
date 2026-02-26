import { Calculator, CreditCard, AlertCircle, Info, DollarSign } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

const FeeSchedule = () => {
  const feeCategories = [
    {
      id: 'business',
      name: 'Business Permits',
      description: 'Fees for business permit applications and renewals',
      icon: '🏪',
    },
    {
      id: 'building',
      name: 'Building Permits',
      description: 'Fees for construction and building permits',
      icon: '🏗️',
    },
    {
      id: 'clearances',
      name: 'Clearances & Certificates',
      description: 'Fees for various clearances and certificates',
      icon: '📄',
    },
    {
      id: 'penalties',
      name: 'Penalties & Surcharges',
      description: 'Late payment penalties and additional fees',
      icon: '⚠️',
    },
  ];

  const businessPermitFees = {
    new: [
      { range: '₱0 - ₱50,000', fee: '₱500', description: 'Small-scale businesses and startups' },
      { range: '₱50,001 - ₱100,000', fee: '₱1,000', description: 'Medium-scale retail and service businesses' },
      { range: '₱100,001 - ₱500,000', fee: '₱2,500', description: 'Established retail and wholesale businesses' },
      { range: '₱500,001 - ₱1,000,000', fee: '₱5,000', description: 'Large retail and manufacturing businesses' },
      { range: '₱1,000,001 - ₱5,000,000', fee: '₱10,000', description: 'Major commercial establishments' },
      { range: 'Above ₱5,000,000', fee: '₱15,000', description: 'Large corporations and major businesses' },
    ],
    renewal: [
      { range: '₱0 - ₱100,000', fee: '₱500', description: 'Small businesses (based on gross sales)' },
      { range: '₱100,001 - ₱500,000', fee: '₱1,500', description: 'Medium businesses (based on gross sales)' },
      { range: '₱500,001 - ₱1,000,000', fee: '₱3,000', description: 'Large businesses (based on gross sales)' },
      { range: '₱1,000,001 - ₱5,000,000', fee: '₱7,500', description: 'Major businesses (based on gross sales)' },
      { range: 'Above ₱5,000,000', fee: '₱15,000', description: 'Large corporations (based on gross sales)' },
    ],
    additional: [
      { item: 'Processing Fee', fee: '₱50', description: 'Administrative processing charge' },
      { item: 'Regulatory Fee', fee: '₱100', description: 'Regulatory compliance fee' },
      { item: 'Environmental Fee', fee: '₱200', description: 'For businesses with environmental impact' },
      { item: 'Fire Safety Fee', fee: '₱150', description: 'Fire safety compliance verification' },
    ],
  };

  const buildingPermitFees = [
    { description: 'Residential (Single Family)', rate: '₱12 per sq.m.', minimum: '₱500', additional: '0.2% of project cost' },
    { description: 'Residential (Multi-family)', rate: '₱15 per sq.m.', minimum: '₱750', additional: '0.25% of project cost' },
    { description: 'Commercial (Office)', rate: '₱18 per sq.m.', minimum: '₱1,000', additional: '0.3% of project cost' },
    { description: 'Commercial (Retail)', rate: '₱20 per sq.m.', minimum: '₱1,200', additional: '0.35% of project cost' },
    { description: 'Industrial (Light)', rate: '₱22 per sq.m.', minimum: '₱1,500', additional: '0.4% of project cost' },
    { description: 'Industrial (Heavy)', rate: '₱25 per sq.m.', minimum: '₱2,000', additional: '0.5% of project cost' },
    { description: 'Mixed Use', rate: '₱24 per sq.m.', minimum: '₱1,800', additional: '0.45% of project cost' },
  ];

  const additionalBuildingFees = [
    { item: 'Plan Review Fee', fee: '₱300', description: 'Architectural and structural plan review' },
    { item: 'Inspection Fee', fee: '₱500', description: 'Site inspection and compliance check' },
    { item: 'Electrical Review', fee: '₱200', description: 'Electrical plan review and approval' },
    { item: 'Plumbing Review', fee: '₱150', description: 'Plumbing plan review and approval' },
    { item: 'Structural Review', fee: '₱400', description: 'Structural engineering plan review' },
    { item: 'Re-inspection Fee', fee: '₱250', description: 'Additional inspection if initial inspection fails' },
  ];

  const clearanceFees = [
    { type: 'Barangay Clearance', fee: '₱50', validity: '1 year', description: 'Community clearance certificate' },
    { type: 'Zoning Clearance', fee: '₱200', validity: '1 year', description: 'Land use and zoning compliance' },
    { type: 'Sanitary Permit', fee: '₱300', validity: '1 year', description: 'Health department clearance' },
    { type: 'Fire Safety Inspection Certificate', fee: '₱500', validity: '1 year', description: 'BFP fire safety clearance' },
    { type: 'Environmental Clearance', fee: '₱1,000', validity: '2 years', description: 'Environmental compliance certificate' },
    { type: 'Locational Clearance', fee: '₱150', validity: '1 year', description: 'Business location compliance' },
    { type: 'Certificate of Occupancy', fee: '₱800', validity: 'Indefinite', description: 'Building occupancy certificate' },
    { type: 'Excavation Permit', fee: '₱400', validity: '6 months', description: 'Ground excavation permit' },
  ];

  const penaltyFees = [
    { violation: 'Late Business Permit Renewal', penalty: '25% of permit fee', description: 'After March 31 deadline' },
    { violation: 'Operating without Business Permit', penalty: '₱5,000 + closure', description: 'First offense penalty' },
    { violation: 'Construction without Building Permit', penalty: '₱10,000 + stop work order', description: 'Illegal construction penalty' },
    { violation: 'Late Building Permit Application', penalty: '50% surcharge', description: 'After construction has started' },
    { violation: 'Non-compliance with Fire Safety', penalty: '₱2,500 per violation', description: 'Fire safety violations' },
    { violation: 'Sanitary Violations', penalty: '₱1,500 per violation', description: 'Health code violations' },
    { violation: 'Zoning Violations', penalty: '₱3,000 + correction order', description: 'Land use violations' },
  ];

  const paymentMethods = [
    {
      method: 'Over-the-Counter',
      location: 'City Treasurer\'s Office',
      hours: '7:00 AM - 5:00 PM (M-F)',
      accepted: 'Cash, Check',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      method: 'Authorized Payment Centers',
      location: 'SM Business Centers, Bayad Centers',
      hours: 'Mall operating hours',
      accepted: 'Cash, Debit Card',
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      method: 'Bank Payment',
      location: 'BDO, BPI, Metrobank branches',
      hours: 'Banking hours',
      accepted: 'Cash, Check, Online Banking',
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      method: 'Online Payment',
      location: 'GCash, PayMaya, Online Banking',
      hours: '24/7',
      accepted: 'E-wallet, Bank Transfer',
      icon: <Calculator className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fee Schedule</h1>
        <p className="text-gray-600 mb-8">
          Complete schedule of fees for permits, licenses, and certificates
        </p>

        <Tabs.Root defaultValue="business" className="w-full">
          {/* Tab Navigation */}
          <Tabs.List className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
            {feeCategories.map((category) => (
              <Tabs.Trigger
                key={category.id}
                value={category.id}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-white data-[state=active]:text-[#0038A8] data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Business Permits Tab */}
          <Tabs.Content value="business" className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Business Permit Fees</h2>
              <p className="text-blue-800">Fees are based on capitalization for new applications and gross sales for renewals</p>
            </div>

            {/* New Business Permits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">New Business Permit Applications</h3>
              <p className="text-gray-600 text-sm mb-4">Based on initial capitalization amount</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Capitalization Range
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Permit Fee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {businessPermitFees.new.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.range}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0038A8]">
                          {item.fee}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Renewal Permits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Permit Renewals</h3>
              <p className="text-gray-600 text-sm mb-4">Based on gross sales from previous year</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gross Sales Range
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Permit Fee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {businessPermitFees.renewal.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.range}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0038A8]">
                          {item.fee}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Fees */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Business Permit Fees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {businessPermitFees.additional.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{item.item}</h4>
                      <span className="font-semibold text-[#0038A8]">{item.fee}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Tabs.Content>

          {/* Building Permits Tab */}
          <Tabs.Content value="building" className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-green-900 mb-2">Building Permit Fees</h2>
              <p className="text-green-800">Fees are calculated based on floor area and project cost</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Base Fees by Building Type</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Building Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rate per sq.m.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Minimum Fee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cost-based Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {buildingPermitFees.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0038A8]">
                          {item.rate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                          {item.minimum}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item.additional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Calculator className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Fee Calculation Formula</h4>
                  <p className="text-yellow-800 text-sm">
                    <strong>Total Fee = </strong>
                    MAX[(Floor Area × Rate per sq.m.), Minimum Fee] + (Project Cost × Cost Percentage) + Additional Fees
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Building Permit Fees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalBuildingFees.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{item.item}</h4>
                      <span className="font-semibold text-[#0038A8]">{item.fee}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Tabs.Content>

          {/* Clearances Tab */}
          <Tabs.Content value="clearances" className="space-y-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-purple-900 mb-2">Clearances & Certificates</h2>
              <p className="text-purple-800">Fixed fees for various clearances and certificates</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type of Clearance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fee
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Validity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clearanceFees.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0038A8]">
                        {item.fee}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.validity}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tabs.Content>

          {/* Penalties Tab */}
          <Tabs.Content value="penalties" className="space-y-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-red-900 mb-2">Penalties & Surcharges</h2>
              <p className="text-red-800">Additional fees for late payments and violations</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Violation/Late Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Penalty/Surcharge
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {penaltyFees.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.violation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">
                        {item.penalty}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Important Notice</h4>
                  <p className="text-yellow-800 text-sm">
                    Penalties are in addition to the original permit fees. Repeat offenders may face higher penalties 
                    and additional sanctions. Contact our office for payment arrangements or if you have questions 
                    about penalties.
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* Payment Methods */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 p-2 bg-[#0038A8] text-white rounded-lg">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{method.method}</h3>
                    <p className="text-sm text-gray-600">{method.location}</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div><span className="font-medium">Hours:</span> {method.hours}</div>
                  <div><span className="font-medium">Accepted:</span> {method.accepted}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• All fees are in Philippine Peso (₱) and subject to change without prior notice</li>
                <li>• Fees must be paid before permit/certificate issuance</li>
                <li>• Keep all official receipts as proof of payment</li>
                <li>• Senior citizens and PWDs may be entitled to discounts as per law</li>
                <li>• Refunds are not allowed except in cases of overpayment or duplicate payments</li>
                <li>• For large-scale developments, additional fees may apply based on environmental impact assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSchedule;