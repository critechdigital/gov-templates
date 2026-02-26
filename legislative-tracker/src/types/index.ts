export interface Ordinance {
  id: string;
  number: string;
  title: string;
  dateEnacted: string;
  author: string;
  category: OrdinanceCategory;
  status: OrdinanceStatus;
  fullText?: string;
  summary?: string;
  tags?: string[];
}

export interface Resolution {
  id: string;
  number: string;
  title: string;
  dateEnacted: string;
  author: string;
  type: ResolutionType;
  recipient?: string;
  fullText?: string;
  summary?: string;
  tags?: string[];
}

export interface PendingBill {
  id: string;
  title: string;
  author: string;
  committee: string;
  stage: LegislativeStage;
  dateFiled: string;
  abstract: string;
  tags?: string[];
}

export interface CouncilMember {
  id: string;
  name: string;
  position: string;
  district?: string;
  party?: string;
  term: string;
  committees: string[];
  photoUrl?: string;
  contact: {
    email?: string;
    phone?: string;
  };
  authoredOrdinances: string[];
  authoredResolutions: string[];
}

export interface Committee {
  id: string;
  name: string;
  description: string;
  chairperson: string;
  viceChair?: string;
  members: string[];
  meetingSchedule?: string;
}

export interface Session {
  id: string;
  date: string;
  type: SessionType;
  status: SessionStatus;
  agenda?: string[];
  minutes?: string;
  attendance?: string[];
}

export type OrdinanceCategory = 
  | 'Tax'
  | 'Traffic'
  | 'Health'
  | 'Environment'
  | 'Peace & Order'
  | 'Zoning'
  | 'Education'
  | 'Infrastructure'
  | 'Business'
  | 'Social Services';

export type OrdinanceStatus = 
  | 'Active'
  | 'Amended'
  | 'Repealed'
  | 'Under Review';

export type ResolutionType = 
  | 'Commendation'
  | 'Endorsement'
  | 'Request to National Agency'
  | 'Declaration'
  | 'Authorization'
  | 'Appreciation';

export type LegislativeStage = 
  | 'Committee Level'
  | '1st Reading'
  | '2nd Reading'
  | '3rd Reading'
  | 'Approved'
  | 'Vetoed';

export type SessionType = 
  | 'Regular'
  | 'Special';

export type SessionStatus = 
  | 'Scheduled'
  | 'Completed'
  | 'Cancelled';