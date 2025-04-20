import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from './Navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Top bar with contact info */}
        <div className={`hidden md:flex justify-end gap-6 text-sm ${scrolled ? 'text-gray-700' : 'text-white'} mb-2`}>
          <a href="tel:+12345678900" className="flex items-center gap-1 hover:text-gold-600 transition-colors duration-200">
            <Phone size={14} />
            <span>(91) 7029014262</span>
          </a>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>123 Street, Kolkata, India</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>Tue-Sat: 9am-7pm</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-serif font-bold">
            <span className={`transition-colors duration-300 ${scrolled ? 'text-gold-600' : 'text-white'}`}>DM</span>
            <span className={`transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>salon</span>
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <Link to="home" label="Home" scrolled={scrolled} />
              <Link to="services" label="Services" scrolled={scrolled} />
              <Link to="stylists" label="Our Team" scrolled={scrolled} />
              <Link to="gallery" label="Gallery" scrolled={scrolled} />
              <Link to="testimonials" label="Testimonials" scrolled={scrolled} />
              <Link to="contact" label="Contact" scrolled={scrolled} />
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className={scrolled ? 'text-gray-800' : 'text-white'} /> : 
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col gap-4">
            <MobileLink to="home" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileLink to="services" label="Services" onClick={() => setIsMenuOpen(false)} />
            <MobileLink to="stylists" label="Our Team" onClick={() => setIsMenuOpen(false)} />
            <MobileLink to="gallery" label="Gallery" onClick={() => setIsMenuOpen(false)} />
            <MobileLink to="testimonials" label="Testimonials" onClick={() => setIsMenuOpen(false)} />
            <MobileLink to="contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
          </ul>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-700">
            <a href="tel:+12345678900" className="flex items-center gap-2">
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>123 Elegant Street, Beverly Hills</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Tue-Sat: 9am-7pm</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

interface MobileLinkProps {
  to: string;
  label: string;
  onClick: () => void;
}

const MobileLink: React.FC<MobileLinkProps> = ({ to, label, onClick }) => {
  return (
    <li>
      <a 
        href={`#${to}`}
        className="block py-2 text-gray-800 hover:text-gold-600 transition-colors duration-200 border-b border-gray-100"
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};

export default Header;