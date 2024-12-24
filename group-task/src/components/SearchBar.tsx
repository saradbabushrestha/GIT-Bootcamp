import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
}

const SearchBar: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
 
  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

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

      {/* User List */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="px-4 py-2 text-center">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
