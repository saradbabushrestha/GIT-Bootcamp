import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchUsers, deleteUser } from "../services/userService";
import { User } from "../types/User";
import UserTable from "./UserTable";

const SearchBar: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Fetch users on component mount
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    loadUsers();
  }, []);

  // Handle delete
  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle search input
  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(results);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Name or Email"
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 w-full max-w-md rounded-md mb-4"
      />

      {/* User Table */}
      <UserTable users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

export default SearchBar;
