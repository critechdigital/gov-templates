import { Phone, MapPin, AlertTriangle, Shield, Users, Cloud, Navigation, Clock } from 'lucide-react';
import { emergencyContacts, evacuationCenters } from '../data/mockData';

const Emergency = () => {
  const emergencyNumbers = emergencyContacts.filter(contact => contact.type === 'emergency');
  const nonEmergencyNumbers = emergencyContacts.filter(contact => contact.type === 'non-emergency');

  const safetyTips = [
    {
      title: 'Flood Preparedness',
      icon: Cloud,
      tips: [
        'Monitor weather updates and flood warnings',
        'Prepare emergency kit with food, water, and medicines',
        'Identify safe evacuation routes and centers',
        'Keep important documents in waterproof containers',
        'Turn off electricity and gas if flooding is imminent'
      ]
    },
    {
      title: 'Fire Safety',
      icon: AlertTriangle,
      tips: [
        'Install smoke detectors and check batteries regularly',
        'Plan and practice escape routes with family',
        'Keep fire extinguishers in key locations',
        'Never leave cooking unattended',
        'Store flammable materials safely away from heat sources'
      ]
    },
    {
      title: 'Medical Emergency',
      icon: Shield,
      tips: [
        'Keep first aid kit accessible and well-stocked',
        'Learn basic CPR and first aid techniques',
        'Know locations of nearest hospitals and clinics',
        'Maintain updated medical information and emergency contacts',
        'For serious injuries, call emergency services immediately'
      ]
    }
  ];

  const weatherAlerts = [
    { type: 'Flood Warning', level: 'Yellow', area: 'Low-lying areas near rivers', time: '2 hours ago' },
    { type: 'Thunderstorm', level: 'Orange', area: 'Municipality-wide', time: '4 hours ago' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold text-red-800">Emergency Information</h1>
        </div>
        <p className="text-red-700 text-lg">
          In case of emergency, call the appropriate hotlines below. For life-threatening emergencies, 
          dial <strong>911</strong> or contact your nearest emergency service.
        </p>
      </div>

      {/* Emergency Hotlines */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Phone className="h-6 w-6 text-red-600 mr-2" />
            Emergency Hotlines
          </h2>
          <div className="space-y-4">
            {emergencyNumbers.map((contact, index) => (
              <div key={index} className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-red-800">{contact.agency}</h3>
                    <a 
                      href={`tel:${contact.number}`}
                      className="text-red-600 font-mono text-lg hover:text-red-700 transition-colors"
                    >
                      {contact.number}
                    </a>
                  </div>
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
              </div>
            ))}
          </div>

          {/* National Emergency Number */}
          <div className="mt-6 p-6 bg-red-600 text-white rounded-lg">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-2">National Emergency Hotline</h3>
              <a href="tel:911" className="text-3xl font-bold hover:text-red-200 transition-colors">
                911
              </a>
              <p className="text-red-200 text-sm mt-2">
                Available 24/7 for all emergencies
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Non-Emergency Contacts</h2>
          <div className="space-y-4">
            {nonEmergencyNumbers.map((contact, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-800">{contact.agency}</h3>
                    <a 
                      href={`tel:${contact.number}`}
                      className="text-blue-600 font-mono text-lg hover:text-blue-700 transition-colors"
                    >
                      {contact.number}
                    </a>
                  </div>
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center mb-3">
              <Clock className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Office Hours</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
              <p><span className="font-medium">Lunch Break:</span> 12:00 PM - 1:00 PM</p>
              <p><span className="font-medium">Emergency services:</span> Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
        <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
          <Cloud className="h-6 w-6 mr-2" />
          Current Weather Alerts
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {weatherAlerts.map((alert, index) => (
            <div key={index} className="bg-white p-4 rounded border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{alert.type}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  alert.level === 'Orange' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {alert.level} Alert
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{alert.area}</p>
              <p className="text-xs text-gray-500">{alert.time}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-orange-100 rounded">
          <p className="text-orange-800 text-sm">
            <strong>Weather Widget Placeholder:</strong> Real-time weather data integration would be implemented here 
            using weather APIs like OpenWeatherMap or similar services.
          </p>
        </div>
      </div>

      {/* Evacuation Centers */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <MapPin className="h-6 w-6 text-blue-600 mr-2" />
          Evacuation Centers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evacuationCenters.map((center, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{center.name}</h3>
                <div className="flex items-center text-green-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{center.capacity}</span>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{center.address}</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Available Facilities:</h4>
                <div className="flex flex-wrap gap-1">
                  {center.facilities.map((facility, facilityIndex) => (
                    <span 
                      key={facilityIndex} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Disaster Preparedness Guide</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {safetyTips.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-[#0038A8] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-[#0038A8] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency Kit Checklist */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Emergency Kit Checklist</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Basic Supplies</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Water (1 gallon per person per day for 3 days)
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Non-perishable food (3-day supply)
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Battery-powered or hand crank radio
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Flashlight and extra batteries
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                First aid kit
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Personal Items</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Prescription medications
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Copies of important documents
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Cell phone with chargers
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Cash and credit cards
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Emergency contact information
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Additional Items</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Blankets and sleeping bags
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Change of clothing and sturdy shoes
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Fire extinguisher
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Matches in waterproof container
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-300 rounded mr-2"></span>
                Personal hygiene items
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emergency Procedures */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold text-blue-800 mb-4">What to do in an Emergency</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-3">Immediate Response</h3>
            <ol className="space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                <span className="text-blue-700 text-sm">Ensure personal safety first</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                <span className="text-blue-700 text-sm">Call appropriate emergency services</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                <span className="text-blue-700 text-sm">Follow evacuation orders if given</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                <span className="text-blue-700 text-sm">Stay informed through official channels</span>
              </li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-3">During Evacuation</h3>
            <ol className="space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                <span className="text-blue-700 text-sm">Bring your emergency kit</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                <span className="text-blue-700 text-sm">Follow designated evacuation routes</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                <span className="text-blue-700 text-sm">Check in at evacuation centers</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                <span className="text-blue-700 text-sm">Wait for official all-clear before returning</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800 text-white p-6 rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Municipal Emergency Management Office</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(044) 815-2303</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Municipal Hall, Poblacion</span>
            </div>
            <div className="flex items-center justify-center">
              <Navigation className="h-4 w-4 mr-2" />
              <span>emergency@marilao.gov.ph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;