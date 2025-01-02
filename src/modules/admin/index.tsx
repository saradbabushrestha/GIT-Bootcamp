import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchUsers, deleteUser } from "../../redux/services/userServices";
import { User } from "../../types/users/users";
import SearchBar from "../../components/SearchBar";
import AdminTable from "./components/AdminTable";

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      const userList = data.filter((user) => user.role === "user");
      setUsers(userList);
      setFilteredUsers(userList);
    };
    loadUsers();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Admin Dashboard</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <AdminTable users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

export default AdminDashboard;
