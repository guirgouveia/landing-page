import { useState, useEffect } from 'react';
import { apiService } from '../../../services/api';

interface AdminStats {
  totalUsers: number;
  newUsers: number;
  inactiveUsers: number;
}

export const useAdminStats = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    newUsers: 0,
    inactiveUsers: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiService.admin.getStats();
        setStats(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, isLoading };
};