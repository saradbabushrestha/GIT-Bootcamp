import React, { useState, useEffect, ChangeEvent } from "react";
import { User } from "../../types/users/users";
import {
  fetchUsers,
  deleteUser,
  promoteToAdmin,
  demoteToUser,
} from "../../redux/services/userServices";
import UserTable from "../../modules/users/components/UserTable";
import SearchBar from "../../components/SearchBar";

const SuperAdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Fetch users from the API
  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
      setFilteredUsers(usersData);
    };

    getUsers();
  }, []);

  // Handle search input
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(results);
  };

  // Handle delete user
  const handleDelete = async (id: string): Promise<void> => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
  };

  // Handle promote user to admin
  const handlePromote = async (id: string): Promise<void> => {
    await promoteToAdmin(id);
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: "admin" } : user))
    );
    setFilteredUsers(
      filteredUsers.map((user) =>
        user.id === id ? { ...user, role: "admin" } : user
      )
    );
  };

  // Handle demote admin to user
  const handleDemote = async (id: string): Promise<void> => {
    await demoteToUser(id);
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: "user" } : user))
    );
    setFilteredUsers(
      filteredUsers.map((user) =>
        user.id === id ? { ...user, role: "user" } : user
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Super Admin Dashboard
      </h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <UserTable
        users={filteredUsers}
        onDelete={handleDelete}
        onPromote={handlePromote}
        onDemote={handleDemote}
      />
    </div>
  );
};

export default SuperAdminDashboard;
