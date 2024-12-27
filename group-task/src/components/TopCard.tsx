import React from "react";
import { User } from "../types/users/userprofile";

type TopCardProps = {
  user: User;
};

const TopCard: React.FC<TopCardProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex items-center">
          <img
            src="https://artisan-avenue.onrender.com/assets/profile-DrMMYWIp.png"
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full mb-4 lg:mb-0"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">Team Manager</p>
            <p className="text-gray-500">Tinkune, Bhaktapur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
