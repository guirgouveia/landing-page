import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
};