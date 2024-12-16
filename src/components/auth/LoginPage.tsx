import React from 'react';
import { Terminal } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { Divider } from './Divider';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useAuthForm } from './hooks/useAuth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, googleLogin } = useAuth();
  const { isLoading, error, handleAuth } = useAuthForm();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleEmailLogin = async (email: string, password: string) => {
    const result = await handleAuth(() => login(email, password));
    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  const handleGoogleLogin = async () => {
    const result = await handleAuth(() => googleLogin());
    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1A2F] flex flex-col items-center justify-center px-4">
      <Link to="/" className="flex items-center mb-8">
        <Terminal className="h-8 w-8 text-[#64FFDA]" />
        <span className="ml-2 text-white font-bold text-xl">Juma</span>
      </Link>
      
      <div className="max-w-md w-full bg-[#112240] rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-300">Sign in to your Juma account</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded-md">
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        )}

        <LoginForm onSubmit={handleEmailLogin} isLoading={isLoading} />
        
        <Divider />

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-[#0A1A2F] transition-colors disabled:opacity-50"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};