import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  FileText, 
  Download, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  bidOpportunities, 
  formatCurrency, 
  formatDate, 
  getDaysUntilDeadline, 
  getStatusColor 
} from '../data/mockData';

export default function BidDetail() {
  const { id } = useParams<{ id: string }>();
  const bid = bidOpportunities.find(b => b.id === id);

  if (!bid) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Bid Opportunity Not Found</h1>
        <p className="text-gray-600 mb-6">The requested bid opportunity could not be found.</p>
        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 bg-[#0038A8] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Opportunities
        </Link>
      </div>
    );
  }

  const daysRemaining = getDaysUntilDeadline(bid.submissionDeadline);
  const isUrgent = daysRemaining <= 3;
  const isActive = bid.status === 'Open';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-[#0038A8]">Home</Link>
        <span>/</span>
        <Link to="/opportunities" className="hover:text-[#0038A8]">Bid Opportunities</Link>
        <span>/</span>
        <span className="text-gray-900">{bid.referenceNumber}</span>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{bid.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-medium">Reference: {bid.referenceNumber}</span>
              <span>•</span>
              <span>Category: {bid.category}</span>
              <span>•</span>
              <span>Mode: {bid.procurementMode}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bid.status)}`}>
            {bid.status}
          </span>
        </div>

        {isActive && (
          <div className={`p-4 rounded-lg border-l-4 ${
            isUrgent 
              ? 'bg-red-50 border-red-400' 
              : 'bg-orange-50 border-orange-400'
          }`}>
            <div className="flex items-center gap-2">
              <Clock className={`w-5 h-5 ${isUrgent ? 'text-red-600' : 'text-orange-600'}`} />
              <span className={`font-medium ${isUrgent ? 'text-red-900' : 'text-orange-900'}`}>
                {daysRemaining > 0 
                  ? `${daysRemaining} day${daysRemaining > 1 ? 's' : ''} remaining until submission deadline`
                  : 'Submission deadline has passed'
                }
              </span>
            </div>
            <p className={`text-sm mt-1 ${isUrgent ? 'text-red-800' : 'text-orange-800'}`}>
              Deadline: {formatDate(bid.submissionDeadline)}
            </p>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Description */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {bid.description || 'Detailed project description will be provided in the bid documents.'}
            </p>
            {bid.scopeOfWork && (
              <>
                <h3 className="font-medium text-gray-900 mb-2">Scope of Work</h3>
                <p className="text-gray-700 leading-relaxed">{bid.scopeOfWork}</p>
              </>
            )}
          </div>

          {/* Timeline */}
          {bid.timeline && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Procurement Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Bid Posting</span>
                      <span className="text-sm text-gray-600">{formatDate(bid.timeline.posting)}</span>
                    </div>
                  </div>
                </div>
                
                {bid.timeline.preBid && (
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      new Date() > bid.timeline.preBid ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">Pre-Bid Conference</span>
                        <span className="text-sm text-gray-600">{formatDate(bid.timeline.preBid)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    new Date() > bid.timeline.submission ? 'bg-green-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Submission Deadline</span>
                      <span className="text-sm text-gray-600">{formatDate(bid.timeline.submission)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Bid Opening</span>
                      <span className="text-sm text-gray-600">{formatDate(bid.timeline.opening)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Evaluation</span>
                      <span className="text-sm text-gray-600">{formatDate(bid.timeline.evaluation)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Contract Award</span>
                      <span className="text-sm text-gray-600">{formatDate(bid.timeline.award)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Eligibility Requirements */}
          {bid.eligibilityRequirements && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Requirements</h2>
              <ul className="space-y-3">
                {bid.eligibilityRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Required Documents */}
          {bid.requiredDocuments && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h2>
              <ul className="space-y-3">
                {bid.requiredDocuments.map((document, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Approved Budget for Contract (ABC)</div>
                  <div className="text-lg font-bold text-gray-900">
                    {formatCurrency(bid.approvedBudget)}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-600">Submission Deadline</div>
                  <div className="font-semibold text-gray-900">
                    {formatDate(bid.submissionDeadline)}
                  </div>
                </div>
              </div>

              {bid.preBidDate && (
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-600">Pre-Bid Conference</div>
                    <div className="font-semibold text-gray-900">
                      {formatDate(bid.preBidDate)}
                    </div>
                  </div>
                </div>
              )}

              {bid.fundingSource && (
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-600">Funding Source</div>
                    <div className="font-semibold text-gray-900">{bid.fundingSource}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Download Documents */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Bid Documents</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left">
                <Download className="w-5 h-5 text-[#0038A8]" />
                <div>
                  <div className="font-medium text-gray-900">Technical Specifications</div>
                  <div className="text-sm text-gray-600">PDF, 2.4 MB</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left">
                <Download className="w-5 h-5 text-[#0038A8]" />
                <div>
                  <div className="font-medium text-gray-900">Bid Data Sheet</div>
                  <div className="text-sm text-gray-600">PDF, 890 KB</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left">
                <Download className="w-5 h-5 text-[#0038A8]" />
                <div>
                  <div className="font-medium text-gray-900">General Conditions of Contract</div>
                  <div className="text-sm text-gray-600">PDF, 1.2 MB</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left">
                <Download className="w-5 h-5 text-[#0038A8]" />
                <div>
                  <div className="font-medium text-gray-900">Bill of Quantities</div>
                  <div className="text-sm text-gray-600">Excel, 456 KB</div>
                </div>
              </button>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Download Notice</p>
                  <p>Please ensure you have the latest version of all bid documents before submission.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-2">BAC Secretariat</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">(044) 662-1109</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">bac@bulacan.gov.ph</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-600 mt-0.5" />
                    <span className="text-sm">Provincial Capitol Compound<br />Malolos City, Bulacan</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2">Office Hours</div>
                <div className="text-sm text-gray-900">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 8:00 AM - 12:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          {isActive && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/supplier-registration"
                  className="w-full bg-[#0038A8] text-white py-2 px-4 rounded-md text-center font-medium hover:bg-blue-700 transition-colors block"
                >
                  Register as Supplier
                </Link>
                <button className="w-full border border-[#0038A8] text-[#0038A8] py-2 px-4 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Set Reminder
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  Share Opportunity
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-start">
        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 text-[#0038A8] hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Opportunities
        </Link>
      </div>
    </div>
  );
}