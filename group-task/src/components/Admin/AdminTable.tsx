import React from "react";
import { User } from "../../types/UserTypes";

interface AdminTableProps {
  admins: User[];
  onDelete: (id: number) => void;
}

const AdminTable: React.FC<AdminTableProps> = ({ admins, onDelete }) => {
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
        {admins.length > 0 ? (
          admins.map((admin) => (
            <tr key={admin.id}>
              <td className="px-4 py-2 border-b">{admin.name}</td>
              <td className="px-4 py-2 border-b">{admin.email}</td>
              <td className="px-4 py-2 border-b text-center">
                <button
                  onClick={() => onDelete(admin.id)}
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
  );
};

export default AdminTable;
