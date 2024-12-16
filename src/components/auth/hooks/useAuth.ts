import { useState } from 'react';
import { apiService } from '../../../services/api';

export const useAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async (authFn: () => Promise<any>) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await authFn();
      return { success: true, data: result };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Authentication failed';
      setError(message);
      return { success: false, error: message };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleAuth,
  };
};