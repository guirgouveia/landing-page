import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center p-4 bg-[#0A1A2F] rounded-lg">
    {icon}
    <span className="mt-2 text-2xl font-bold text-white">{value}</span>
    <span className="text-gray-300">{label}</span>
  </div>
);