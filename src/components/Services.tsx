import React from 'react';
import { Scissors, Droplet, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  category: 'hair' | 'color' | 'spa';
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'hair' | 'color' | 'spa'>('all');
  
  const services: Service[] = [
    {
      id: 1,
      title: "Women's Haircut",
      description: "Expert precision cut tailored to your face shape and lifestyle.",
      price: "$75+",
      icon: <Scissors className="w-6 h-6 text-gold-500" />,
      category: 'hair'
    },
    {
      id: 2,
      title: "Men's Haircut",
      description: "Precision cut with attention to detail and style recommendations.",
      price: "$55+",
      icon: <Scissors className="w-6 h-6 text-gold-500" />,
      category: 'hair'
    },
    {
      id: 3,
      title: "Blowout & Styling",
      description: "Professional blowdry and styling for any occasion.",
      price: "$65+",
      icon: <Scissors className="w-6 h-6 text-gold-500" />,
      category: 'hair'
    },
    {
      id: 4,
      title: "Full Color",
      description: "Rich, dimensional color applied by our expert colorists.",
      price: "$110+",
      icon: <Droplet className="w-6 h-6 text-gold-500" />,
      category: 'color'
    },
    {
      id: 5,
      title: "Highlights/Balayage",
      description: "Custom, hand-painted highlights for natural, sun-kissed dimension.",
      price: "$140+",
      icon: <Droplet className="w-6 h-6 text-gold-500" />,
      category: 'color'
    },
    {
      id: 6,
      title: "Color Correction",
      description: "Expert correction services to fix color issues.",
      price: "Consultation required",
      icon: <Droplet className="w-6 h-6 text-gold-500" />,
      category: 'color'
    },
    {
      id: 7,
      title: "Luxury Facial",
      description: "Revitalize your skin with our signature facial treatment.",
      price: "$120+",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      category: 'spa'
    },
    {
      id: 8,
      title: "Manicure & Pedicure",
      description: "Complete nail care with premium polishes.",
      price: "$85+",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      category: 'spa'
    },
    {
      id: 9,
      title: "Massage Therapy",
      description: "Relax and rejuvenate with our therapeutic massage.",
      price: "$110+",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      category: 'spa'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Premium beauty treatments tailored to your unique style"
          light={true}
        />
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12">
          <CategoryTab 
            label="All Services" 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')} 
          />
          <CategoryTab 
            label="Hair" 
            active={activeTab === 'hair'} 
            onClick={() => setActiveTab('hair')} 
          />
          <CategoryTab 
            label="Color" 
            active={activeTab === 'color'} 
            onClick={() => setActiveTab('color')} 
          />
          <CategoryTab 
            label="Spa & Beauty" 
            active={activeTab === 'spa'} 
            onClick={() => setActiveTab('spa')} 
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 mt-10">
          * All prices are starting points and may vary based on hair length, density, and service time.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#booking" 
            className="inline-block px-8 py-3 bg-gold-500 text-white font-medium rounded-md hover:bg-gold-600 transition-colors duration-300 shadow-md"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

interface CategoryTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-6 py-2 rounded-full transition-colors duration-300 ${
        active 
          ? 'bg-gold-500 text-white' 
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Services;