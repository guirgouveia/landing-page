import { useState, useEffect } from 'react';

interface ProfileStats {
  hoursSaved: string;
  projectsCompleted: string;
  successRate: string;
}

export const useProfileStats = () => {
  const [stats, setStats] = useState<ProfileStats>({
    hoursSaved: '0',
    projectsCompleted: '0',
    successRate: '0%',
  });

  useEffect(() => {
    // Simulate API call
    setStats({
      hoursSaved: '240+',
      projectsCompleted: '12',
      successRate: '98%',
    });
  }, []);

  return stats;
};