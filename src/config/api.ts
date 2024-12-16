import { API } from './constants';

export const API_BASE_URL = `${API.GATEWAY_URL}/api/${API.VERSION}`;

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    GOOGLE: '/auth/google',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  
  // User endpoints
  USER: {
    PROFILE: '/users/profile',
    SETTINGS: '/users/settings',
    STATS: '/users/stats',
  },
} as const;

export const getApiUrl = (endpoint: string) => `${API_BASE_URL}${endpoint}`;