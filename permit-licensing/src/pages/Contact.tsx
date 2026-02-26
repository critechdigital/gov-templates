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
    <div className="min-h-screen bg-[#FBFBFD] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extralight text-[#1D1D1F] mb-4">
            Contact & Help
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get in touch with us or find answers to frequently asked questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Contact Info */}
            <div className="bg-gradient-to-r from-[#0066CC] to-[#004499] text-white rounded-3xl p-8 lg:p-10">
              <h2 className="text-3xl font-light mb-8">City of Meycauayan</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <p className="text-lg">MacArthur Highway, Meycauayan, Bulacan 3020</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">(044) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">permits@meycauayan.gov.ph</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div className="text-lg leading-relaxed">
                    <div>Monday - Friday: 7:00 AM - 5:00 PM</div>
                    <div>Saturday: 8:00 AM - 12:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Directory */}
            <div>
              <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Office Directory</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white border border-[#E5E5E7] rounded-2xl p-6 hover:shadow-sm transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-[#1D1D1F] mb-2">{office.name}</h3>
                        <p className="text-gray-600 mb-4">Head: {office.head}</p>
                        <div className="space-y-3 text-gray-600">
                          <div className="flex items-center space-x-3">
                            <Phone size={16} />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail size={16} />
                            <span>{office.email}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin size={16} />
                            <span>{office.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8 lg:min-w-[200px]">
                        <p className="text-sm font-medium text-[#1D1D1F] mb-3">Services:</p>
                        <ul className="text-sm text-gray-600 space-y-2">
                          {office.services.map((service, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full"></div>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Desk Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-[#E5E5E7]/50 p-8 lg:p-10">
              <h2 className="text-2xl font-light text-[#1D1D1F] mb-6">Help Desk</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={helpForm.name}
                      onChange={handleInputChange}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={helpForm.email}
                      onChange={handleInputChange}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={helpForm.phone}
                      onChange={handleInputChange}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={helpForm.category}
                      onChange={handleInputChange}
                      className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all appearance-none bg-white"
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
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={helpForm.subject}
                    onChange={handleInputChange}
                    className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={helpForm.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border border-[#E5E5E7] rounded-2xl px-4 py-4 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all resize-none"
                    placeholder="Please provide details about your inquiry or issue..."
                    required
                  />
                </div>
                
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-sm ${
                      isSubmitting
                        ? 'bg-[#F5F5F7] text-gray-400 cursor-not-allowed'
                        : 'bg-[#0066CC] text-white hover:bg-[#004499]'
                    }`}
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-light text-[#1D1D1F] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-medium text-[#0066CC] mb-6 flex items-center space-x-3">
                    <HelpCircle size={20} />
                    <span>{category.category}</span>
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white border border-[#E5E5E7] rounded-2xl p-6">
                        <h4 className="font-medium text-[#1D1D1F] mb-3">{faq.question}</h4>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Tips */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <User className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-4">Quick Tips</h4>
                  <ul className="text-blue-800 space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Have your tracking number ready when calling</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Check our requirements page before visiting</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Bring original documents for verification</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Visit early in the morning to avoid crowds</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Keep copies of all submitted documents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="mt-6 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-medium text-red-900 mb-4">Emergency Contacts</h4>
                  <div className="text-red-800 space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>Fire Emergency: (044) 123-4567 ext. 911</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>Medical Emergency: (044) 123-4567 ext. 912</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>After-hours Hotline: 0917-123-4567</span>
                    </div>
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