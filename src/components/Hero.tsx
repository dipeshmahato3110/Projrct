import React from 'react';
import { BookButton } from './Navigation';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
        <div className="max-w-2xl">
          <div className="transform transition-all duration-700 translate-y-0 opacity-100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-tight mb-4">
              <span className="block mb-2 animate-fade-in">Experience True</span>
              <span className="font-bold text-gold-300 animate-slide-up">Luxury & Beauty</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg animate-fade-in-delay">
              Where artistry meets elegance. Our expert stylists are dedicated to bringing out your most beautiful self through our premium salon services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <BookButton />
              <a 
                href="#services" 
                className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;