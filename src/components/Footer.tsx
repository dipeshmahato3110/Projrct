import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-gold-400">DM</span>salon
            </h3>
            <p className="text-gray-400 mb-6">
              Where beauty meets luxury. Our premium salon services are designed to make you look and feel your absolute best.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gold-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#stylists" className="text-gray-400 hover:text-gold-400 transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-gold-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-gold-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Hair Cutting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Hair Coloring</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Styling & Blowouts</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Facial Treatments</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Massage Therapy</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Nail Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-2 mb-4">
              <p>123 Street</p>
              <p>Kolkata, W.B., India</p>
              <p>Phone: (+91) 7029014262</p>
              <p>Email: info@DMsalon.com</p>
            </address>
            <div>
              <h5 className="text-sm font-medium mb-2">Hours</h5>
              <p className="text-gray-400 text-sm">Tuesday - Friday: 9am - 7pm</p>
              <p className="text-gray-400 text-sm">Saturday: 9am - 5pm</p>
              <p className="text-gray-400 text-sm">Sunday & Monday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DM Salon. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;