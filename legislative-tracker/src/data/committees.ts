import type { Committee } from '../types';

export const committees: Committee[] = [
  {
    id: 'com-001',
    name: 'Committee on Appropriations',
    description: 'Oversees budget allocation, financial planning, and expenditure authorization for city programs and projects.',
    chairperson: 'Hon. Roberto Martinez',
    viceChair: 'Hon. Eduardo Ramos',
    members: ['Hon. Roberto Martinez', 'Hon. Eduardo Ramos', 'Hon. Maria Teresa Santos-Cruz'],
    meetingSchedule: 'Every 2nd Thursday, 2:00 PM'
  },
  {
    id: 'com-002',
    name: 'Committee on Ways and Means',
    description: 'Reviews revenue generation, taxation policies, and financial sustainability measures.',
    chairperson: 'Hon. Maria Teresa Santos-Cruz',
    viceChair: 'Hon. Roberto Martinez',
    members: ['Hon. Maria Teresa Santos-Cruz', 'Hon. Roberto Martinez', 'Hon. Miguel Santos'],
    meetingSchedule: 'Every 1st Tuesday, 10:00 AM'
  },
  {
    id: 'com-003',
    name: 'Committee on Health',
    description: 'Monitors public health programs, healthcare facilities, and health-related ordinances.',
    chairperson: 'Hon. Angela Reyes-Dela Cruz',
    viceChair: 'Hon. Isabella Morales',
    members: ['Hon. Angela Reyes-Dela Cruz', 'Hon. Isabella Morales', 'Hon. Carmen Villanueva'],
    meetingSchedule: 'Every 3rd Wednesday, 9:00 AM'
  },
  {
    id: 'com-004',
    name: 'Committee on Education',
    description: 'Oversees educational programs, school infrastructure, and educational policy implementation.',
    chairperson: 'Hon. Patricia Gonzalez',
    viceChair: 'Hon. Angela Reyes-Dela Cruz',
    members: ['Hon. Patricia Gonzalez', 'Hon. Angela Reyes-Dela Cruz', 'Hon. Grace Mendoza-Silva'],
    meetingSchedule: 'Every 1st Monday, 3:00 PM'
  },
  {
    id: 'com-005',
    name: 'Committee on Infrastructure',
    description: 'Reviews infrastructure projects, public works, and development planning.',
    chairperson: 'Hon. Francisco Navarro',
    viceChair: 'Hon. Roberto Martinez',
    members: ['Hon. Francisco Navarro', 'Hon. Roberto Martinez', 'Hon. Eduardo Ramos'],
    meetingSchedule: 'Every 2nd Friday, 1:00 PM'
  },
  {
    id: 'com-006',
    name: 'Committee on Peace & Order',
    description: 'Addresses public safety, law enforcement coordination, and crime prevention programs.',
    chairperson: 'Hon. Benjamin Cruz',
    viceChair: 'Hon. Jose Luis Fernandez',
    members: ['Hon. Benjamin Cruz', 'Hon. Jose Luis Fernandez', 'Hon. Miguel Santos'],
    meetingSchedule: 'Every 3rd Monday, 10:00 AM'
  },
  {
    id: 'com-007',
    name: 'Committee on Environment',
    description: 'Monitors environmental protection, waste management, and sustainability initiatives.',
    chairperson: 'Hon. Luisa Garcia-Torres',
    viceChair: 'Hon. Jose Luis Fernandez',
    members: ['Hon. Luisa Garcia-Torres', 'Hon. Jose Luis Fernandez', 'Hon. Patricia Gonzalez'],
    meetingSchedule: 'Every 4th Tuesday, 2:00 PM'
  },
  {
    id: 'com-008',
    name: 'Committee on Traffic & Transportation',
    description: 'Regulates traffic management, public transportation, and road safety measures.',
    chairperson: 'Hon. Miguel Santos',
    viceChair: 'Hon. Francisco Navarro',
    members: ['Hon. Miguel Santos', 'Hon. Francisco Navarro', 'Hon. Benjamin Cruz'],
    meetingSchedule: 'Every 1st Thursday, 11:00 AM'
  },
  {
    id: 'com-009',
    name: 'Committee on Social Services',
    description: 'Oversees social welfare programs, community assistance, and poverty alleviation initiatives.',
    chairperson: 'Hon. Grace Mendoza-Silva',
    viceChair: 'Hon. Carmen Villanueva',
    members: ['Hon. Grace Mendoza-Silva', 'Hon. Carmen Villanueva', 'Hon. Isabella Morales'],
    meetingSchedule: 'Every 2nd Wednesday, 9:00 AM'
  },
  {
    id: 'com-010',
    name: 'Committee on Business & Trade',
    description: 'Promotes business development, trade facilitation, and economic growth policies.',
    chairperson: 'Hon. Miguel Santos',
    members: ['Hon. Miguel Santos', 'Hon. Eduardo Ramos', 'Hon. Grace Mendoza-Silva'],
    meetingSchedule: 'Every 3rd Thursday, 2:00 PM'
  },
  {
    id: 'com-011',
    name: 'Committee on Youth & Sports',
    description: 'Develops youth programs, sports facilities, and recreational activities.',
    chairperson: 'Hon. Patricia Gonzalez',
    members: ['Hon. Patricia Gonzalez', 'Hon. Benjamin Cruz', 'Hon. Carmen Villanueva'],
    meetingSchedule: 'Every 4th Friday, 10:00 AM'
  },
  {
    id: 'com-012',
    name: 'Committee on Women & Children',
    description: 'Advocates for women and children rights, protection programs, and gender equality.',
    chairperson: 'Hon. Carmen Villanueva',
    members: ['Hon. Carmen Villanueva', 'Hon. Angela Reyes-Dela Cruz', 'Hon. Isabella Morales'],
    meetingSchedule: 'Every 1st Friday, 9:00 AM'
  },
  {
    id: 'com-013',
    name: 'Committee on Agriculture',
    description: 'Supports agricultural development, farmers assistance, and food security programs.',
    chairperson: 'Hon. Eduardo Ramos',
    members: ['Hon. Eduardo Ramos', 'Hon. Luisa Garcia-Torres', 'Hon. Francisco Navarro'],
    meetingSchedule: 'Every 4th Wednesday, 3:00 PM'
  },
  {
    id: 'com-014',
    name: 'Committee on Tourism',
    description: 'Promotes tourism development, cultural preservation, and destination marketing.',
    chairperson: 'Hon. Luisa Garcia-Torres',
    members: ['Hon. Luisa Garcia-Torres', 'Hon. Patricia Gonzalez', 'Hon. Grace Mendoza-Silva'],
    meetingSchedule: 'Every 2nd Tuesday, 1:00 PM'
  },
  {
    id: 'com-015',
    name: 'Committee on Public Safety',
    description: 'Coordinates disaster preparedness, emergency response, and public safety protocols.',
    chairperson: 'Hon. Benjamin Cruz',
    members: ['Hon. Benjamin Cruz', 'Hon. Jose Luis Fernandez', 'Hon. Francisco Navarro'],
    meetingSchedule: 'Every 3rd Friday, 11:00 AM'
  },
  {
    id: 'com-016',
    name: 'Committee on Rules and Privileges',
    description: 'Manages legislative procedures, session protocols, and member privileges.',
    chairperson: 'Hon. Maria Teresa Santos-Cruz',
    members: ['Hon. Maria Teresa Santos-Cruz', 'Hon. Roberto Martinez', 'Hon. Angela Reyes-Dela Cruz'],
    meetingSchedule: 'As needed'
  }
];

export const getCommitteeById = (id: string): Committee | undefined => {
  return committees.find(committee => committee.id === id);
};

export const getCommitteesByChairperson = (chairperson: string): Committee[] => {
  return committees.filter(committee => committee.chairperson === chairperson);
};