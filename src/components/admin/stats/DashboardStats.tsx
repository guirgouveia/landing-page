import React from 'react';
import { Users, UserPlus, UserMinus } from 'lucide-react';
import { StatCard } from './StatCard';
import { useAdminStats } from '../hooks/useAdminStats';

export const DashboardStats = () => {
  const { stats, isLoading } = useAdminStats();

  if (isLoading) {
    return <div className="animate-pulse">Loading stats...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        icon={<Users className="h-6 w-6 text-[#64FFDA]" />}
        label="Total Users"
        value={stats.totalUsers}
      />
      <StatCard
        icon={<UserPlus className="h-6 w-6 text-[#64FFDA]" />}
        label="New Users (30d)"
        value={stats.newUsers}
      />
      <StatCard
        icon={<UserMinus className="h-6 w-6 text-[#64FFDA]" />}
        label="Inactive Users"
        value={stats.inactiveUsers}
      />
    </div>
  );
};