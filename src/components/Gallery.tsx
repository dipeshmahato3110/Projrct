import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'haircuts' | 'color' | 'styling' | 'spa';
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'haircuts' | 'color' | 'styling' | 'spa'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3993305/pexels-photo-3993305.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Woman with professional blowout",
      category: 'styling'
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3993454/pexels-photo-3993454.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Precision haircut",
      category: 'haircuts'
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Balayage hair color",
      category: 'color'
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Elegant updo",
      category: 'styling'
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Facial treatment",
      category: 'spa'
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Men's haircut",
      category: 'haircuts'
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Highlights and color",
      category: 'color'
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Spa manicure",
      category: 'spa'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Our Work" 
          subtitle="Browse our portfolio of transformations and signature styles"
          light={true}
        />
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          <GalleryTab 
            label="All" 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')} 
          />
          <GalleryTab 
            label="Haircuts" 
            active={activeCategory === 'haircuts'} 
            onClick={() => setActiveCategory('haircuts')} 
          />
          <GalleryTab 
            label="Color" 
            active={activeCategory === 'color'} 
            onClick={() => setActiveCategory('color')} 
          />
          <GalleryTab 
            label="Styling" 
            active={activeCategory === 'styling'} 
            onClick={() => setActiveCategory('styling')} 
          />
          <GalleryTab 
            label="Spa & Beauty" 
            active={activeCategory === 'spa'} 
            onClick={() => setActiveCategory('spa')} 
          />
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View larger
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Image modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white text-2xl p-2 hover:text-gold-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Love what you see? Our stylists are ready to create your perfect look.
          </p>
          <a 
            href="#booking" 
            className="inline-block px-8 py-3 bg-gold-500 text-white font-medium rounded hover:bg-gold-600 transition-colors duration-300 shadow-md"
          >
            Book Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

interface GalleryTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${
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

export default Gallery;