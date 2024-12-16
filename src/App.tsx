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

  // Wrap the entire app with the common layout
  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-[#0A1A2F] min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );

  // Route-specific content
  if (path === '/login') {
    return <LoginPage />;
  }

  if (path === '/profile') {
    return (
      <Layout>
        <ProfilePage />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero />
      <Services />
      <Contact />
    </Layout>
  );
}

export default App;