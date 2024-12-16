import React from 'react';
import { Users } from 'lucide-react';

export const UserListHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-white">Users</h3>
        <p className="text-gray-300 text-sm mt-1">
          Manage user accounts and permissions
        </p>
      </div>
    </div>
  );
};