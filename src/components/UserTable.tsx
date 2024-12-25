import React from "react";
import { User } from "../types/User";

interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b text-center">Name</th>
          <th className="px-4 py-2 border-b text-center">Email</th>
          <th className="px-4 py-2 border-b text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b text-center">
                <button
                  onClick={() => onDelete(user.id)}
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
              No results found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
