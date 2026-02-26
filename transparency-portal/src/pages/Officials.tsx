import { User, Phone, Mail, MapPin, Calendar, Users, Award } from 'lucide-react'

interface Official {
  id: string
  name: string
  position: string
  term: string
  committee?: string[]
  contact: {
    phone?: string
    email?: string
    office?: string
  }
  achievements?: string[]
  education?: string
  experience?: string
  profileImage?: string
}

const Officials = () => {
  const officialsData: Official[] = [
    {
      id: '001',
      name: 'Hon. Maria Carmen Santos',
      position: 'Municipal Mayor',
      term: '2022-2025',
      contact: {
        phone: '(044) 123-4567',
        email: 'mayor.santos@sanrafael.gov.ph',
        office: 'Mayor\'s Office, 2nd Floor, Municipal Hall'
      },
      achievements: [
        'Implemented Digital Governance System',
        'Launched Municipal Health Insurance Program',
        'Established 15 new health centers across barangays',
        'Increased annual budget by 25%'
      ],
      education: 'Master in Public Administration, University of the Philippines',
      experience: 'Former Vice Mayor (2019-2022), Former Sanggunian Bayan Member (2016-2019)',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '002',
      name: 'Hon. Roberto dela Cruz',
      position: 'Municipal Vice Mayor',
      term: '2022-2025',
      committee: ['Presiding Officer of Sangguniang Bayan'],
      contact: {
        phone: '(044) 123-4568',
        email: 'vmayor.delacruz@sanrafael.gov.ph',
        office: 'Vice Mayor\'s Office, 2nd Floor, Municipal Hall'
      },
      achievements: [
        'Authored 12 ordinances on environmental protection',
        'Established Youth Development Program',
        'Led infrastructure development initiatives'
      ],
      education: 'Bachelor of Laws, Ateneo de Manila University',
      experience: 'Former City Councilor, Private Legal Practice (15 years)',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '003',
      name: 'Hon. Ana Maria Reyes',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Health', 'Committee on Women and Family'],
      contact: {
        phone: '(044) 123-4569',
        email: 'sb.reyes@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Champions Women Empowerment Programs',
        'Established Maternal Health Initiative',
        'Led COVID-19 Response Team'
      ],
      education: 'Doctor of Medicine, University of Santo Tomas',
      experience: 'Municipal Health Officer (10 years), Private Practice',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '004',
      name: 'Hon. Jose Miguel Torres',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Public Works', 'Committee on Transportation'],
      contact: {
        phone: '(044) 123-4570',
        email: 'sb.torres@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Supervised ₱200M infrastructure projects',
        'Modernized public transportation system',
        'Improved road network by 40%'
      ],
      education: 'Bachelor of Science in Civil Engineering, Mapua University',
      experience: 'Licensed Civil Engineer (20 years), Construction Industry',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '005',
      name: 'Hon. Linda Castro',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Education', 'Committee on Youth and Sports'],
      contact: {
        phone: '(044) 123-4571',
        email: 'sb.castro@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Increased education budget by 30%',
        'Built 8 new school buildings',
        'Established scholarship program for 500 students'
      ],
      education: 'Master in Education, Philippine Normal University',
      experience: 'Public School Principal (25 years), Education Consultant',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '006',
      name: 'Hon. Carlos Mendoza',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Finance', 'Committee on Revenue Generation'],
      contact: {
        phone: '(044) 123-4572',
        email: 'sb.mendoza@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Streamlined tax collection system',
        'Increased municipal revenue by 35%',
        'Implemented budget transparency measures'
      ],
      education: 'Certified Public Accountant, De La Salle University',
      experience: 'Municipal Treasurer (12 years), Private Accounting Firm',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '007',
      name: 'Hon. Patricia Villanueva',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Environment', 'Committee on Agriculture'],
      contact: {
        phone: '(044) 123-4573',
        email: 'sb.villanueva@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Led reforestation of 500 hectares',
        'Established organic farming program',
        'Reduced waste by 45% through recycling initiatives'
      ],
      education: 'Bachelor of Science in Environmental Science, University of the Philippines',
      experience: 'Environmental Consultant (15 years), NGO Leader',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '008',
      name: 'Hon. Ricardo Fernandez',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Public Safety', 'Committee on Tourism'],
      contact: {
        phone: '(044) 123-4574',
        email: 'sb.fernandez@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Reduced crime rate by 40%',
        'Established 24/7 emergency response system',
        'Developed eco-tourism sites'
      ],
      education: 'Bachelor of Science in Criminology, Philippine Public Safety College',
      experience: 'Former Police Chief (20 years), Security Consultant',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '009',
      name: 'Hon. Grace Mercado',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Social Services', 'Committee on Senior Citizens'],
      contact: {
        phone: '(044) 123-4575',
        email: 'sb.mercado@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Expanded social services to 15,000 beneficiaries',
        'Established senior citizens support program',
        'Built 5 community centers'
      ],
      education: 'Master in Social Work, University of the Philippines',
      experience: 'Social Worker (18 years), Community Organizer',
      profileImage: '/api/placeholder/150/150'
    },
    {
      id: '010',
      name: 'Hon. Antonio Ramos',
      position: 'Sangguniang Bayan Member',
      term: '2022-2025',
      committee: ['Committee on Trade and Commerce', 'Committee on Cooperatives'],
      contact: {
        phone: '(044) 123-4576',
        email: 'sb.ramos@sanrafael.gov.ph',
        office: 'Sangguniang Bayan, 1st Floor, Municipal Hall'
      },
      achievements: [
        'Supported 200 micro-enterprises',
        'Established public market modernization',
        'Increased business registrations by 50%'
      ],
      education: 'Master in Business Administration, Asian Institute of Management',
      experience: 'Business Owner (25 years), Chamber of Commerce President',
      profileImage: '/api/placeholder/150/150'
    }
  ]

  const getPositionColor = (position: string) => {
    if (position.includes('Mayor') && !position.includes('Vice')) return 'bg-blue-600'
    if (position.includes('Vice Mayor')) return 'bg-blue-500'
    return 'bg-blue-400'
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-[#323130] mb-2">Elected Officials</h1>
        <p className="text-gray-600">Meet your local government representatives serving the Municipality of San Rafael, Bulacan</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="fluent-card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-50">
              <Users className="w-6 h-6 text-[#0078D4]" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-[#323130]">10</h3>
              <p className="text-gray-600 font-medium">Total Officials</p>
            </div>
          </div>
        </div>
        
        <div className="fluent-card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-50">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-[#323130]">2022-2025</h3>
              <p className="text-gray-600 font-medium">Current Term</p>
            </div>
          </div>
        </div>
        
        <div className="fluent-card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-50">
              <Calendar className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-[#323130]">3</h3>
              <p className="text-gray-600 font-medium">Years Served</p>
            </div>
          </div>
        </div>
        
        <div className="fluent-card p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-orange-50">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-[#323130]">15</h3>
              <p className="text-gray-600 font-medium">Committees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Officials */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#323130] mb-6">Executive Officials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officialsData.filter(official => official.position.includes('Mayor')).map((official) => (
            <div key={official.id} className="fluent-card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getPositionColor(official.position)} mb-2`}>
                    {official.position}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{official.name}</h3>
                  <p className="text-gray-600 mb-4">Term: {official.term}</p>
                  
                  <div className="space-y-2 mb-4">
                    {official.contact.phone && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{official.contact.phone}</span>
                      </div>
                    )}
                    {official.contact.email && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{official.contact.email}</span>
                      </div>
                    )}
                    {official.contact.office && (
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{official.contact.office}</span>
                      </div>
                    )}
                  </div>

                  {official.education && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Education</h4>
                      <p className="text-sm text-gray-600">{official.education}</p>
                    </div>
                  )}

                  {official.experience && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Experience</h4>
                      <p className="text-sm text-gray-600">{official.experience}</p>
                    </div>
                  )}

                  {official.achievements && (
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Achievements</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {official.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sangguniang Bayan Members */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sangguniang Bayan Members</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {officialsData.filter(official => official.position === 'Sangguniang Bayan Member').map((official) => (
            <div key={official.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{official.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getPositionColor(official.position)} mb-2`}>
                    {official.position}
                  </span>
                  <p className="text-sm text-gray-600 mb-3">Term: {official.term}</p>
                  
                  {official.committee && (
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Committee Assignments</h4>
                      <div className="flex flex-wrap gap-1">
                        {official.committee.map((committee, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-100 text-blue-800">
                            {committee}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1 mb-3 text-sm text-gray-600">
                    {official.contact.phone && (
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-2" />
                        <span>{official.contact.phone}</span>
                      </div>
                    )}
                    {official.contact.email && (
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 mr-2" />
                        <span>{official.contact.email}</span>
                      </div>
                    )}
                  </div>

                  {official.education && (
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-900 text-xs mb-1">Education</h4>
                      <p className="text-xs text-gray-600">{official.education}</p>
                    </div>
                  )}

                  {official.achievements && (
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs mb-1">Key Achievements</h4>
                      <ul className="list-disc list-inside text-xs text-gray-600 space-y-0.5">
                        {official.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Municipal Hall Address</h3>
            <p className="text-gray-600 mb-4">
              Municipal Government of San Rafael<br />
              Municipal Hall, Barangay Poblacion<br />
              San Rafael, Bulacan 3008<br />
              Philippines
            </p>
            
            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 5:00 PM<br />
              Saturday: 8:00 AM - 12:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">General Information</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(044) 123-4500 (Main Line)</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@sanrafael.gov.ph</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2 mt-4">Emergency Hotlines</h3>
            <div className="space-y-1 text-gray-600">
              <p>Municipal Emergency: (044) 911</p>
              <p>Fire Station: (044) 123-4911</p>
              <p>Police Station: (044) 123-4117</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Officials