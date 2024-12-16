import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EditProfileForm } from './EditProfileForm';
import { EditProfileHeader } from './EditProfileHeader';
import { useProfileUpdate } from '../hooks/useProfileUpdate';

export const EditProfilePage = () => {
  const navigate = useNavigate();
  const { updateProfile, isLoading, error } = useProfileUpdate();

  const handleSubmit = async (formData: any) => {
    const success = await updateProfile(formData);
    if (success) {
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1A2F] pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#112240] rounded-lg shadow-lg p-6">
          <EditProfileHeader />
          {error && (
            <div className="mb-4 p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded text-red-500">
              {error}
            </div>
          )}
          <EditProfileForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};