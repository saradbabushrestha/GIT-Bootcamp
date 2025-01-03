// this is the user table. this table is for the superadmin only
// this table contains all the list of users(normal users and admins)
import React from "react";
import { UserTableProps } from "../../../types/users/usertableprops";

const UserTable: React.FC<UserTableProps> = ({
  users,
  onDelete,
  onPromote,
  onDemote,
}) => {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b text-center bg-slate-300">Name</th>
          <th className="px-4 py-2 border-b text-center bg-slate-300">Email</th>
          <th className="px-4 py-2 border-b text-center bg-slate-300">Role</th>
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
              <td className="px-4 py-2 border-b">{user.role}</td>
              <td className="px-4 py-2 border-b text-center">
                {/* The reason I have used onClick={()=> onDelete?.(user.id) } is because in typescript using ? (optional) makes it undefined and typescript doesnot allow invoking undefined function directily and mannualy invoking */}
                <button
                  onClick={() => onDelete?.(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 sm:w-30">
                  Remove
                </button>
                {user.role === "user" ? (
                  <button
                    onClick={() => onPromote?.(user.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 ml-2 sm:w-40">
                    Promote to Admin
                  </button>
                ) : (
                  <button
                    onClick={() => onDemote?.(user.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 ml-2 sm:w-40">
                    Demote to User
                  </button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="px-4 py-2 text-center">
              No results found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
