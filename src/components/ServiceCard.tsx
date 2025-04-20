import React from 'react';
import { Service } from './Services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-102 flex flex-col h-full">
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-gold-600">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-gold-600 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        <span className="text-gold-600 font-medium">{service.price}</span>
        <a 
          href="#booking" 
          className="text-sm px-4 py-2 rounded-md bg-cream-100 text-gray-800 hover:bg-gold-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;