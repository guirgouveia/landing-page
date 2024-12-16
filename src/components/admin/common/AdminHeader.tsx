import React from 'react';
import { Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <Link
          to="/admin/settings"
          className="inline-flex items-center px-4 py-2 text-sm text-[#64FFDA] hover:text-[#4CD9B9]"
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Link>
      </div>
      <div className="flex items-center mt-2">
        <Users className="h-5 w-5 text-[#64FFDA] mr-2" />
        <p className="text-gray-300">Manage users and system settings</p>
      </div>
    </div>
  );
};