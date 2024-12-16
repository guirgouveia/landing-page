import React from 'react';
import { UserProfile } from './UserProfile';
import { ProfileStats } from './ProfileStats';
import { ProfileSettings } from './ProfileSettings';

export const ProfilePage = () => {
  // This would typically come from your auth context/state
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    role: 'DevOps Engineer',
    company: 'Tech Solutions Inc.',
  };

  return (
    <div className="min-h-screen bg-[#0A1A2F] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <UserProfile user={user} />
          </div>
          <div className="lg:col-span-2">
            <ProfileStats />
            <ProfileSettings />
          </div>
        </div>
      </div>
    </div>
  );
};