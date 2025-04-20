import React from 'react';
import { Stylist } from './Stylists';

interface StylistCardProps {
  stylist: Stylist;
}

const StylistCard: React.FC<StylistCardProps> = ({ stylist }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Image container with overlay on hover */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={stylist.image} 
          alt={stylist.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <a 
              href="#booking" 
              className="inline-block w-full px-6 py-3 bg-gold-500 text-white font-medium rounded-md hover:bg-gold-600 transition-colors duration-300 text-center transform hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 group-hover:text-gold-600 transition-colors duration-300">
          {stylist.name}
        </h3>
        <p className="text-gold-600 font-medium mb-3">{stylist.role}</p>
        <p className="text-gray-600 text-sm mb-4">{stylist.bio}</p>
        <div className="flex flex-wrap gap-2">
          {stylist.specialties.map((specialty, index) => (
            <span 
              key={index} 
              className="text-xs bg-cream-100 text-gray-700 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-gold-100"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylistCard;