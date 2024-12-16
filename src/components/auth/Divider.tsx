import React from 'react';

export const Divider = () => (
  <div className="relative my-6">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-600"></div>
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-2 bg-[#112240] text-gray-400">Or continue with</span>
    </div>
  </div>
);