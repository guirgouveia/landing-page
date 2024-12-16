import { mockUsers } from './mockData';

const MOCK_DELAY = 500;

export const mockAuthService = {
  login: async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    
    const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    return user;
  },

  googleLogin: async () => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    return mockUsers[0]; // Always return admin user for demo
  },

  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
  }
};