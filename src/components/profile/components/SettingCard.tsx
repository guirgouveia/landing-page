import React from 'react';

interface SettingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export const SettingCard: React.FC<SettingCardProps> = ({ 
  icon, 
  title, 
  description, 
  onClick 
}) => (
  <div
    onClick={onClick}
    className="flex items-center p-4 bg-[#0A1A2F] rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors"
  >
    <div className="flex-shrink-0">{icon}</div>
    <div className="ml-4">
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);