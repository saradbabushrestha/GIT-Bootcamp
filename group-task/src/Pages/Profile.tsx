import React from "react";

interface UserProfileProps {}

const TopCard = () => {
  console.log("Top card option");
};
const MiddleButton = () => {
  console.log("Middle Edit");
};
const DownCard = () => {
  console.log("Down Edit");
};

const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex items-center">
            <img
              src="https://artisan-avenue.onrender.com/assets/profile-DrMMYWIp.png"
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full mb-4 lg:mb-0"
            />
            <div>
              <h2 className="text-2xl font-semibold">Sarad Babu Shrestha</h2>
              <p className="text-gray-600">Team Manager</p>
              <p className="text-gray-500">Tinkune, Bhaktapur</p>
            </div>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full lg:w-auto"
            onClick={TopCard}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={MiddleButton}
          >
            Edit
          </button>
        </div>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>First Name:</strong> Sarad Babu
          </p>
          <p>
            <strong>Last Name:</strong> Shrestha
          </p>
          <p>
            <strong>Email Address:</strong> sarad@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +977-9813951586
          </p>
          <p>
            <strong>Bio:</strong> Team Manager
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Address</h3>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={DownCard}
          >
            Edit
          </button>
        </div>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Country:</strong> Budhanilkantha
          </p>
          <p>
            <strong>City/State:</strong> Budhanilkantha, Kathmandu
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
