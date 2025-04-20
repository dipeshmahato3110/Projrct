import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    stylist: '',
    notes: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend service
    console.log(formData);
    setFormSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        stylist: '',
        notes: ''
      });
    }, 5000);
  };

  return (
    <section id="booking" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Book Your Appointment" 
          subtitle="Schedule your visit for a luxurious salon experience"
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Info section */}
            <div className="bg-gold-600 text-white p-8 md:w-1/3">
              <h3 className="text-xl font-semibold mb-6">Booking Information</h3>
              
              <div className="mb-8">
                <h4 className="text-gold-200 text-sm font-medium uppercase mb-2">Hours</h4>
                <p className="mb-1">Tuesday - Friday: 9am - 7pm</p>
                <p className="mb-1">Saturday: 9am - 5pm</p>
                <p>Sunday & Monday: Closed</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-gold-200 text-sm font-medium uppercase mb-2">Contact</h4>
                <p className="mb-1">(123) 456-7890</p>
                <p>info@luxesalon.com</p>
              </div>
              
              <div>
                <h4 className="text-gold-200 text-sm font-medium uppercase mb-2">Location</h4>
                <p>123 Elegant Street</p>
                <p>Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            {/* Form section */}
            <div className="p-8 md:w-2/3">
              {formSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-semibold mb-2">Booking Request Received</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for booking with LUXE salon. We'll confirm your appointment shortly via email or phone.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="haircut">Haircut</option>
                        <option value="color">Hair Color</option>
                        <option value="highlights">Highlights/Balayage</option>
                        <option value="styling">Blowout & Styling</option>
                        <option value="facial">Facial Treatment</option>
                        <option value="massage">Massage</option>
                        <option value="manicure">Manicure & Pedicure</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="stylist" className="block text-sm font-medium text-gray-700 mb-1">Preferred Stylist</label>
                      <select
                        id="stylist"
                        name="stylist"
                        value={formData.stylist}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        <option value="">No preference</option>
                        <option value="sophia">Sophia Martinez</option>
                        <option value="alexander">Alexander Kim</option>
                        <option value="isabella">Isabella Johnson</option>
                        <option value="james">James Wilson</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                        required
                      >
                        <option value="" disabled>Select a time</option>
                        <option value="9:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Special Requests or Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 h-32"
                    ></textarea>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-gold-500 text-white font-medium rounded-md hover:bg-gold-600 transition-colors duration-300 shadow-md"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;