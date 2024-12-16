import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroFeatures } from './hero/HeroFeatures';

export const Hero = () => {
  return (
    <div className="bg-[#0A1A2F] min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Business</span>
            <span className="block text-[#64FFDA]">With Seamless Cloud Migration</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Accelerate your cloud journey with our expert migration services.
            We specialize in seamless transitions to AWS, Azure, and Google Cloud Platform.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0A1A2F] bg-[#64FFDA] hover:bg-[#4CD9B9] md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <HeroFeatures />
      </div>
    </div>
  );
};