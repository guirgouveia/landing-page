// Environment constants
export const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
} as const;

// API constants
export const API = {
  GATEWAY_URL: import.meta.env.PROD ? 'http://api-gateway' : 'http://localhost:8080',
  TIMEOUT: 30000, // 30 seconds
  VERSION: 'v1',
} as const;

// Auth constants
export const AUTH = {
  TOKEN_KEY: 'auth_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
} as const;