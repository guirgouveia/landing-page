import React from 'react';
import { LogIn } from 'lucide-react';

export const LoginButton = () => {
  return (
    <button
      onClick={() => window.location.href = '/login'}
      className="flex items-center px-4 py-2 text-sm font-medium text-[#0A1A2F] bg-[#64FFDA] rounded-md hover:bg-[#4CD9B9] transition-colors"
    >
      <LogIn className="h-4 w-4 mr-2" />
      Login
    </button>
  );
};