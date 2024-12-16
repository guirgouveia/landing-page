import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="bg-[#0A1A2F] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};