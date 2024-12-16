import { http } from './http';
import { API_ENDPOINTS, getApiUrl } from '../config/api';

export const apiService = {
  auth: {
    async login(email: string, password: string) {
      return http.post(getApiUrl(API_ENDPOINTS.AUTH.LOGIN), { email, password });
    },

    async googleLogin() {
      return http.get(getApiUrl(API_ENDPOINTS.AUTH.GOOGLE));
    },

    async logout() {
      return http.post(getApiUrl(API_ENDPOINTS.AUTH.LOGOUT));
    },

    async refreshToken() {
      return http.post(getApiUrl(API_ENDPOINTS.AUTH.REFRESH));
    },
  },

  user: {
    async getProfile() {
      return http.get(getApiUrl(API_ENDPOINTS.USER.PROFILE));
    },

    async updateProfile(data: any) {
      return http.put(getApiUrl(API_ENDPOINTS.USER.PROFILE), data);
    },

    async getStats() {
      return http.get(getApiUrl(API_ENDPOINTS.USER.STATS));
    },

    async getSettings() {
      return http.get(getApiUrl(API_ENDPOINTS.USER.SETTINGS));
    },

    async updateSettings(data: any) {
      return http.put(getApiUrl(API_ENDPOINTS.USER.SETTINGS), data);
    },
  },
};