import React, { useState } from 'react';
import { Trash2, MoreVertical, Shield, ShieldOff } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isAdmin: boolean;
  avatar: string;
}

interface UserListItemProps {
  user: User;
  onDelete: (id: string) => Promise<void>;
}

export const UserListItem = ({ user, onDelete }: UserListItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setIsDeleting(true);
      try {
        await onDelete(user.id);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#0A1A2F] rounded-lg">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-10 w-10 rounded-full"
        />
        <div className="ml-4">
          <p className="text-white font-medium">{user.name}</p>
          <p className="text-gray-300 text-sm">{user.email}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {user.isAdmin ? (
          <Shield className="h-5 w-5 text-[#64FFDA]" />
        ) : (
          <ShieldOff className="h-5 w-5 text-gray-400" />
        )}
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="text-red-400 hover:text-red-300 disabled:opacity-50"
        >
          <Trash2 className="h-5 w-5" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};