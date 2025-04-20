import React from 'react';

interface LinkProps {
  to: string;
  label: string;
  scrolled: boolean;
}

export const Link: React.FC<LinkProps> = ({ to, label, scrolled }) => {
  return (
    <li>
      <a 
        href={`#${to}`}
        className={`relative group transition-colors duration-300 ${
          scrolled ? 'text-gray-700 hover:text-gold-600' : 'text-white hover:text-gold-300'
        }`}
      >
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
};

export const BookButton: React.FC = () => {
  return (
    <a 
      href="#booking" 
      className="inline-block px-6 py-3 bg-gold-500 text-white font-medium rounded hover:bg-gold-600 transition-colors duration-300 shadow-md hover:shadow-lg"
    >
      Book Appointment
    </a>
  );
};