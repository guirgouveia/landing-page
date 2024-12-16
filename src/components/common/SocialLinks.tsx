import React from 'react';
import { Linkedin, Instagram, Calendar, MessageCircle } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/jumads",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/juma.devops",
      label: "Instagram",
      color: "hover:text-[#E4405F]"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/+5519996576254",
      label: "WhatsApp",
      color: "hover:text-[#25D366]"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      href: "https://calendly.com/guirgouveia",
      label: "Calendly",
      color: "hover:text-[#64FFDA]"
    },
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-300 ${link.color} transition-colors duration-300`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};