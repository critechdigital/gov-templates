export * from './ordinances';
export * from './resolutions';
export * from './pendingBills';
export * from './councilMembers';
export * from './committees';
export * from './sessions';

import { ordinances, getActiveOrdinances } from './ordinances';
import { resolutions } from './resolutions';
import { pendingBills } from './pendingBills';
import { councilMembers } from './councilMembers';
import { committees } from './committees';
import { getCompletedSessions, getUpcomingSessions } from './sessions';

// Summary statistics
export const getLegislativeStats = () => {
  return {
    totalOrdinances: ordinances.length,
    activeOrdinances: getActiveOrdinances().length,
    totalResolutions: resolutions.length,
    pendingBills: pendingBills.length,
    councilMembers: councilMembers.length,
    committees: committees.length,
    completedSessions: getCompletedSessions().length,
    upcomingSessions: getUpcomingSessions().length
  };
};

export const cityInfo = {
  name: 'City of San Jose del Monte, Bulacan',
  province: 'Bulacan',
  region: 'Central Luzon (Region III)',
  established: '1998',
  cityhood: 'March 30, 1998',
  classification: 'Component City',
  currentTerm: '2022-2025',
  website: 'www.sjdm.gov.ph',
  address: 'San Jose del Monte City Hall, Brgy. San Manuel, San Jose del Monte City, Bulacan',
  phone: '+63 (44) 760-5555',
  email: 'info@sjdm.gov.ph'
};