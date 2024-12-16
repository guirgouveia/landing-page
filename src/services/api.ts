import { http } from './http';
import { API_ENDPOINTS, getApiUrl } from '../config/api';
import { mockAuthService } from './mockAuth';

const isDev = import.meta.env.DEV;

export const apiService = {
  auth: {
    async login(email: string, password: string) {
      if (isDev) {
        return mockAuthService.login(email, password);
      }
      return http.post(getApiUrl(API_ENDPOINTS.AUTH.LOGIN), { email, password });
    },

    async googleLogin() {
      if (isDev) {
        return mockAuthService.googleLogin();
      }
      return http.get(getApiUrl(API_ENDPOINTS.AUTH.GOOGLE));
    },

    async logout() {
      if (isDev) {
        return Promise.resolve();
      }
      return http.post(getApiUrl(API_ENDPOINTS.AUTH.LOGOUT));
    },
  },

  user: {
    async getProfile() {
      return http.get(getApiUrl(API_ENDPOINTS.USER.PROFILE));
    },

    async updateProfile(data: any) {
      return http.put(getApiUrl(API_ENDPOINTS.USER.PROFILE), data);
    },
  },

  admin: {
    async getUsers() {
      if (isDev) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockUsers;
      }
      return http.get(getApiUrl(API_ENDPOINTS.ADMIN.USERS));
    },

    async deleteUser(id: string) {
      if (isDev) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return;
      }
      return http.delete(getApiUrl(API_ENDPOINTS.ADMIN.USERS + '/' + id));
    },

    async searchUsers(query: string) {
      if (isDev) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockUsers.filter(user => 
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
        );
      }
      return http.get(getApiUrl(API_ENDPOINTS.ADMIN.USERS + '/search'), {
        params: { query }
      });
    },

    async getStats() {
      if (isDev) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
          totalUsers: mockUsers.length,
          newUsers: 1,
          inactiveUsers: 0
        };
      }
      return http.get(getApiUrl(API_ENDPOINTS.ADMIN.STATS));
    },
  },
};