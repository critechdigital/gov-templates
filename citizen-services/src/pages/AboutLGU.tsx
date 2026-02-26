import { MapPin, Users, Eye, Target, Building, Phone, Mail } from 'lucide-react';
import { lguInfo, departments, barangays } from '../data/mockData';

const AboutLGU = () => {
  const totalPopulation = barangays.reduce((sum, barangay) => sum + barangay.population, 0);

  const municipalOfficials = [
    { position: 'Municipal Mayor', name: 'Hon. Ricardo R. Silvestre', image: '/official-1.jpg' },
    { position: 'Municipal Vice Mayor', name: 'Hon. Maria Elena S. Santos', image: '/official-2.jpg' },
    { position: 'Municipal Secretary', name: 'Atty. Carlos M. Cruz', image: '/official-3.jpg' },
    { position: 'Municipal Treasurer', name: 'CPA Ana L. Rodriguez', image: '/official-4.jpg' },
    { position: 'Municipal Assessor', name: 'Engr. Miguel A. Torres', image: '/official-5.jpg' },
    { position: 'Municipal Planning Officer', name: 'Arch. Sofia R. Villanueva', image: '/official-6.jpg' }
  ];

  const councilors = [
    { name: 'Hon. Juan P. Garcia', position: 'Councilor' },
    { name: 'Hon. Rosa M. Mendoza', position: 'Councilor' },
    { name: 'Hon. Pedro L. Santos', position: 'Councilor' },
    { name: 'Hon. Carmen A. Cruz', position: 'Councilor' },
    { name: 'Hon. Eduardo R. Torres', position: 'Councilor' },
    { name: 'Hon. Gloria S. Rodriguez', position: 'Councilor' },
    { name: 'Hon. Antonio M. Villanueva', position: 'Councilor' },
    { name: 'Hon. Teresa P. Garcia', position: 'Councilor' }
  ];

  const stats = [
    { label: 'Total Population', value: totalPopulation.toLocaleString(), icon: Users },
    { label: 'Total Barangays', value: barangays.length, icon: MapPin },
    { label: 'Government Departments', value: departments.length, icon: Building },
    { label: 'Years of Service', value: '150+', icon: Target }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="w-24 h-24 bg-[#0038A8] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-3xl">M</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{lguInfo.fullName}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A progressive municipality committed to providing excellent public services and fostering 
          sustainable development for all residents.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon className="h-8 w-8 text-[#0038A8] mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Vision and Mission */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <div className="flex items-center mb-4">
            <Eye className="h-6 w-6 text-[#0038A8] mr-3" />
            <h2 className="text-2xl font-bold text-[#0038A8]">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{lguInfo.vision}</p>
        </div>

        <div className="bg-green-50 p-8 rounded-lg border border-green-200">
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-green-600">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{lguInfo.mission}</p>
        </div>
      </div>

      {/* History */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Brief History</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            {lguInfo.history}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The municipality has a rich history dating back to the Spanish colonial period, when it was 
            established as a small farming community. Over the years, Marilao has evolved into a thriving 
            urban center while maintaining its cultural heritage and community values.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, Marilao stands as a testament to balanced development, successfully integrating modern 
            infrastructure with environmental sustainability. The municipality continues to attract businesses 
            and residents seeking quality of life and economic opportunities.
          </p>
        </div>
      </div>

      {/* Municipal Officials */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Municipal Officials</h2>
        
        {/* Mayor and Key Officials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {municipalOfficials.map((official, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Photo</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{official.name}</h3>
              <p className="text-[#0038A8] text-sm font-medium">{official.position}</p>
            </div>
          ))}
        </div>

        {/* Sangguniang Bayan Members */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Sangguniang Bayan Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {councilors.map((councilor, index) => (
              <div key={index} className="bg-white p-4 rounded border text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{councilor.name}</h4>
                <p className="text-gray-600 text-xs">{councilor.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Organizational Chart Placeholder */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Organizational Structure</h2>
        <div className="bg-gray-100 p-12 rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-center">
            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Organizational Chart Placeholder</h3>
            <p className="text-gray-500">
              Complete organizational chart showing the municipal government structure, 
              department hierarchy, and reporting relationships would be displayed here.
            </p>
          </div>
        </div>
      </div>

      {/* Government Departments */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Government Departments</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((department) => (
            <div key={department.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{department.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Department Head: {department.head}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{department.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barangays Directory */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Barangay Directory</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0038A8] text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Barangay</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Captain</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">Population</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {barangays.map((barangay, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{barangay.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{barangay.captain}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 text-right">
                      {barangay.population.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td className="px-6 py-3 text-sm font-semibold text-gray-800">
                    Total: {barangays.length} Barangays
                  </td>
                  <td className="px-6 py-3"></td>
                  <td className="px-6 py-3 text-sm font-semibold text-gray-800 text-right">
                    {totalPopulation.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-[#0038A8] to-blue-600 text-white p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Contact the Municipality</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Address</div>
                <div className="text-blue-100 text-sm">
                  Municipal Hall, Poblacion<br />
                  Marilao, Bulacan 3019
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Phone</div>
                <div className="text-blue-100 text-sm">
                  (044) 815-2300<br />
                  (044) 815-2301
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Email</div>
                <div className="text-blue-100 text-sm">
                  info@marilao.gov.ph<br />
                  mayor@marilao.gov.ph
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-700 rounded-lg">
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-blue-100 text-sm">
              Monday to Friday: 8:00 AM - 5:00 PM<br />
              Lunch Break: 12:00 PM - 1:00 PM<br />
              Saturday & Sunday: Closed (except for emergency services)
            </p>
          </div>
        </div>
      </div>

      {/* Transparency and Accountability */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Transparency Commitment</h3>
          <p className="text-yellow-700 text-sm mb-4">
            The Municipality of Marilao is committed to transparent governance and accountability to our citizens.
          </p>
          <ul className="space-y-2 text-sm text-yellow-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Annual budget and expenditure reports</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Public bidding and procurement processes</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Regular public consultations</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Freedom of Information compliance</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Citizen Participation</h3>
          <p className="text-purple-700 text-sm mb-4">
            We encourage active citizen participation in local governance and community development.
          </p>
          <ul className="space-y-2 text-sm text-purple-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Monthly public forums</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Community advisory committees</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Youth and senior citizen councils</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>Online feedback and suggestion portal</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutLGU;