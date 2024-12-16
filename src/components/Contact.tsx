import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0A1A2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss how we can help transform your infrastructure
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md bg-[#112240] border-gray-600 text-white shadow-sm focus:border-[#64FFDA] focus:ring-[#64FFDA]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-[#112240] border-gray-600 text-white shadow-sm focus:border-[#64FFDA] focus:ring-[#64FFDA]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-[#112240] border-gray-600 text-white shadow-sm focus:border-[#64FFDA] focus:ring-[#64FFDA]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#0A1A2F] bg-[#64FFDA] hover:bg-[#4CD9B9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#64FFDA] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ContactInfo icon={<Mail />} text="contact@devopspro.com" />
            <ContactInfo icon={<Phone />} text="+1 (555) 123-4567" />
            <ContactInfo icon={<MapPin />} text="San Francisco, CA" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center justify-center text-gray-300">
    <span className="text-[#64FFDA] mr-2">{icon}</span>
    <span>{text}</span>
  </div>
);