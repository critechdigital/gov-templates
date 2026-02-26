import { useState } from 'react';
import { Clock, QrCode, ChevronLeft, ChevronRight } from 'lucide-react';
import { services, departments } from '../data/mockData';
import { format, addDays, startOfWeek, addWeeks, isSameDay } from 'date-fns';

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [appointmentData, setAppointmentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    purpose: ''
  });

  const availableServices = services.filter(service => 
    ['Birth Certificate', 'Marriage Certificate', 'Building Permit', 'Health Certificate', 'Senior Citizen ID'].includes(service.name)
  );

  const getOfficesForService = (serviceName: string) => {
    const service = services.find(s => s.name === serviceName);
    if (!service) return [];
    return departments.filter(dept => dept.id === service.department);
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
  ];

  const getWeekDays = (startDate: Date) => {
    const start = startOfWeek(startDate);
    return Array.from({ length: 5 }, (_, i) => addDays(start, i + 1)); // Monday to Friday
  };

  const weekDays = getWeekDays(currentWeek);

  const handleInputChange = (field: string, value: string) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }));
  };

  const generateReference = () => {
    const prefix = selectedOffice.split(' ')[0].substring(0, 2).toUpperCase();
    const date = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${date}-${random}`;
  };

  const handleSubmit = () => {
    setStep(5);
  };

  const resetForm = () => {
    setStep(1);
    setSelectedService('');
    setSelectedOffice('');
    setSelectedDate(null);
    setSelectedTime('');
    setAppointmentData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      purpose: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Book an Appointment</h1>
        <p className="text-gray-600 text-lg">
          Schedule your visit to government offices. Follow the steps below to book your appointment.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                stepNum === step 
                  ? 'bg-[#0038A8] text-white' 
                  : stepNum < step 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
              }`}>
                {stepNum < step ? '✓' : stepNum}
              </div>
              {stepNum < 5 && (
                <div className={`w-12 h-1 mx-2 ${stepNum < step ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Service</span>
          <span>Office</span>
          <span>Date & Time</span>
          <span>Details</span>
          <span>Confirmation</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-md">
        {step === 1 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Service</h2>
            <p className="text-gray-600 mb-6">Choose the service you need.</p>
            
            <div className="space-y-3">
              {availableServices.map((service) => (
                <label key={service.id} className="block">
                  <input
                    type="radio"
                    name="service"
                    value={service.name}
                    checked={selectedService === service.name}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedService === service.name 
                      ? 'border-[#0038A8] bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800">{service.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.processingTime}
                          </span>
                          <span>{service.fee}</span>
                        </div>
                      </div>
                      <span className="bg-[#0038A8] text-white text-xs px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedService}
                className="px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Office</h2>
            <p className="text-gray-600 mb-6">Choose the office that handles your selected service.</p>
            
            <div className="space-y-3">
              {getOfficesForService(selectedService).map((office) => (
                <label key={office.id} className="block">
                  <input
                    type="radio"
                    name="office"
                    value={office.name}
                    checked={selectedOffice === office.name}
                    onChange={(e) => setSelectedOffice(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedOffice === office.name 
                      ? 'border-[#0038A8] bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <h3 className="font-semibold text-gray-800">{office.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">Head: {office.head}</p>
                    <p className="text-gray-600 text-sm">Contact: {office.contact}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!selectedOffice}
                className="px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Date & Time</h2>
            <p className="text-gray-600 mb-6">Choose your preferred appointment date and time.</p>
            
            {/* Calendar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Select Date</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentWeek(addWeeks(currentWeek, -1))}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="font-medium text-gray-700">
                    {format(weekDays[0], 'MMM dd')} - {format(weekDays[4], 'MMM dd, yyyy')}
                  </span>
                  <button
                    onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm font-semibold text-gray-600 mb-2">{day}</div>
                    <button
                      onClick={() => setSelectedDate(weekDays[index])}
                      className={`w-full p-3 rounded-lg transition-all ${
                        selectedDate && isSameDay(selectedDate, weekDays[index])
                          ? 'bg-[#0038A8] text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {format(weekDays[index], 'd')}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Select Time</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-[#0038A8] text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!selectedDate || !selectedTime}
                className="px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Details</h2>
            <p className="text-gray-600 mb-6">Please provide your contact information and purpose of visit.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={appointmentData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={appointmentData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={appointmentData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={appointmentData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Visit (Optional)</label>
              <textarea
                value={appointmentData.purpose}
                onChange={(e) => handleInputChange('purpose', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0038A8] focus:border-transparent"
                placeholder="Brief description of your purpose..."
              ></textarea>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!appointmentData.firstName || !appointmentData.lastName || !appointmentData.email || !appointmentData.phone}
                className="px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Submit Appointment
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="p-6 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Appointment Confirmed!</h2>
              <p className="text-gray-600">Your appointment has been successfully booked.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Appointment Details</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Reference:</span> {generateReference()}</p>
                    <p><span className="font-medium">Service:</span> {selectedService}</p>
                    <p><span className="font-medium">Office:</span> {selectedOffice}</p>
                    <p><span className="font-medium">Date:</span> {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}</p>
                    <p><span className="font-medium">Time:</span> {selectedTime}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Name:</span> {appointmentData.firstName} {appointmentData.lastName}</p>
                    <p><span className="font-medium">Email:</span> {appointmentData.email}</p>
                    <p><span className="font-medium">Phone:</span> {appointmentData.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 p-4 bg-blue-50 rounded-lg mb-6">
              <QrCode className="h-8 w-8 text-[#0038A8]" />
              <div className="text-left">
                <p className="font-semibold text-[#0038A8]">QR Code for Check-in</p>
                <p className="text-sm text-gray-600">Show this QR code when you arrive at the office</p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 bg-[#0038A8] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Another Appointment
              </button>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Reminders</h4>
              <ul className="text-sm text-yellow-700 text-left space-y-1">
                <li>• Please arrive 15 minutes before your scheduled time</li>
                <li>• Bring all required documents for your service</li>
                <li>• Have your QR code ready for check-in</li>
                <li>• Contact us if you need to reschedule or cancel</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;