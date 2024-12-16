import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}

export const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="bg-[#112240] p-6 rounded-lg">
    <div className="flex items-center">
      <div className="p-2 bg-[#0A1A2F] rounded-lg">{icon}</div>
      <div className="ml-4">
        <p className="text-gray-300 text-sm">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  </div>
);