import type { PendingBill } from '../types';

export const pendingBills: PendingBill[] = [
  {
    id: 'BILL-2024-001',
    title: 'Comprehensive Public Transportation Modernization Act',
    author: 'Hon. Miguel Santos',
    committee: 'Traffic & Transportation',
    stage: '2nd Reading',
    dateFiled: '2024-01-10',
    abstract: 'This bill seeks to modernize the public transportation system by establishing electric bus routes, implementing GPS tracking for all public vehicles, creating integrated ticketing systems, and providing subsidies for vehicle modernization. The measure aims to reduce carbon emissions while improving passenger safety and comfort.',
    tags: ['transportation', 'modernization', 'environment']
  },
  {
    id: 'BILL-2024-002',
    title: 'Digital Government Services Expansion Act',
    author: 'Hon. Patricia Gonzalez',
    committee: 'Education',
    stage: 'Committee Level',
    dateFiled: '2024-02-05',
    abstract: 'Proposes the expansion of digital government services including AI-powered chatbots for citizen inquiries, blockchain-based document verification, mobile app for all city services, and mandatory digital literacy training for government employees.',
    tags: ['digital-services', 'technology', 'efficiency']
  },
  {
    id: 'BILL-2024-003',
    title: 'Small Business Recovery and Support Act',
    author: 'Hon. Roberto Martinez',
    committee: 'Appropriations',
    stage: '3rd Reading',
    dateFiled: '2024-01-25',
    abstract: 'Establishes a comprehensive support system for micro, small, and medium enterprises including low-interest loans, tax holidays for startups, simplified business registration processes, and mentorship programs. Allocates P50 million for the initial implementation.',
    tags: ['small-business', 'economic-recovery', 'entrepreneurship']
  },
  {
    id: 'BILL-2024-004',
    title: 'Climate Change Adaptation and Resilience Act',
    author: 'Hon. Luisa Garcia-Torres',
    committee: 'Environment',
    stage: '1st Reading',
    dateFiled: '2024-03-12',
    abstract: 'Creates a comprehensive framework for climate change adaptation including establishment of climate monitoring systems, mandatory climate risk assessments for development projects, tree planting quotas for businesses, and green building incentives.',
    tags: ['climate-change', 'resilience', 'sustainability']
  },
  {
    id: 'BILL-2024-005',
    title: 'Comprehensive Healthcare Access Act',
    author: 'Hon. Angela Reyes-Dela Cruz',
    committee: 'Health',
    stage: '2nd Reading',
    dateFiled: '2024-02-20',
    abstract: 'Aims to provide universal healthcare access by establishing satellite health centers in underserved areas, mobile health units for remote barangays, 24/7 telemedicine services, and specialized care for seniors and PWDs.',
    tags: ['healthcare', 'universal-access', 'telemedicine']
  },
  {
    id: 'BILL-2024-006',
    title: 'Youth Entrepreneurship Development Act',
    author: 'Hon. Patricia Gonzalez',
    committee: 'Youth & Sports',
    stage: 'Committee Level',
    dateFiled: '2024-03-01',
    abstract: 'Promotes youth entrepreneurship through startup incubation programs, seed funding for young entrepreneurs, business skills training, and partnerships with private sector for mentorship and market access.',
    tags: ['youth-entrepreneurship', 'startups', 'skills-development']
  },
  {
    id: 'BILL-2024-007',
    title: 'Enhanced Anti-Corruption and Transparency Act',
    author: 'Hon. Maria Teresa Santos-Cruz',
    committee: 'Rules and Privileges',
    stage: '1st Reading',
    dateFiled: '2024-04-08',
    abstract: 'Strengthens anti-corruption measures through mandatory asset declaration for all city officials, real-time budget tracking systems, citizen reporting mechanisms, and establishment of an independent oversight body.',
    tags: ['anti-corruption', 'transparency', 'accountability']
  },
  {
    id: 'BILL-2024-008',
    title: 'Comprehensive Water Security Act',
    author: 'Hon. Francisco Navarro',
    committee: 'Infrastructure',
    stage: 'Committee Level',
    dateFiled: '2024-04-15',
    abstract: 'Addresses water security through rainwater harvesting systems, groundwater protection measures, water recycling facilities, and partnership agreements for sustainable water supply management.',
    tags: ['water-security', 'sustainability', 'infrastructure']
  },
  {
    id: 'BILL-2024-009',
    title: 'Senior Citizens Comprehensive Welfare Act',
    author: 'Hon. Isabella Morales',
    committee: 'Social Services',
    stage: '2nd Reading',
    dateFiled: '2024-05-03',
    abstract: 'Expands senior citizen benefits including free medical check-ups, transportation allowances, recreational programs, senior-friendly infrastructure requirements, and establishment of senior citizen centers in all barangays.',
    tags: ['senior-citizens', 'welfare', 'health']
  },
  {
    id: 'BILL-2024-010',
    title: 'Public Safety Enhancement and Emergency Response Act',
    author: 'Hon. Benjamin Cruz',
    committee: 'Peace & Order',
    stage: '1st Reading',
    dateFiled: '2024-05-20',
    abstract: 'Upgrades public safety infrastructure through advanced emergency communication systems, expanded CCTV coverage with facial recognition, community-based disaster response teams, and mandatory emergency preparedness training.',
    tags: ['public-safety', 'emergency-response', 'disaster-preparedness']
  },
  {
    id: 'BILL-2024-011',
    title: 'Sustainable Tourism Development Act',
    author: 'Hon. Luisa Garcia-Torres',
    committee: 'Tourism',
    stage: 'Committee Level',
    dateFiled: '2024-06-05',
    abstract: 'Develops sustainable tourism through heritage site preservation, eco-tourism facilities, cultural festivals promotion, and community-based tourism programs that directly benefit local residents.',
    tags: ['sustainable-tourism', 'heritage-preservation', 'community-based']
  },
  {
    id: 'BILL-2024-012',
    title: 'Women Economic Empowerment Act',
    author: 'Hon. Carmen Villanueva',
    committee: 'Women & Children',
    stage: '1st Reading',
    dateFiled: '2024-06-12',
    abstract: 'Promotes women\'s economic participation through skills training programs, micro-financing for women entrepreneurs, flexible work arrangements for mothers, and gender-responsive budgeting in all city programs.',
    tags: ['women-empowerment', 'economic-participation', 'gender-equality']
  }
];

export const getPendingBillById = (id: string): PendingBill | undefined => {
  return pendingBills.find(bill => bill.id === id);
};

export const getBillsByStage = (stage: string): PendingBill[] => {
  return pendingBills.filter(bill => bill.stage === stage);
};

export const getBillsByCommittee = (committee: string): PendingBill[] => {
  return pendingBills.filter(bill => bill.committee === committee);
};

export const getBillsByAuthor = (author: string): PendingBill[] => {
  return pendingBills.filter(bill => bill.author === author);
};

export const getRecentBills = (limit: number = 10): PendingBill[] => {
  return pendingBills
    .sort((a, b) => new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime())
    .slice(0, limit);
};