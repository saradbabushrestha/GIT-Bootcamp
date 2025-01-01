import React, { useState } from "react";
import { User } from "../types/users/users";

type MiddleButtonProps = {
  user: User;
  onUserChange: (updatedUser: User) => void;
};

const MiddleButton: React.FC<MiddleButtonProps> = ({ user, onUserChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleEdit = () => {
    if (isEditing) {
      onUserChange(tempUser);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="space-y-4 text-gray-700">
        {isEditing ? (
          <>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={tempUser.name}
                onChange={(e) =>
                  setTempUser({ ...tempUser, name: e.target.value })
                }
                placeholder="Enter first name"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={tempUser.lastName}
                onChange={(e) =>
                  setTempUser({ ...tempUser, lastName: e.target.value })
                }
                placeholder="Enter last name"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div> */}

            <div className="flex flex-col space-y-2">
              <input
                type="email"
                value={tempUser.email}
                onChange={(e) =>
                  setTempUser({ ...tempUser, email: e.target.value })
                }
                placeholder="Enter email address"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={tempUser.phone}
                onChange={(e) =>
                  setTempUser({ ...tempUser, phone: e.target.value })
                }
                placeholder="Enter phone number"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={tempUser.bio}
                onChange={(e) =>
                  setTempUser({ ...tempUser, bio: e.target.value })
                }
                placeholder="Enter bio"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div> */}
          </>
        ) : (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email Address:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MiddleButton;
