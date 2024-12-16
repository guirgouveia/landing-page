import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

export const ImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-300">
        Profile Picture
      </label>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Profile preview"
                className="h-24 w-24 rounded-full object-cover"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="h-24 w-24 rounded-full bg-[#0A1A2F] flex items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400" />
            </div>
          )}
        </div>
        
        <div>
          <label className="cursor-pointer bg-[#0A1A2F] hover:bg-opacity-80 px-4 py-2 rounded-md text-gray-300 transition-colors">
            <span>Upload new image</span>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <p className="mt-1 text-xs text-gray-400">
            PNG, JPG up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};