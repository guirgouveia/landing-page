import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0A1A2F] mx-auto">
      {icon}
    </div>
    <h3 className="mt-6 text-lg font-medium text-white text-center">{title}</h3>
    <p className="mt-2 text-gray-300 text-center">{description}</p>
  </div>
);