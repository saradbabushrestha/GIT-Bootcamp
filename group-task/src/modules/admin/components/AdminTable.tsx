// this table is for the admin. this shows only the list of users only and only action allowed is remove/delete the user
import React from "react";
import { UserTableProps } from "../../../types/users/usertableprops";

const AdminTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b text-center bg-slate-300">Name</th>
          <th className="px-4 py-2 border-b text-center bg-slate-300">Email</th>
          <th className="px-4 py-2 border-b text-center bg-slate-300">
            Actions
          </th>
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
                  onClick={() => onDelete?.(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="px-4 py-2 text-center">
              No Users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AdminTable;
