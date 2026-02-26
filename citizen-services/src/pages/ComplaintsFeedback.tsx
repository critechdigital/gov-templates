import { useState } from 'react';
import { MessageSquare, Search, Camera, Send, CheckCircle, Clock, AlertTriangle, Phone } from 'lucide-react';
import { complaints } from '../data/mockData';

const ComplaintsFeedback = () => {
  const [activeTab, setActiveTab] = useState<'submit' | 'track'>('submit');
  const [formData, setFormData] = useState({
    type: '',
    category: '',
    title: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    location: ''
  });
  const [trackingNumber, setTrackingNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [generatedReference, setGeneratedReference] = useState('');

  const categories = [
    'Infrastructure',
    'Health',
    'Peace & Order',
    'Sanitation',
    'Others'
  ];

  const types = [
    { value: 'complaint', label: 'Complaint', icon: AlertTriangle, color: 'text-red-600' },
    { value: 'suggestion', label: 'Suggestion', icon: MessageSquare, color: 'text-blue-600' },
    { value: 'commendation', label: 'Commendation', icon: CheckCircle, color: 'text-green-600' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Received': return 'bg-blue-100 text-blue-800';
      case 'Investigating': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const generateReference = () => {
    const categoryPrefix = formData.category.substring(0, 3).toUpperCase();
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${categoryPrefix}-${year}-${random}`;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = generateReference();
    setGeneratedReference(reference);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      type: '',
      category: '',
      title: '',
      description: '',
      name: '',
      email: '',
      phone: '',
      location: ''
    });
    setSubmitted(false);
    setGeneratedReference('');
  };



  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Complaints and Feedback</h1>
        <p className="text-gray-600 text-lg">
          Submit your complaints, suggestions, or commendations to help us improve our services. 
          You can also track the status of your submitted feedback.
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('submit')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'submit'
                  ? 'border-[#0038A8] text-[#0038A8]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Send className="h-5 w-5 mr-2 inline" />
              Submit Feedback
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'track'
                  ? 'border-[#0038A8] text-[#0038A8]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Search className="h-5 w-5 mr-2 inline" />
              Track Feedback
            </button>
          </nav>
        </div>

        {/* Submit Tab */}
        {activeTab === 'submit' && (
          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Type of Feedback</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {types.map((type) => {
                      const Icon = type.icon;
                      return (
                        <label key={type.value} className="relative">
                          <input
                            type="radio"
                            name="type"
                            value={type.value}
                            checked={formData.type === type.value}
                            onChange={(e) => handleInputChange('type', e.target.value)}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all text-center ${
                            formData.type === type.value
                              ? 'border-[#0038A8] bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <Icon className={`h-8 w-8 mx-auto mb-2 ${type.color}`} />
                            <span className="font-semibold text-gray-800">{type.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject/Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="Brief description of your feedback"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="Please provide detailed information about your feedback..."
                    required
                  ></textarea>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location (if applicable)</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    placeholder="Street address, barangay, or landmark"
                  />
                </div>

                {/* Photo Upload Placeholder */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attach Photo (optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Click to upload photo or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Feedback Submitted Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your feedback. We have received your {formData.type} and will review it promptly.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6 max-w-md mx-auto">
                  <h4 className="font-semibold text-[#0038A8] mb-2">Reference Number</h4>
                  <p className="text-2xl font-mono font-bold text-gray-800">{generatedReference}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Save this reference number to track your feedback status
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
                  >
                    Submit Another Feedback
                  </button>
                  <button
                    onClick={() => setActiveTab('track')}
                    className="w-full sm:w-auto px-6 py-3 border border-[#0038A8] text-[#0038A8] rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Track This Feedback
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Track Tab */}
        {activeTab === 'track' && (
          <div className="p-6">
            <div className="max-w-md mx-auto mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter Reference Number</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  placeholder="e.g., INF-2024-001"
                />
                <button
                  onClick={() => {}}
                  className="px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Sample Results */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Feedback</h3>
              {complaints.slice(0, 5).map((complaint) => (
                <div key={complaint.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-gray-800">{complaint.reference}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(complaint.status)}`}>
                          {complaint.status}
                        </span>
                        <span className="bg-[#0038A8] text-white text-xs px-2 py-1 rounded">
                          {complaint.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{complaint.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{complaint.description}</p>
                      <div className="text-xs text-gray-500">
                        Submitted: {complaint.dateSubmitted} by {complaint.submitter}
                      </div>
                    </div>
                    <Clock className="h-5 w-5 text-gray-400 ml-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Rating Section */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-4">Rate Our Service</h3>
              <p className="text-green-700 mb-4">
                How satisfied are you with how we handled your feedback?
              </p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-2xl text-yellow-400 hover:text-yellow-500 transition-colors"
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-[#0038A8] mb-3">How We Process Feedback</h3>
          <ol className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="bg-[#0038A8] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
              <span>We receive and acknowledge your feedback within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#0038A8] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
              <span>Relevant department investigates the matter</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#0038A8] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
              <span>We provide updates and resolution within 7-14 working days</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#0038A8] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
              <span>Case is closed after resolution and your satisfaction</span>
            </li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-3">Need Immediate Assistance?</h3>
          <p className="text-yellow-700 mb-4">
            For urgent matters that require immediate attention, please contact us directly.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center text-yellow-700">
              <Phone className="h-4 w-4 mr-2" />
              Hotline: (044) 815-2300
            </p>
            <p className="flex items-center text-yellow-700">
              <MessageSquare className="h-4 w-4 mr-2" />
              Email: feedback@marilao.gov.ph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsFeedback;