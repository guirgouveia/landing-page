import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EditProfileHeader = () => {
  return (
    <div className="mb-8">
      <Link 
        to="/profile"
        className="inline-flex items-center text-[#64FFDA] hover:text-[#4CD9B9] mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Profile
      </Link>
      <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
      <p className="text-gray-300 mt-2">Update your personal information and preferences</p>
    </div>
  );
};