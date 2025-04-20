import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  text: string;
  rating: number;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Richardson",
      service: "Hair Coloring",
      text: "I've never been happier with my hair color! The stylist took the time to understand exactly what I wanted and delivered beyond my expectations. The attention to detail and personalized service made this the best salon experience I've ever had.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      name: "Michael Tang",
      service: "Men's Cut & Style",
      text: "Finally found a salon that takes men's hair seriously. My stylist listened to what I wanted and provided suggestions that actually work for my hair type and lifestyle. The complimentary scalp massage was an unexpected bonus!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      service: "Luxury Facial & Massage",
      text: "The spa experience was absolutely incredible. From the moment I walked in, I felt pampered and relaxed. My skin has never looked better, and the massage was perfectly tailored to address my tension areas. Worth every penny!",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex(current => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Client Experiences" 
          subtitle="What our satisfied clients have to say about their time with us"
          light={true}
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                      {testimonial.image && (
                        <div className="md:w-1/4 flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-24 h-24 rounded-full object-cover mx-auto"
                          />
                        </div>
                      )}
                      <div className="md:w-3/4">
                        <div className="flex text-gold-400 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                        <div>
                          <p className="font-medium text-gold-300">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-8 bg-gold-500 rounded-full p-2 text-white hover:bg-gold-600 transition-colors z-10"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-8 bg-gold-500 rounded-full p-2 text-white hover:bg-gold-600 transition-colors z-10"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-gold-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;