import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './components/auth/LoginPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { EditProfilePage } from './components/profile/edit/EditProfilePage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { AdminRoute } from './components/auth/AdminRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="profile/edit"
              element={
                <PrivateRoute>
                  <EditProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="admin/*"
              element={
                <PrivateRoute>
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}