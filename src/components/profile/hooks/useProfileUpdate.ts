import { useState } from 'react';
import { apiService } from '../../../services/api';

export const useProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProfile = async (data: any) => {
    try {
      setIsLoading(true);
      setError(null);
      await apiService.user.updateProfile(data);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProfile,
    isLoading,
    error,
  };
};