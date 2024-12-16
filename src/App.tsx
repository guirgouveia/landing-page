import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoginPage } from './components/auth/LoginPage';
import { ProfilePage } from './components/profile/ProfilePage';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;

  if (path === '/login') {
    return <LoginPage />;
  }

  if (path === '/profile') {
    return (
      <div className="bg-[#0A1A2F]">
        <Navbar />
        <ProfilePage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0A1A2F]">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;