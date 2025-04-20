import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      <p className={`max-w-xl mx-auto ${light ? 'text-gray-200' : 'text-gray-600'}`}>
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;