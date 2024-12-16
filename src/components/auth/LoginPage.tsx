import React from 'react';
import { Terminal } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { Divider } from './Divider';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleEmailLogin = (email: string, password: string) => {
    // Handle email/password login
    console.log('Login attempt with:', email, password);
    // Simulate successful login
    navigate('/profile');
  };

  const handleGoogleLogin = () => {
    // Handle Google SSO
    console.log('Google login clicked');
    // Simulate successful login
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-[#0A1A2F] flex flex-col items-center justify-center px-4">
      <div className="flex items-center mb-8">
        <Terminal className="h-8 w-8 text-[#64FFDA]" />
        <span className="ml-2 text-white font-bold text-xl">Juma</span>
      </div>
      
      <div className="max-w-md w-full bg-[#112240] rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-300">Sign in to your Juma account</p>
        </div>

        <LoginForm onSubmit={handleEmailLogin} />
        
        <Divider />

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-[#0A1A2F] transition-colors"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <div className="mt-6 text-center">
          <span className="text-gray-400">Don't have an account? </span>
          <a href="#" className="text-[#64FFDA] hover:text-[#4CD9B9] text-sm">
            Sign up
          </a>
        </div>

        <div className="mt-4 text-center">
          <button 
            onClick={() => navigate('/')} 
            className="text-[#64FFDA] hover:text-[#4CD9B9] text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};