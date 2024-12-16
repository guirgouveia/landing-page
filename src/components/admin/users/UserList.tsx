import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { UserListItem } from './UserListItem';
import { UserListHeader } from './UserListHeader';
import { SearchBar } from './SearchBar';

export const UserList = () => {
  const { users, isLoading, deleteUser, searchUsers } = useUsers();

  if (isLoading) {
    return <div className="animate-pulse">Loading users...</div>;
  }

  return (
    <div className="bg-[#112240] rounded-lg shadow-lg">
      <div className="p-6">
        <UserListHeader />
        <SearchBar onSearch={searchUsers} />
        <div className="mt-6 space-y-4">
          {users.map(user => (
            <UserListItem
              key={user.id}
              user={user}
              onDelete={deleteUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
};