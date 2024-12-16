import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoginPage } from './components/auth/LoginPage';

function App() {
  // Simple client-side routing
  const isLoginPage = window.location.pathname === '/login';

  if (isLoginPage) {
    return <LoginPage />;
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