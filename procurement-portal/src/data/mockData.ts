import { addDays, format, subDays } from 'date-fns';

export type ProcurementMode = 'Public Bidding' | 'Shopping' | 'SVP' | 'Direct Contracting' | 'Emergency';
export type ProjectCategory = 'Goods' | 'Infrastructure' | 'Consulting Services';
export type BidStatus = 'Open' | 'Closed' | 'Under Evaluation' | 'Awarded' | 'Failed';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export interface BidOpportunity {
  id: string;
  referenceNumber: string;
  title: string;
  category: ProjectCategory;
  approvedBudget: number;
  procurementMode: ProcurementMode;
  preBidDate?: Date;
  submissionDeadline: Date;
  status: BidStatus;
  description?: string;
  scopeOfWork?: string;
  fundingSource?: string;
  eligibilityRequirements?: string[];
  requiredDocuments?: string[];
  timeline?: {
    posting: Date;
    preBid?: Date;
    submission: Date;
    opening: Date;
    evaluation: Date;
    award: Date;
  };
}

export interface AwardedContract {
  id: string;
  projectTitle: string;
  referenceNumber: string;
  contractor: string;
  contractAmount: number;
  approvedBudget: number;
  dateAwarded: Date;
  procurementMode: ProcurementMode;
  contractDuration: string;
  category: ProjectCategory;
}

export interface BACMember {
  id: string;
  name: string;
  position: string;
  role: 'Chairman' | 'Vice-Chairman' | 'Member' | 'TWG' | 'Secretariat' | 'Observer';
  contactEmail?: string;
  contactPhone?: string;
  organization: string;
}

export interface ProcurementPlanItem {
  id: string;
  projectTitle: string;
  category: ProjectCategory;
  procurementMode: ProcurementMode;
  estimatedBudget: number;
  quarter: Quarter;
  status: 'Planned' | 'Ongoing' | 'Completed' | 'Cancelled';
  department: string;
}

// Mock bid opportunities
export const bidOpportunities: BidOpportunity[] = [
  {
    id: '1',
    referenceNumber: 'PGB-2025-001',
    title: 'Supply and Delivery of Office Supplies and Materials',
    category: 'Goods',
    approvedBudget: 850000,
    procurementMode: 'Public Bidding',
    preBidDate: addDays(new Date(), 5),
    submissionDeadline: addDays(new Date(), 12),
    status: 'Open',
    description: 'Procurement of various office supplies and materials for all provincial offices.',
    scopeOfWork: 'Supply and delivery of bond papers, writing materials, filing supplies, and other office consumables.',
    fundingSource: '20% Development Fund',
    eligibilityRequirements: [
      'PhilGEPS Registration Certificate',
      'Valid Mayor\'s Business Permit',
      'BIR Certificate of Registration',
      'Income/Business Tax Returns for the last 2 years',
      'Audited Financial Statements for the last 2 years'
    ],
    requiredDocuments: [
      'Technical Specifications Compliance',
      'Price Schedule',
      'Company Profile and Track Record',
      'List of Ongoing and Completed Contracts'
    ],
    timeline: {
      posting: new Date(),
      preBid: addDays(new Date(), 5),
      submission: addDays(new Date(), 12),
      opening: addDays(new Date(), 13),
      evaluation: addDays(new Date(), 20),
      award: addDays(new Date(), 30)
    }
  },
  {
    id: '2',
    referenceNumber: 'PGB-2025-002',
    title: 'Construction of Multi-Purpose Building at Barangay San Jose',
    category: 'Infrastructure',
    approvedBudget: 15000000,
    procurementMode: 'Public Bidding',
    preBidDate: addDays(new Date(), 8),
    submissionDeadline: addDays(new Date(), 18),
    status: 'Open',
    description: 'Construction of a two-story multi-purpose building for community activities.',
    scopeOfWork: 'Site preparation, foundation work, structural construction, roofing, electrical and plumbing works.',
    fundingSource: 'GAA 2025 - Infrastructure Development Fund',
    eligibilityRequirements: [
      'Contractor\'s License (Category A)',
      'PCAB License for Building Construction',
      'PhilGEPS Registration Certificate',
      'Track record in similar projects (minimum 3)',
      'Key personnel certifications (Licensed Engineer, Architect)'
    ]
  },
  {
    id: '3',
    referenceNumber: 'PGB-2025-003',
    title: 'Hiring of Consultant for Provincial Development Plan Update',
    category: 'Consulting Services',
    approvedBudget: 2500000,
    procurementMode: 'Shopping',
    submissionDeadline: addDays(new Date(), 15),
    status: 'Open',
    description: 'Technical assistance for updating the Provincial Development Plan 2025-2035.',
    scopeOfWork: 'Data gathering, stakeholder consultations, plan formulation, and capacity building.'
  },
  {
    id: '4',
    referenceNumber: 'PGB-2025-004',
    title: 'Procurement of Medical Equipment for Provincial Hospital',
    category: 'Goods',
    approvedBudget: 8000000,
    procurementMode: 'Public Bidding',
    submissionDeadline: subDays(new Date(), 2),
    status: 'Under Evaluation',
    description: 'Procurement of various medical equipment to upgrade hospital facilities.'
  },
  {
    id: '5',
    referenceNumber: 'PGB-2025-005',
    title: 'Road Rehabilitation Project - Barangay Santa Cruz',
    category: 'Infrastructure',
    approvedBudget: 12000000,
    procurementMode: 'Public Bidding',
    submissionDeadline: subDays(new Date(), 10),
    status: 'Awarded',
    description: 'Rehabilitation of 2.5 km barangay road including drainage system.'
  }
];

// Mock awarded contracts
export const awardedContracts: AwardedContract[] = [
  {
    id: '1',
    projectTitle: 'Construction of Covered Court at Barangay Poblacion',
    referenceNumber: 'PGB-2024-089',
    contractor: 'Bulacan Construction & Development Corp.',
    contractAmount: 4850000,
    approvedBudget: 5000000,
    dateAwarded: subDays(new Date(), 45),
    procurementMode: 'Public Bidding',
    contractDuration: '120 calendar days',
    category: 'Infrastructure'
  },
  {
    id: '2',
    projectTitle: 'IT Equipment for Provincial Capitol',
    referenceNumber: 'PGB-2024-091',
    contractor: 'TechSolutions Philippines Inc.',
    contractAmount: 3200000,
    approvedBudget: 3500000,
    dateAwarded: subDays(new Date(), 30),
    procurementMode: 'Public Bidding',
    contractDuration: '60 calendar days',
    category: 'Goods'
  },
  {
    id: '3',
    projectTitle: 'Gender and Development Training Program',
    referenceNumber: 'PGB-2024-092',
    contractor: 'Community Development Associates',
    contractAmount: 890000,
    approvedBudget: 1000000,
    dateAwarded: subDays(new Date(), 20),
    procurementMode: 'Shopping',
    contractDuration: '90 calendar days',
    category: 'Consulting Services'
  },
  {
    id: '4',
    referenceNumber: 'PGB-2025-005',
    projectTitle: 'Road Rehabilitation Project - Barangay Santa Cruz',
    contractor: 'Central Luzon Infrastructure Corp.',
    contractAmount: 11500000,
    approvedBudget: 12000000,
    dateAwarded: subDays(new Date(), 5),
    procurementMode: 'Public Bidding',
    contractDuration: '180 calendar days',
    category: 'Infrastructure'
  }
];

// Mock BAC members
export const bacMembers: BACMember[] = [
  {
    id: '1',
    name: 'Engr. Maria Santos-Rodriguez',
    position: 'Provincial Engineer',
    role: 'Chairman',
    contactEmail: 'm.rodriguez@bulacan.gov.ph',
    contactPhone: '(044) 662-1104',
    organization: 'Provincial Engineering Office'
  },
  {
    id: '2',
    name: 'Ms. Carmen dela Cruz',
    position: 'Provincial Budget Officer',
    role: 'Vice-Chairman',
    contactEmail: 'c.delacruz@bulacan.gov.ph',
    contactPhone: '(044) 662-1105',
    organization: 'Provincial Budget Office'
  },
  {
    id: '3',
    name: 'Atty. Roberto Villanueva',
    position: 'Provincial Legal Officer',
    role: 'Member',
    contactEmail: 'r.villanueva@bulacan.gov.ph',
    contactPhone: '(044) 662-1106',
    organization: 'Provincial Legal Office'
  },
  {
    id: '4',
    name: 'Ms. Elena Garcia',
    position: 'Provincial Accountant',
    role: 'Member',
    contactEmail: 'e.garcia@bulacan.gov.ph',
    contactPhone: '(044) 662-1107',
    organization: 'Provincial Accounting Office'
  },
  {
    id: '5',
    name: 'Dr. Jose Reyes',
    position: 'Provincial Health Officer',
    role: 'Member',
    contactEmail: 'j.reyes@bulacan.gov.ph',
    contactPhone: '(044) 662-1108',
    organization: 'Provincial Health Office'
  },
  {
    id: '6',
    name: 'Engr. Patricia Mendoza',
    position: 'Assistant Provincial Engineer',
    role: 'TWG',
    contactEmail: 'p.mendoza@bulacan.gov.ph',
    organization: 'Provincial Engineering Office'
  },
  {
    id: '7',
    name: 'Ms. Ana Fernandez',
    position: 'Administrative Officer V',
    role: 'Secretariat',
    contactEmail: 'a.fernandez@bulacan.gov.ph',
    contactPhone: '(044) 662-1109',
    organization: 'General Services Office'
  },
  {
    id: '8',
    name: 'Mr. Carlos Morales',
    position: 'State Auditor III',
    role: 'Observer',
    contactEmail: 'c.morales@coa.gov.ph',
    organization: 'Commission on Audit'
  },
  {
    id: '9',
    name: 'Ms. Lisa Tan',
    position: 'Civil Society Representative',
    role: 'Observer',
    contactEmail: 'l.tan@bulacancivicsociety.org',
    organization: 'Bulacan Civil Society Alliance'
  }
];

// Mock procurement plan
export const procurementPlan: ProcurementPlanItem[] = [
  {
    id: '1',
    projectTitle: 'Construction of Provincial Sports Complex Phase 1',
    category: 'Infrastructure',
    procurementMode: 'Public Bidding',
    estimatedBudget: 50000000,
    quarter: 'Q1',
    status: 'Planned',
    department: 'Provincial Engineering Office'
  },
  {
    id: '2',
    projectTitle: 'IT Modernization Program',
    category: 'Goods',
    procurementMode: 'Public Bidding',
    estimatedBudget: 25000000,
    quarter: 'Q2',
    status: 'Planned',
    department: 'Information Technology Office'
  },
  {
    id: '3',
    projectTitle: 'Disaster Risk Reduction Training',
    category: 'Consulting Services',
    procurementMode: 'Shopping',
    estimatedBudget: 1500000,
    quarter: 'Q1',
    status: 'Ongoing',
    department: 'Provincial Disaster Risk Reduction Office'
  },
  {
    id: '4',
    projectTitle: 'Medical Supplies for Health Centers',
    category: 'Goods',
    procurementMode: 'Shopping',
    estimatedBudget: 3000000,
    quarter: 'Q1',
    status: 'Completed',
    department: 'Provincial Health Office'
  },
  {
    id: '5',
    projectTitle: 'Bridge Construction - Barangay Malhacan',
    category: 'Infrastructure',
    procurementMode: 'Public Bidding',
    estimatedBudget: 18000000,
    quarter: 'Q3',
    status: 'Planned',
    department: 'Provincial Engineering Office'
  }
];

// Helper functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount);
};

export const formatDate = (date: Date): string => {
  return format(date, 'MMMM dd, yyyy');
};

export const getDaysUntilDeadline = (deadline: Date): number => {
  const today = new Date();
  const diffTime = deadline.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getStatusColor = (status: BidStatus): string => {
  switch (status) {
    case 'Open':
      return 'bg-green-100 text-green-800';
    case 'Closed':
      return 'bg-gray-100 text-gray-800';
    case 'Under Evaluation':
      return 'bg-blue-100 text-blue-800';
    case 'Awarded':
      return 'bg-yellow-100 text-yellow-800';
    case 'Failed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};