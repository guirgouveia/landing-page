import React from 'react';
import { useForm } from '../hooks/useForm';
import { InputField } from './InputField';
import { ImageUpload } from './ImageUpload';

interface EditProfileFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export const EditProfileForm = ({ onSubmit, isLoading }: EditProfileFormProps) => {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      role: '',
      company: '',
      bio: '',
    },
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ImageUpload />
      
      <InputField
        label="Full Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        required
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        required
      />

      <InputField
        label="Role"
        name="role"
        value={values.role}
        onChange={handleChange}
      />

      <InputField
        label="Company"
        name="company"
        value={values.company}
        onChange={handleChange}
      />

      <div>
        <label className="block text-sm font-medium text-gray-300">
          Bio
        </label>
        <textarea
          name="bio"
          value={values.bio}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md bg-[#0A1A2F] border-gray-600 text-white shadow-sm focus:border-[#64FFDA] focus:ring-[#64FFDA]"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#64FFDA] text-[#0A1A2F] py-2 px-4 rounded-md hover:bg-[#4CD9B9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
};