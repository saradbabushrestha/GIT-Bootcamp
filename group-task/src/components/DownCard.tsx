import React, { useState } from "react";
import { User } from "../types/users/userprofile";

type DownCardProps = {
  user: User;
  onUserChange: (updatedUser: User) => void;
};

const DownCard: React.FC<DownCardProps> = ({ user, onUserChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleEdit = () => {
    if (isEditing) {
      onUserChange(tempUser);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Address</h3>
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
                value={tempUser.country}
                onChange={(e) =>
                  setTempUser({ ...tempUser, country: e.target.value })
                }
                placeholder="Enter country"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                type="text"
                value={tempUser.city}
                onChange={(e) =>
                  setTempUser({ ...tempUser, city: e.target.value })
                }
                placeholder="Enter city/state"
                className="p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </>
        ) : (
          <>
            <p>
              <strong>Country:</strong> {user.country}
            </p>
            <p>
              <strong>City/State:</strong> {user.city}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DownCard;
