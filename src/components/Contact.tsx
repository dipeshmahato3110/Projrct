import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Contact us for appointments, questions, or to learn more about our services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">(91) 7029014262</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600">info@DMsalon.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-600">123 Street, Kolkata, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-full">
                  <Clock className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hours</h3>
                  <p className="text-gray-600">Tuesday - Friday: 9am - 7pm</p>
                  <p className="text-gray-600">Saturday: 9am - 5pm</p>
                  <p className="text-gray-600">Sunday & Monday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-gold-100 p-3 rounded-full hover:bg-gold-200 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gold-600" />
                </a>
                <a 
                  href="#" 
                  className="bg-gold-100 p-3 rounded-full hover:bg-gold-200 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gold-600" />
                </a>
                <a 
                  href="#" 
                  className="bg-gold-100 p-3 rounded-full hover:bg-gold-200 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gold-600" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="contactName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contactSubject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="contactSubject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="contactMessage"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 h-32"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-block px-8 py-3 bg-gold-500 text-white font-medium rounded-md hover:bg-gold-600 transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;