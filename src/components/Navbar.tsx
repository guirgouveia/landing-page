import React, { useState } from 'react';
import { Menu, X, Terminal, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoginButton } from './auth/LoginButton';
import { useAuth } from './auth/AuthContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="bg-[#0A1A2F] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Terminal className="h-8 w-8 text-[#64FFDA]" />
              <span className="ml-2 text-white font-bold text-xl">Juma</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-4">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#process">Process</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              {user?.isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center text-[#64FFDA] hover:text-[#4CD9B9] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Link>
              )}
            </div>
            <div className="ml-4">
              <LoginButton />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#process">Process</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            {user?.isAdmin && (
              <Link
                to="/admin"
                className="flex items-center text-[#64FFDA] hover:text-[#4CD9B9] px-3 py-2 rounded-md text-base font-medium"
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Link>
            )}
            <div className="pt-2">
              <LoginButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-[#64FFDA] px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-[#64FFDA] block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </a>
);