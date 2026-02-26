import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, HelpCircle, Send, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [helpForm, setHelpForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = [
    {
      name: 'Business Permits and Licensing Office',
      head: 'Mrs. Maria Santos',
      phone: '(044) 123-4567 ext. 201',
      email: 'business@meycauayan.gov.ph',
      location: 'Ground Floor, City Hall',
      services: ['Business Permits', 'Renewal Applications', 'License Verifications'],
    },
    {
      name: 'Building Permits Office',
      head: 'Engr. Roberto Cruz',
      phone: '(044) 123-4567 ext. 205',
      email: 'building@meycauayan.gov.ph',
      location: '2nd Floor, City Hall',
      services: ['Building Permits', 'Construction Permits', 'Occupancy Certificates'],
    },
    {
      name: 'City Planning Office',
      head: 'Arch. Anna Diaz',
      phone: '(044) 123-4567 ext. 210',
      email: 'planning@meycauayan.gov.ph',
      location: '3rd Floor, City Hall',
      services: ['Zoning Clearance', 'Locational Clearance', 'Urban Planning'],
    },
    {
      name: 'City Health Office',
      head: 'Dr. Carlos Lopez',
      phone: '(044) 123-4567 ext. 220',
      email: 'health@meycauayan.gov.ph',
      location: 'Health Building, City Complex',
      services: ['Sanitary Permits', 'Health Certificates', 'Food Safety Clearance'],
    },
    {
      name: 'City Treasurer\'s Office',
      head: 'Ms. Lisa Fernandez',
      phone: '(044) 123-4567 ext. 230',
      email: 'treasury@meycauayan.gov.ph',
      location: 'Ground Floor, City Hall',
      services: ['Payment Processing', 'Fee Collection', 'Tax Payments'],
    },
  ];

  const faqs = [
    {
      category: 'Business Permits',
      questions: [
        {
          question: 'How long does it take to process a new business permit?',
          answer: 'Processing time for new business permits is typically 7-10 working days, provided all required documents are complete and compliant. The timeline may extend if additional requirements or inspections are needed.',
        },
        {
          question: 'When is the deadline for business permit renewal?',
          answer: 'Business permits must be renewed annually by March 31st. Late renewals after this date will incur a 25% penalty fee in addition to the regular permit fee.',
        },
        {
          question: 'Can I operate my business while my permit application is being processed?',
          answer: 'No, you cannot operate your business without a valid permit. However, you may apply for a temporary permit while your main application is being processed, subject to compliance with basic requirements.',
        },
        {
          question: 'What happens if my business permit application is denied?',
          answer: 'If denied, you will receive a notice explaining the reasons. You can address the issues and resubmit your application. Common reasons include incomplete documents, zoning violations, or non-compliance with safety requirements.',
        },
      ],
    },
    {
      category: 'Building Permits',
      questions: [
        {
          question: 'Do I need an architect for my building permit application?',
          answer: 'Yes, architectural plans signed and sealed by a licensed architect are required for all building permit applications, regardless of size. This ensures compliance with building codes and safety standards.',
        },
        {
          question: 'How much does a building permit cost?',
          answer: 'Building permit fees are calculated based on floor area (₱12-25 per sq.m. depending on building type) plus 0.2-0.5% of the estimated construction cost, with additional review and inspection fees.',
        },
        {
          question: 'Can I start construction before getting the building permit?',
          answer: 'No, construction without a permit is illegal and subject to penalties including a ₱10,000 fine and stop-work order. You must obtain the permit before any construction activities begin.',
        },
        {
          question: 'How long is a building permit valid?',
          answer: 'Building permits are valid for 2 years from the date of issuance. If construction is not completed within this period, you may apply for an extension subject to plan review and additional fees.',
        },
      ],
    },
    {
      category: 'General',
      questions: [
        {
          question: 'Can I track my application online?',
          answer: 'Yes, you can track your application status using our online tracking system. Simply enter your tracking number or applicant name to view real-time status updates.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash and checks at our office, payments at authorized centers (SM, Bayad Centers), bank payments (BDO, BPI, Metrobank), and online payments via GCash, PayMaya, and online banking.',
        },
        {
          question: 'Are there discounts for senior citizens and PWDs?',
          answer: 'Yes, senior citizens and persons with disabilities (PWDs) are entitled to discounts as provided by law. Please present valid IDs when applying for permits.',
        },
        {
          question: 'What should I do if I lose my permit?',
          answer: 'You can request a certified true copy of your permit from our office. Bring a valid ID, affidavit of loss, and pay the prescribed fee for document reproduction.',
        },
      ],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setHelpForm({
      ...helpForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Your message has been submitted successfully! We will get back to you within 24 hours.');
      setHelpForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact & Help</h1>
        <p className="text-gray-600 mb-8">
          Get in touch with us or find answers to frequently asked questions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Contact Info */}
            <div className="bg-[#0038A8] text-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">City of Meycauayan</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>MacArthur Highway, Meycauayan, Bulacan 3020</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>(044) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>permits@meycauayan.gov.ph</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <div>
                    <div>Monday - Friday: 7:00 AM - 5:00 PM</div>
                    <div>Saturday: 8:00 AM - 12:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Directory */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Office Directory</h2>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{office.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">Head: {office.head}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Phone size={14} />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail size={14} />
                            <span>{office.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={14} />
                            <span>{office.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <p className="text-sm font-medium text-gray-700 mb-1">Services:</p>
                        <ul className="text-xs text-gray-600 space-y-0.5">
                          {office.services.map((service, idx) => (
                            <li key={idx}>• {service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Desk Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Help Desk</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={helpForm.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={helpForm.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={helpForm.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={helpForm.category}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="business-permit">Business Permits</option>
                        <option value="building-permit">Building Permits</option>
                        <option value="clearances">Clearances & Certificates</option>
                        <option value="application-status">Application Status</option>
                        <option value="payment">Payment Issues</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={helpForm.subject}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={helpForm.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0038A8]"
                      placeholder="Please provide details about your inquiry or issue..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium ${
                      isSubmitting
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-[#0038A8] text-white hover:bg-blue-700'
                    }`}
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-semibold text-[#0038A8] mb-3 flex items-center space-x-2">
                    <HelpCircle size={20} />
                    <span>{category.category}</span>
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Tips */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <User className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Quick Tips</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Have your tracking number ready when calling</li>
                    <li>• Check our requirements page before visiting</li>
                    <li>• Bring original documents for verification</li>
                    <li>• Visit early in the morning to avoid crowds</li>
                    <li>• Keep copies of all submitted documents</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Emergency Contacts</h4>
                  <div className="text-sm text-red-800 space-y-1">
                    <div>Fire Emergency: (044) 123-4567 ext. 911</div>
                    <div>Medical Emergency: (044) 123-4567 ext. 912</div>
                    <div>After-hours Hotline: 0917-123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;