export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    GOOGLE: '/auth/google',
    LOGOUT: '/auth/logout',
  },
  
  USER: {
    PROFILE: '/users/profile',
    SETTINGS: '/users/settings',
  },

  ADMIN: {
    USERS: '/admin/users',
    STATS: '/admin/stats',
  },
} as const;

export const getApiUrl = (endpoint: string) => `${API_BASE_URL}${endpoint}`;