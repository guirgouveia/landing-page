import React from 'react';
import { Mail, Briefcase, Building2, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    role: string;
    company: string;
  };
}

export const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="bg-[#112240] rounded-lg shadow-lg p-6">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-32 w-32 rounded-full border-4 border-[#64FFDA]"
        />
        <h2 className="mt-4 text-2xl font-bold text-white">{user.name}</h2>
        
        <div className="mt-4 w-full space-y-3">
          <div className="flex items-center text-gray-300">
            <Mail className="h-5 w-5 text-[#64FFDA] mr-2" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Briefcase className="h-5 w-5 text-[#64FFDA] mr-2" />
            <span>{user.role}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Building2 className="h-5 w-5 text-[#64FFDA] mr-2" />
            <span>{user.company}</span>
          </div>
        </div>

        <Link 
          to="/profile/edit"
          className="mt-6 w-full inline-flex items-center justify-center bg-[#64FFDA] text-[#0A1A2F] py-2 px-4 rounded-md hover:bg-[#4CD9B9] transition-colors"
        >
          <Edit2 className="h-4 w-4 mr-2" />
          Edit Profile
        </Link>
      </div>
    </div>
  );
};