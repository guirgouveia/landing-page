import React from 'react';
import { UserList } from './users/UserList';
import { DashboardStats } from './stats/DashboardStats';
import { AdminHeader } from './common/AdminHeader';
import { useAuth } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0A1A2F] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdminHeader />
        <DashboardStats />
        <UserList />
      </div>
    </div>
  );
};