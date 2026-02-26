// Mock data for Municipality of Marilao, Bulacan

export const lguInfo = {
  name: "Municipality of Marilao",
  province: "Bulacan",
  fullName: "Municipality of Marilao, Bulacan",
  seal: "/seal-placeholder.png",
  history: "Marilao is a first-class municipality in the province of Bulacan, Philippines. According to the 2020 census, it has a population of 254,453 people. The municipality is known for its industrial development and growing urban centers.",
  vision: "A progressive, sustainable, and livable municipality that serves as a model community in Bulacan.",
  mission: "To provide excellent public services, promote economic development, and ensure the welfare of all residents through transparent governance and active community participation."
};

export const departments = [
  { id: 'civil', name: 'Office of the Civil Registrar', head: 'Maria Santos', contact: '(044) 815-2345' },
  { id: 'social', name: 'Municipal Social Welfare and Development Office', head: 'Juan dela Cruz', contact: '(044) 815-2346' },
  { id: 'health', name: 'Municipal Health Office', head: 'Dr. Ana Rodriguez', contact: '(044) 815-2347' },
  { id: 'treasury', name: 'Municipal Treasury Office', head: 'Carlos Mendoza', contact: '(044) 815-2348' },
  { id: 'assessor', name: 'Municipal Assessor Office', head: 'Rosa Villanueva', contact: '(044) 815-2349' },
  { id: 'engineering', name: 'Municipal Engineering Office', head: 'Engr. Miguel Torres', contact: '(044) 815-2350' },
  { id: 'planning', name: 'Municipal Planning and Development Office', head: 'Lisa Garcia', contact: '(044) 815-2351' },
  { id: 'agriculture', name: 'Municipal Agriculture Office', head: 'Roberto Cruz', contact: '(044) 815-2352' }
];

export const services = [
  // Civil Registry Services
  { id: '1', name: 'Birth Certificate', department: 'civil', category: 'Civil Registry', description: 'Certified copy of birth record', requirements: ['Valid ID', 'PSA Birth Certificate (if available)'], processingTime: '3-5 working days', fee: 'PHP 100', process: ['Submit application form', 'Present valid ID', 'Pay processing fee', 'Wait for processing', 'Claim certificate'] },
  { id: '2', name: 'Marriage Certificate', department: 'civil', category: 'Civil Registry', description: 'Certified copy of marriage record', requirements: ['Valid ID', 'PSA Marriage Certificate (if available)'], processingTime: '3-5 working days', fee: 'PHP 100', process: ['Submit application form', 'Present valid ID', 'Pay processing fee', 'Wait for processing', 'Claim certificate'] },
  { id: '3', name: 'Death Certificate', department: 'civil', category: 'Civil Registry', description: 'Certified copy of death record', requirements: ['Valid ID', 'PSA Death Certificate (if available)'], processingTime: '3-5 working days', fee: 'PHP 100', process: ['Submit application form', 'Present valid ID', 'Pay processing fee', 'Wait for processing', 'Claim certificate'] },
  { id: '4', name: 'CENOMAR', department: 'civil', category: 'Civil Registry', description: 'Certificate of No Marriage', requirements: ['Valid ID', 'Application form'], processingTime: '5-7 working days', fee: 'PHP 200', process: ['Submit application form', 'Present valid ID', 'Pay processing fee', 'Wait for processing', 'Claim certificate'] },
  
  // Social Welfare Services
  { id: '5', name: 'Senior Citizen ID', department: 'social', category: 'Social Welfare', description: 'Identification card for senior citizens', requirements: ['Birth Certificate', 'Valid ID', '2x2 Photo'], processingTime: '1-2 weeks', fee: 'Free', process: ['Submit requirements', 'Fill application form', 'Photo taking', 'Wait for processing', 'Claim ID'] },
  { id: '6', name: 'PWD ID', department: 'social', category: 'Social Welfare', description: 'Identification card for persons with disabilities', requirements: ['Medical Certificate', 'Valid ID', '2x2 Photo'], processingTime: '1-2 weeks', fee: 'Free', process: ['Medical assessment', 'Submit requirements', 'Fill application form', 'Photo taking', 'Claim ID'] },
  { id: '7', name: 'Solo Parent ID', department: 'social', category: 'Social Welfare', description: 'Identification card for solo parents', requirements: ['Birth Certificate of child', 'Valid ID', 'Affidavit of Solo Parent'], processingTime: '1 week', fee: 'Free', process: ['Submit requirements', 'Interview', 'Fill application form', 'Wait for approval', 'Claim ID'] },
  { id: '8', name: 'Indigency Certificate', department: 'social', category: 'Social Welfare', description: 'Certificate of indigency for assistance programs', requirements: ['Valid ID', 'Barangay Certificate'], processingTime: '1-3 days', fee: 'Free', process: ['Submit requirements', 'Interview', 'Assessment', 'Approval', 'Release certificate'] },
  
  // Health Services
  { id: '9', name: 'Health Certificate', department: 'health', category: 'Health Services', description: 'Medical certificate for various purposes', requirements: ['Valid ID', 'Medical examination'], processingTime: 'Same day', fee: 'PHP 50', process: ['Medical examination', 'Laboratory tests (if needed)', 'Doctor consultation', 'Certificate issuance'] },
  { id: '10', name: 'Immunization Services', department: 'health', category: 'Health Services', description: 'Vaccination services for children and adults', requirements: ['Valid ID', 'Immunization card'], processingTime: 'Same day', fee: 'Free', process: ['Registration', 'Medical screening', 'Vaccination', 'Record updating'] },
  { id: '11', name: 'Family Planning Services', department: 'health', category: 'Health Services', description: 'Reproductive health services and counseling', requirements: ['Valid ID'], processingTime: 'Same day', fee: 'Free', process: ['Consultation', 'Counseling', 'Method selection', 'Service provision'] },
  
  // Treasury Services
  { id: '12', name: 'Real Property Tax Payment', department: 'treasury', category: 'Treasury Services', description: 'Payment of annual real property tax', requirements: ['Tax Declaration', 'Valid ID'], processingTime: 'Same day', fee: 'Based on assessment', process: ['Present tax declaration', 'Compute amount due', 'Process payment', 'Issue official receipt'] },
  { id: '13', name: 'Business Tax Payment', department: 'treasury', category: 'Treasury Services', description: 'Payment of business taxes and fees', requirements: ['Business permit', 'Valid ID'], processingTime: 'Same day', fee: 'Based on business type', process: ['Present business permit', 'Compute amount due', 'Process payment', 'Issue official receipt'] },
  { id: '14', name: 'Clearance Certificate', department: 'treasury', category: 'Treasury Services', description: 'Tax clearance for various transactions', requirements: ['Valid ID', 'Updated tax payments'], processingTime: '1-2 days', fee: 'PHP 50', process: ['Check tax records', 'Verify payments', 'Issue clearance'] },
  
  // Assessor Services
  { id: '15', name: 'Tax Declaration', department: 'assessor', category: 'Assessor Services', description: 'Declaration of real property for tax purposes', requirements: ['Deed of sale/Title', 'Valid ID', 'Survey plan'], processingTime: '5-10 working days', fee: 'PHP 200', process: ['Submit requirements', 'Property inspection', 'Assessment computation', 'Tax declaration preparation', 'Release'] },
  { id: '16', name: 'Transfer of Tax Declaration', department: 'assessor', category: 'Assessor Services', description: 'Transfer of property ownership for tax purposes', requirements: ['Old tax declaration', 'Deed of sale', 'Valid ID'], processingTime: '3-5 working days', fee: 'PHP 150', process: ['Submit requirements', 'Verification', 'Update records', 'Issue new tax declaration'] },
  
  // Engineering Services
  { id: '17', name: 'Building Permit', department: 'engineering', category: 'Engineering Services', description: 'Permit for construction and renovation', requirements: ['Building plans', 'Lot plan', 'Valid ID', 'Tax clearance'], processingTime: '15-30 days', fee: 'Based on project cost', process: ['Submit requirements', 'Plan review', 'Site inspection', 'Permit issuance'] },
  { id: '18', name: 'Excavation Permit', department: 'engineering', category: 'Engineering Services', description: 'Permit for excavation activities', requirements: ['Application form', 'Site plan', 'Valid ID'], processingTime: '5-7 days', fee: 'PHP 500', process: ['Submit application', 'Site inspection', 'Approval', 'Permit issuance'] },
  { id: '19', name: 'Electrical Permit', department: 'engineering', category: 'Engineering Services', description: 'Permit for electrical installations', requirements: ['Electrical plans', 'Valid ID', 'Building permit'], processingTime: '7-10 days', fee: 'PHP 300', process: ['Submit requirements', 'Plan review', 'Inspection', 'Permit issuance'] },
  
  // Planning Services
  { id: '20', name: 'Zoning Clearance', department: 'planning', category: 'Planning Services', description: 'Clearance for land use compliance', requirements: ['Location map', 'Valid ID', 'Tax declaration'], processingTime: '3-5 days', fee: 'PHP 100', process: ['Submit requirements', 'Site verification', 'Zoning check', 'Clearance issuance'] },
  { id: '21', name: 'Development Clearance', department: 'planning', category: 'Planning Services', description: 'Clearance for development projects', requirements: ['Project proposal', 'Site plan', 'Valid ID'], processingTime: '10-15 days', fee: 'PHP 500', process: ['Submit requirements', 'Technical review', 'Site inspection', 'Clearance issuance'] },
  
  // Agriculture Services
  { id: '22', name: 'Farm Registration', department: 'agriculture', category: 'Agriculture Services', description: 'Registration of farming activities', requirements: ['Valid ID', 'Land title/tax declaration', 'Farm sketch'], processingTime: '3-5 days', fee: 'Free', process: ['Submit requirements', 'Farm inspection', 'Registration', 'Certificate issuance'] },
  { id: '23', name: 'Organic Certification', department: 'agriculture', category: 'Agriculture Services', description: 'Certification for organic farming', requirements: ['Farm registration', 'Organic plan', 'Valid ID'], processingTime: '1-2 weeks', fee: 'PHP 200', process: ['Submit requirements', 'Farm inspection', 'Assessment', 'Certification'] }
];

export const newsArticles = [
  { id: 1, title: 'Municipal Health Office Launches Free Medical Check-up Program', category: 'Programs', date: '2024-02-20', excerpt: 'Free medical services available for all residents aged 60 and above.', content: 'The Municipal Health Office of Marilao announces the launch of a comprehensive free medical check-up program for senior citizens...', image: '/news1.jpg' },
  { id: 2, title: 'New Traffic Ordinance Takes Effect March 1, 2024', category: 'Ordinances', date: '2024-02-18', excerpt: 'Updated traffic regulations to improve road safety in the municipality.', content: 'The Municipal Council has passed a new traffic ordinance that will take effect on March 1, 2024...', image: '/news2.jpg' },
  { id: 3, title: 'Public Advisory: Road Closure on Rizal Avenue', category: 'Advisories', date: '2024-02-15', excerpt: 'Temporary road closure for infrastructure improvement project.', content: 'The Municipal Engineering Office announces the temporary closure of Rizal Avenue...', image: '/news3.jpg' },
  { id: 4, title: 'Marilao Celebrates Foundation Day 2024', category: 'Events', date: '2024-02-12', excerpt: 'Three-day celebration featuring cultural shows and trade fair.', content: 'The Municipality of Marilao will celebrate its foundation day with various activities...', image: '/news4.jpg' },
  { id: 5, title: 'Free Skills Training Program Registration Open', category: 'Programs', date: '2024-02-10', excerpt: 'Technical and vocational training opportunities for residents.', content: 'The Municipal Social Welfare and Development Office opens registration for free skills training...', image: '/news5.jpg' },
  { id: 6, title: 'Enhanced Community Quarantine Guidelines', category: 'Advisories', date: '2024-02-08', excerpt: 'Updated health and safety protocols for public places.', content: 'In compliance with national health guidelines, the municipality updates its health protocols...', image: '/news6.jpg' },
  { id: 7, title: 'Annual Business Registration Renewal Period', category: 'Advisories', date: '2024-02-05', excerpt: 'Reminder for business owners to renew permits and licenses.', content: 'The Municipal Licensing Office reminds all business establishments to renew their permits...', image: '/news7.jpg' },
  { id: 8, title: 'Youth Development Program Graduation Ceremony', category: 'Events', date: '2024-02-03', excerpt: 'Recognition ceremony for youth program participants.', content: 'The Municipal Youth Development Office celebrates the graduation of program participants...', image: '/news8.jpg' },
  { id: 9, title: 'Infrastructure Development Update: Phase 2 Completion', category: 'Programs', date: '2024-02-01', excerpt: 'Major infrastructure projects reach important milestone.', content: 'The Municipal Engineering Office announces the completion of Phase 2 of major infrastructure projects...', image: '/news9.jpg' },
  { id: 10, title: 'Environmental Awareness Campaign Launched', category: 'Programs', date: '2024-01-28', excerpt: 'Community-wide initiative to promote environmental sustainability.', content: 'The Municipal Environment and Natural Resources Office launches a comprehensive environmental awareness campaign...', image: '/news10.jpg' }
];

export const appointments = [
  { id: 'A001', service: 'Birth Certificate', office: 'Office of the Civil Registrar', date: '2024-02-26', time: '09:00', status: 'Confirmed', clientName: 'Maria Santos', reference: 'MC-2024-001' },
  { id: 'A002', service: 'Building Permit', office: 'Municipal Engineering Office', date: '2024-02-26', time: '10:00', status: 'Pending', clientName: 'Juan Cruz', reference: 'ME-2024-002' },
  { id: 'A003', service: 'Senior Citizen ID', office: 'Municipal Social Welfare and Development Office', date: '2024-02-27', time: '09:30', status: 'Confirmed', clientName: 'Rosa Garcia', reference: 'SW-2024-003' },
  { id: 'A004', service: 'Health Certificate', office: 'Municipal Health Office', date: '2024-02-27', time: '11:00', status: 'Completed', clientName: 'Carlos Mendoza', reference: 'MH-2024-004' },
  { id: 'A005', service: 'Business Tax Payment', office: 'Municipal Treasury Office', date: '2024-02-28', time: '14:00', status: 'Confirmed', clientName: 'Ana Rodriguez', reference: 'MT-2024-005' },
  { id: 'A006', service: 'Tax Declaration', office: 'Municipal Assessor Office', date: '2024-02-28', time: '15:30', status: 'Pending', clientName: 'Miguel Torres', reference: 'MA-2024-006' },
  { id: 'A007', service: 'Marriage Certificate', office: 'Office of the Civil Registrar', date: '2024-02-29', time: '10:00', status: 'Confirmed', clientName: 'Lisa Villanueva', reference: 'MC-2024-007' },
  { id: 'A008', service: 'PWD ID', office: 'Municipal Social Welfare and Development Office', date: '2024-03-01', time: '09:00', status: 'Confirmed', clientName: 'Roberto Santos', reference: 'SW-2024-008' },
  { id: 'A009', service: 'Zoning Clearance', office: 'Municipal Planning and Development Office', date: '2024-03-01', time: '13:00', status: 'Pending', clientName: 'Elena Cruz', reference: 'PD-2024-009' },
  { id: 'A010', service: 'Farm Registration', office: 'Municipal Agriculture Office', date: '2024-03-02', time: '09:30', status: 'Confirmed', clientName: 'Pedro Garcia', reference: 'AG-2024-010' },
  { id: 'A011', service: 'Electrical Permit', office: 'Municipal Engineering Office', date: '2024-03-02', time: '14:00', status: 'Pending', clientName: 'Sofia Mendoza', reference: 'ME-2024-011' },
  { id: 'A012', service: 'Indigency Certificate', office: 'Municipal Social Welfare and Development Office', date: '2024-03-03', time: '10:30', status: 'Confirmed', clientName: 'Ricardo Torres', reference: 'SW-2024-012' },
  { id: 'A013', service: 'Real Property Tax Payment', office: 'Municipal Treasury Office', date: '2024-03-03', time: '11:00', status: 'Confirmed', clientName: 'Carmen Rodriguez', reference: 'MT-2024-013' },
  { id: 'A014', service: 'Development Clearance', office: 'Municipal Planning and Development Office', date: '2024-03-04', time: '15:00', status: 'Pending', clientName: 'Antonio Villanueva', reference: 'PD-2024-014' },
  { id: 'A015', service: 'Death Certificate', office: 'Office of the Civil Registrar', date: '2024-03-04', time: '16:00', status: 'Confirmed', clientName: 'Maria Santos', reference: 'MC-2024-015' }
];

export const complaints = [
  { id: 'C001', category: 'Infrastructure', title: 'Pothole on Main Street needs repair', description: 'Large pothole causing traffic issues and vehicle damage near the municipal hall.', status: 'Investigating', dateSubmitted: '2024-02-20', reference: 'INF-2024-001', submitter: 'Juan Santos' },
  { id: 'C002', category: 'Health', title: 'Noise complaint from construction site', description: 'Construction work starting too early and exceeding noise limits in residential area.', status: 'Resolved', dateSubmitted: '2024-02-18', reference: 'HLT-2024-002', submitter: 'Maria Cruz' },
  { id: 'C003', category: 'Peace & Order', title: 'Streetlight not working on Rizal Avenue', description: 'Several streetlights have been out for weeks, creating safety concerns for pedestrians.', status: 'Received', dateSubmitted: '2024-02-22', reference: 'POL-2024-003', submitter: 'Carlos Garcia' },
  { id: 'C004', category: 'Sanitation', title: 'Garbage collection missed for two weeks', description: 'Garbage has not been collected in our barangay for two consecutive weeks.', status: 'Investigating', dateSubmitted: '2024-02-15', reference: 'SAN-2024-004', submitter: 'Rosa Mendoza' },
  { id: 'C005', category: 'Infrastructure', title: 'Water supply interruption', description: 'Frequent water supply interruptions affecting multiple households in the area.', status: 'Resolved', dateSubmitted: '2024-02-10', reference: 'INF-2024-005', submitter: 'Ana Torres' },
  { id: 'C006', category: 'Others', title: 'Suggestion for park improvement', description: 'Request to add more benches and playground equipment in the municipal park.', status: 'Closed', dateSubmitted: '2024-02-08', reference: 'OTH-2024-006', submitter: 'Miguel Rodriguez' },
  { id: 'C007', category: 'Health', title: 'Commendation for health center staff', description: 'Excellent service provided by the health center during emergency medical situation.', status: 'Closed', dateSubmitted: '2024-02-05', reference: 'HLT-2024-007', submitter: 'Elena Villanueva' },
  { id: 'C008', category: 'Infrastructure', title: 'Drainage system clogged', description: 'Main drainage system is clogged causing flooding during heavy rains.', status: 'Investigating', dateSubmitted: '2024-02-25', reference: 'INF-2024-008', submitter: 'Pedro Santos' },
  { id: 'C009', category: 'Sanitation', title: 'Illegal dumping in vacant lot', description: 'People are illegally dumping garbage in the vacant lot near the school.', status: 'Received', dateSubmitted: '2024-02-23', reference: 'SAN-2024-009', submitter: 'Sofia Cruz' },
  { id: 'C010', category: 'Peace & Order', title: 'Traffic congestion during rush hours', description: 'Severe traffic congestion on main roads during peak hours needs attention.', status: 'Investigating', dateSubmitted: '2024-02-21', reference: 'POL-2024-010', submitter: 'Ricardo Garcia' }
];

export const barangays = [
  { name: 'Abangan Norte', captain: 'Capt. Maria Santos', population: 12500 },
  { name: 'Abangan Sur', captain: 'Capt. Juan Cruz', population: 11200 },
  { name: 'Banaban', captain: 'Capt. Rosa Garcia', population: 8900 },
  { name: 'Cembo', captain: 'Capt. Carlos Mendoza', population: 9800 },
  { name: 'Dulumbayan', captain: 'Capt. Ana Rodriguez', population: 7600 },
  { name: 'Ibayo', captain: 'Capt. Miguel Torres', population: 8500 },
  { name: 'Lambakin', captain: 'Capt. Lisa Villanueva', population: 6700 },
  { name: 'Lias', captain: 'Capt. Roberto Santos', population: 9200 },
  { name: 'Loma de Gato', captain: 'Capt. Elena Cruz', population: 10100 },
  { name: 'Nagbalon', captain: 'Capt. Pedro Garcia', population: 8800 },
  { name: 'Patubig', captain: 'Capt. Sofia Mendoza', population: 7400 },
  { name: 'Poblacion', captain: 'Capt. Ricardo Torres', population: 15600 },
  { name: 'Prenza I', captain: 'Capt. Carmen Rodriguez', population: 9500 },
  { name: 'Prenza II', captain: 'Capt. Antonio Villanueva', population: 8700 },
  { name: 'Santa Rosa I', captain: 'Capt. Teresa Santos', population: 10300 },
  { name: 'Santa Rosa II', captain: 'Capt. Fernando Cruz', population: 9900 },
  { name: 'Saog', captain: 'Capt. Luz Garcia', population: 8200 },
  { name: 'Taboc', captain: 'Capt. Ramon Mendoza', population: 7800 },
  { name: 'Tabing Bakod', captain: 'Capt. Gloria Rodriguez', population: 8600 },
  { name: 'Tanag', captain: 'Capt. Eduardo Torres', population: 7200 },
  { name: 'Tikay', captain: 'Capt. Minerva Villanueva', population: 6900 },
  { name: 'Tuktukan', captain: 'Capt. Arturo Santos', population: 8100 },
  { name: 'Wawa', captain: 'Capt. Rosario Cruz', population: 7500 },
  { name: 'Sta. Rosa III', captain: 'Capt. Jose Garcia', population: 8400 },
  { name: 'Marrisville', captain: 'Capt. Patricia Mendoza', population: 9100 },
  { name: 'Imperial', captain: 'Capt. Benjamin Rodriguez', population: 8300 }
];

export const emergencyContacts = [
  { agency: 'Philippine National Police (PNP)', number: '(044) 815-2301', type: 'emergency' },
  { agency: 'Bureau of Fire Protection (BFP)', number: '(044) 815-2302', type: 'emergency' },
  { agency: 'Municipal Disaster Risk Reduction and Management Office (MDRRMO)', number: '(044) 815-2303', type: 'emergency' },
  { agency: 'Marilao District Hospital', number: '(044) 815-2304', type: 'emergency' },
  { agency: 'Red Cross Marilao Chapter', number: '(044) 815-2305', type: 'emergency' },
  { agency: 'Municipal Ambulance Service', number: '(044) 815-2306', type: 'emergency' },
  { agency: 'Traffic Enforcement Unit', number: '(044) 815-2307', type: 'non-emergency' },
  { agency: 'Public Order and Safety Office', number: '(044) 815-2308', type: 'non-emergency' }
];

export const evacuationCenters = [
  { name: 'Marilao Central Elementary School', address: 'Poblacion, Marilao', capacity: 500, facilities: ['Classrooms', 'Comfort Rooms', 'Kitchen'] },
  { name: 'Marilao High School', address: 'Poblacion, Marilao', capacity: 800, facilities: ['Gymnasium', 'Classrooms', 'Comfort Rooms', 'Kitchen', 'Medical Station'] },
  { name: 'Abangan Norte Elementary School', address: 'Abangan Norte, Marilao', capacity: 300, facilities: ['Classrooms', 'Comfort Rooms'] },
  { name: 'Santa Rosa Elementary School', address: 'Santa Rosa I, Marilao', capacity: 250, facilities: ['Classrooms', 'Comfort Rooms', 'Kitchen'] },
  { name: 'Municipal Gymnasium', address: 'Poblacion, Marilao', capacity: 1000, facilities: ['Large Hall', 'Comfort Rooms', 'Kitchen', 'Medical Station', 'Generator'] }
];