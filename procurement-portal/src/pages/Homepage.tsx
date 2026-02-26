import { Link } from 'react-router-dom';
import { Calendar, Clock, Award, FileText, ExternalLink, Users, TrendingUp } from 'lucide-react';
import { bidOpportunities, awardedContracts, formatCurrency, formatDate, getDaysUntilDeadline, getStatusColor } from '../data/mockData';

export default function Homepage() {
  const activeBids = bidOpportunities.filter(bid => bid.status === 'Open');
  const recentAwards = awardedContracts.slice(0, 5);
  
  const totalActiveBudget = activeBids.reduce((sum, bid) => sum + bid.approvedBudget, 0);
  const totalAwardedAmount = recentAwards.reduce((sum, contract) => sum + contract.contractAmount, 0);

  const upcomingDeadlines = activeBids
    .filter(bid => getDaysUntilDeadline(bid.submissionDeadline) <= 7)
    .sort((a, b) => getDaysUntilDeadline(a.submissionDeadline) - getDaysUntilDeadline(b.submissionDeadline));

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#161B22] to-[#0D1117] text-[#E6EDF3] rounded-none p-8 terminal-glow terminal-border">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-mono font-bold mb-4 text-[#4ADE80]">
            >_ WELCOME TO BULACAN_PROCUREMENT_TERMINAL
          </h1>
          <p className="text-lg mb-6 text-[#8B949E]">
            [SYSTEM_MESSAGE] Gateway to transparent government procurement initialized. 
            Access bidding opportunities, contract tracking, and procurement data 
            in compliance with RA 9184 and RA 12009 protocols.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/opportunities"
              className="bg-transparent border-2 border-[#4ADE80] text-[#4ADE80] px-6 py-3 rounded-none font-mono font-semibold hover:bg-[#4ADE80] hover:text-[#0D1117] transition-all"
            >
              $ ./view_opportunities.sh
            </Link>
            <Link
              to="/supplier-registration"
              className="border-2 border-[#22D3EE] text-[#22D3EE] px-6 py-3 rounded-none font-mono font-semibold hover:bg-[#22D3EE] hover:text-[#0D1117] transition-all"
            >
              $ ./register_supplier.sh
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#161B22] p-6 rounded-none border border-[#30363D] terminal-glow terminal-border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#4ADE80]/20 rounded-none border border-[#4ADE80]">
                <FileText className="w-6 h-6 text-[#4ADE80]" />
              </div>
              <div>
                <h3 className="text-2xl font-mono font-bold text-[#E6EDF3]">{activeBids.length}</h3>
                <p className="text-sm text-[#8B949E] font-mono">ACTIVE_OPPORTUNITIES</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161B22] p-6 rounded-none border border-[#30363D] terminal-glow terminal-border-cyan">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#22D3EE]/20 rounded-none border border-[#22D3EE]">
                <TrendingUp className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-[#E6EDF3]">{formatCurrency(totalActiveBudget)}</h3>
                <p className="text-sm text-[#8B949E] font-mono">ACTIVE_BUDGET</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161B22] p-6 rounded-none border border-[#30363D] terminal-glow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FBBF24]/20 rounded-none border border-[#FBBF24]">
                <Award className="w-6 h-6 text-[#FBBF24]" />
              </div>
              <div>
                <h3 className="text-2xl font-mono font-bold text-[#E6EDF3]">{awardedContracts.length}</h3>
                <p className="text-sm text-[#8B949E] font-mono">CONTRACTS_AWARDED</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161B22] p-6 rounded-none border border-[#30363D] terminal-glow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#EF4444]/20 rounded-none border border-[#EF4444]">
                <Users className="w-6 h-6 text-[#EF4444]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold text-[#E6EDF3]">{formatCurrency(totalAwardedAmount)}</h3>
                <p className="text-sm text-[#8B949E] font-mono">TOTAL_AWARDED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Active Opportunities */}
        <section className="bg-[#161B22] rounded-none border border-[#30363D] terminal-glow terminal-border">
          <div className="p-6 border-b border-[#30363D]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-mono font-bold text-[#E6EDF3] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#4ADE80]" />
                [ACTIVE_BID_OPPORTUNITIES]
              </h2>
              <Link
                to="/opportunities"
                className="text-[#4ADE80] hover:text-[#22D3EE] text-sm font-mono font-medium flex items-center gap-1 transition-colors"
              >
                ./view_all.sh
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activeBids.slice(0, 5).map((bid) => (
                <div key={bid.id} className="border border-[#30363D] rounded-none p-4 hover:border-[#4ADE80]/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#E6EDF3] text-sm">{bid.title}</h3>
                    <span className={`px-2 py-1 rounded-none text-xs font-mono font-medium status-badge ${getStatusColor(bid.status)}`}>
                      {bid.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-[#8B949E]">
                    <div className="font-mono">
                      <span className="text-[#4ADE80]">REF:</span> {bid.referenceNumber}
                    </div>
                    <div className="font-mono">
                      <span className="text-[#4ADE80]">BUDGET:</span> {formatCurrency(bid.approvedBudget)}
                    </div>
                    <div className="font-mono">
                      <span className="text-[#4ADE80]">CATEGORY:</span> {bid.category}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#FBBF24]" />
                      <span className="font-mono text-[#FBBF24]">
                        {getDaysUntilDeadline(bid.submissionDeadline)}d LEFT
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Link
                      to={`/opportunities/${bid.id}`}
                      className="text-[#22D3EE] hover:text-[#4ADE80] text-sm font-mono transition-colors"
                    >
                      → ./view_details.sh
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Awarded */}
        <section className="bg-[#161B22] rounded-none border border-[#30363D] terminal-glow terminal-border-cyan">
          <div className="p-6 border-b border-[#30363D]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-mono font-bold text-[#E6EDF3] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#22D3EE]" />
                [RECENTLY_AWARDED_CONTRACTS]
              </h2>
              <Link
                to="/awarded-contracts"
                className="text-[#22D3EE] hover:text-[#4ADE80] text-sm font-mono font-medium flex items-center gap-1 transition-colors"
              >
                ./list_awards.sh
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentAwards.map((contract) => (
                <div key={contract.id} className="border border-[#30363D] rounded-none p-4 hover:border-[#22D3EE]/50 transition-colors">
                  <h3 className="font-semibold text-[#E6EDF3] text-sm mb-2">{contract.projectTitle}</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-[#8B949E]">
                    <div className="font-mono">
                      <span className="text-[#22D3EE]">CONTRACTOR:</span> {contract.contractor}
                    </div>
                    <div className="font-mono">
                      <span className="text-[#22D3EE]">AMOUNT:</span> {formatCurrency(contract.contractAmount)}
                      <span className="text-xs text-[#8B949E] ml-1">
                        (ABC: {formatCurrency(contract.approvedBudget)})
                      </span>
                    </div>
                    <div className="font-mono">
                      <span className="text-[#22D3EE]">DATE_AWARDED:</span> {formatDate(contract.dateAwarded)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Urgent Deadlines */}
      {upcomingDeadlines.length > 0 && (
        <section className="bg-[#161B22] border border-[#EF4444] rounded-none p-6 terminal-glow">
          <h2 className="text-xl font-mono font-bold text-[#EF4444] mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            [!URGENT] DEADLINES_THIS_WEEK
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingDeadlines.map((bid) => (
              <div key={bid.id} className="bg-[#0D1117] border border-[#EF4444]/50 rounded-none p-4">
                <h3 className="font-semibold text-[#E6EDF3] text-sm mb-2">{bid.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8B949E] font-mono">DEADLINE: {formatDate(bid.submissionDeadline)}</span>
                  <span className="bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444] px-2 py-1 rounded-none text-xs font-mono status-badge">
                    {getDaysUntilDeadline(bid.submissionDeadline)}D_LEFT
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BAC Announcements */}
      <section className="bg-[#161B22] rounded-none border border-[#30363D] terminal-glow">
        <div className="p-6 border-b border-[#30363D]">
          <h2 className="text-xl font-mono font-bold text-[#E6EDF3] flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#FBBF24]" />
            [BAC_ANNOUNCEMENTS] & PROCUREMENT_CALENDAR
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="bg-[#0D1117] border border-[#22D3EE] rounded-none p-4">
              <h3 className="font-mono font-semibold text-[#22D3EE] mb-2">[PRE_BIDDING_CONFERENCE_SCHEDULE]</h3>
              <ul className="space-y-2 text-sm text-[#8B949E] font-mono">
                <li>• 2025-03-03 : Multi-Purpose Building Construction (PGB-2025-002)</li>
                <li>• 2025-03-08 : Office Supplies Procurement (PGB-2025-001)</li>
                <li>• 2025-03-15 : Medical Equipment Procurement (PGB-2025-004)</li>
              </ul>
            </div>
            <div className="bg-[#0D1117] border border-[#4ADE80] rounded-none p-4">
              <h3 className="font-mono font-semibold text-[#4ADE80] mb-2">[NOTICE_TO_SUPPLIERS]</h3>
              <p className="text-sm text-[#8B949E]">
                All suppliers are required to update their PhilGEPS registration and ensure 
                compliance with the latest GPPB guidelines. New supplier orientation sessions 
                are scheduled every Friday at the Provincial Capitol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[#161B22] rounded-none border border-[#30363D] terminal-glow">
        <div className="p-6 border-b border-[#30363D]">
          <h2 className="text-xl font-mono font-bold text-[#E6EDF3]">[QUICK_LINKS] & RESOURCES</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-mono font-semibold text-[#4ADE80] mb-3">[EXTERNAL_RESOURCES]</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://philgeps.gov.ph" 
                    target="_blank" 
                    className="text-[#22D3EE] hover:text-[#4ADE80] font-mono flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    → philgeps.gov.ph
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[#22D3EE] hover:text-[#4ADE80] font-mono flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    → dbm_procurement_manual
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[#22D3EE] hover:text-[#4ADE80] font-mono flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    → gppb_resolutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono font-semibold text-[#4ADE80] mb-3">[LEGAL_FRAMEWORK]</h3>
              <ul className="space-y-2 text-sm text-[#8B949E] font-mono">
                <li>• RA_9184 - Government Procurement Reform Act</li>
                <li>• RA_12009 - Amendment to RA 9184</li>
                <li>• IRR-A of RA 9184</li>
                <li>• GPPB Guidelines and Resolutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono font-semibold text-[#4ADE80] mb-3">[CONTACT_INFO]</h3>
              <ul className="space-y-2 text-sm text-[#8B949E] font-mono">
                <li>BAC_Secretariat: (044) 662-1109</li>
                <li>Provincial_Engineering: (044) 662-1104</li>
                <li>General_Services: (044) 662-1110</li>
                <li>Email: bac@bulacan.gov.ph</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}