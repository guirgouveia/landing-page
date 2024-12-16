import { useState, useEffect } from 'react';
import { apiService } from '../../../services/api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const data = await apiService.admin.getUsers();
      setUsers(data);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    await apiService.admin.deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const searchUsers = async (query: string) => {
    setIsLoading(true);
    try {
      const data = await apiService.admin.searchUsers(query);
      setUsers(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isLoading,
    deleteUser,
    searchUsers,
  };
};