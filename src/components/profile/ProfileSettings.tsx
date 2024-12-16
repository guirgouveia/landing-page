import React from 'react';
import { Bell, Lock, Globe } from 'lucide-react';

export const ProfileSettings = () => {
  const settings = [
    {
      icon: <Bell className="h-5 w-5 text-[#64FFDA]" />,
      title: 'Notifications',
      description: 'Manage your notification preferences',
    },
    {
      icon: <Lock className="h-5 w-5 text-[#64FFDA]" />,
      title: 'Security',
      description: 'Update your security settings',
    },
    {
      icon: <Globe className="h-5 w-5 text-[#64FFDA]" />,
      title: 'Language & Region',
      description: 'Set your language and regional preferences',
    },
  ];

  return (
    <div className="bg-[#112240] rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Settings</h3>
      <div className="space-y-6">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-[#0A1A2F] rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors"
          >
            <div className="flex-shrink-0">{setting.icon}</div>
            <div className="ml-4">
              <h4 className="text-white font-medium">{setting.title}</h4>
              <p className="text-gray-300 text-sm">{setting.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};