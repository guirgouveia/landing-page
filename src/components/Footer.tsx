import React from 'react';
import { Terminal } from 'lucide-react';
import { SocialLinks } from './common/SocialLinks';

export const Footer = () => {
  return (
    <footer className="bg-[#112240] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Terminal className="h-8 w-8 text-[#64FFDA]" />
            <span className="ml-2 text-white font-bold text-xl">Juma</span>
          </div>
          
          <SocialLinks />
          
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Transforming businesses through cloud innovation
            </p>
            <p className="mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} Juma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};