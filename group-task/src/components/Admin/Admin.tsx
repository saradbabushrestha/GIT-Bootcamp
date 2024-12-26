import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

const AdminDashboard: React.FC = () => {
  const [admins, setAdmins] = useState<User[]>([]);
  const [filteredAdmins, setFilteredAdmins] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch users from the API
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        // Filter to show only admins
        const adminsData = response.data.filter(
          (user: User) => user.role === "admin"
        );
        setAdmins(adminsData);
        setFilteredAdmins(adminsData);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    fetchAdmins();
  }, []);

  // Handle the deletion of an admin
  const handleDelete = async (id: number): Promise<void> => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      // Remove the deleted admin from the state
      const updatedAdmins = admins.filter((admin) => admin.id !== id);
      setAdmins(updatedAdmins);
      setFilteredAdmins(updatedAdmins);
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter admins by name or email
    const results = admins.filter(
      (admin) =>
        admin.name.toLowerCase().includes(searchValue) ||
        admin.email.toLowerCase().includes(searchValue)
    );
    setFilteredAdmins(results);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admins Dashboard</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Name or Email"
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 w-full max-w-md rounded-md mb-4"
      />

      {/* Admin List */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-center">Name</th>
            <th className="px-4 py-2 border-b text-center">Email</th>
            <th className="px-4 py-2 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.length > 0 ? (
            filteredAdmins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-4 py-2 border-b">{admin.name}</td>
                <td className="px-4 py-2 border-b">{admin.email}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-4 py-2 text-center">
                No admins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
