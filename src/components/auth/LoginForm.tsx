import React from 'react';
import { Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading: boolean;
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-[#0A1A2F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-[#0A1A2F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] focus:border-transparent"
            placeholder="••••••••"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#0A1A2F] bg-[#64FFDA] hover:bg-[#4CD9B9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#64FFDA] transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
};