import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute = ({ children }: AdminRouteProps) => {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};