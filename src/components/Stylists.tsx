import React from 'react';
import SectionTitle from './SectionTitle';
import StylistCard from './StylistCard';

export interface Stylist {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

const Stylists: React.FC = () => {
  const stylists: Stylist[] = [
    {
      id: 1,
      name: "Sophia Martinez",
      role: "Artistic Director",
      bio: "With over 15 years of experience, Sophia brings her international training and passion for cutting-edge techniques to every client.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Color Specialist", "Precision Cutting", "Bridal Styling"]
    },
    {
      id: 2,
      name: "Alexander Kim",
      role: "Senior Stylist",
      bio: "Alexander's approach combines classic techniques with modern trends to create personalized looks that enhance each client's unique features.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Men's Styling", "Textured Hair", "Balayage"]
    },
    {
      id: 3,
      name: "Isabella Johnson",
      role: "Color Specialist",
      bio: "Isabella is known for her exceptional color transformations and ability to create dimensional, natural-looking results.",
      image: "https://images.pexels.com/photos/6934350/pexels-photo-6934350.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Blonde Specialist", "Fashion Colors", "Color Correction"]
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Master Barber",
      bio: "Combining traditional barbering with contemporary aesthetics, James creates impeccable cuts and grooming experiences.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Classic Barbering", "Beard Design", "Hot Towel Shaves"]
    }
  ];

  return (
    <section id="stylists" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Meet Our Team" 
          subtitle="Our talented stylists bring expertise and creativity to every service"
          light={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylists.map(stylist => (
            <StylistCard key={stylist.id} stylist={stylist} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team regularly attends advanced training to stay at the forefront of industry trends and techniques.
          </p>
          <a 
            href="#booking" 
            className="inline-block px-8 py-3 bg-gold-500 text-white font-medium rounded hover:bg-gold-600 transition-colors duration-300 shadow-md"
          >
            Book with a Stylist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stylists;