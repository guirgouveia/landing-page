import React from 'react';
import { Clock, Calendar, CheckCircle } from 'lucide-react';

export const ProfileStats = () => {
  const stats = [
    {
      icon: <Clock className="h-6 w-6 text-[#64FFDA]" />,
      label: 'Hours Saved',
      value: '240+',
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#64FFDA]" />,
      label: 'Projects Completed',
      value: '12',
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#64FFDA]" />,
      label: 'Success Rate',
      value: '98%',
    },
  ];

  return (
    <div className="bg-[#112240] rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-white mb-6">Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-[#0A1A2F] rounded-lg">
            {stat.icon}
            <span className="mt-2 text-2xl font-bold text-white">{stat.value}</span>
            <span className="text-gray-300">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};