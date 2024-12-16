import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

export const InputField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  type = 'text',
  required = false 
}: InputFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full rounded-md bg-[#0A1A2F] border-gray-600 text-white shadow-sm focus:border-[#64FFDA] focus:ring-[#64FFDA]"
      />
    </div>
  );
};