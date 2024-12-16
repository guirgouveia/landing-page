import React from 'react';
import { LogIn, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const LoginButton = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center text-[#64FFDA] hover:text-[#4CD9B9]"
        >
          <User className="h-4 w-4 mr-2" />
          Profile
        </button>
        <button
          onClick={logout}
          className="flex items-center px-4 py-2 text-sm font-medium text-[#0A1A2F] bg-[#64FFDA] rounded-md hover:bg-[#4CD9B9] transition-colors"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => navigate('/login')}
      className="flex items-center px-4 py-2 text-sm font-medium text-[#0A1A2F] bg-[#64FFDA] rounded-md hover:bg-[#4CD9B9] transition-colors"
    >
      <LogIn className="h-4 w-4 mr-2" />
      Login
    </button>
  );
};