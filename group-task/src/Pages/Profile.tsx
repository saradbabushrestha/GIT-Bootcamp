import React, { useState } from "react";
import { User } from "../types/users/userprofile";

import TopCard from "../components/TopCard";
import MiddleButton from "../components/MiddleButton";
import DownCard from "../components/DownCard";

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          firstName: "Sarad Babu",
          lastName: "Shrestha",
          email: "sarad@gmail.com",
          phone: "+977-9813951586",
          bio: "Team Manager",
          country: "Budhanilkantha",
          city: "Budhanilkantha, Kathmandu",
        };
  });

  const handleUserChange = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      <TopCard user={user} />
      <MiddleButton user={user} onUserChange={handleUserChange} />
      <DownCard user={user} onUserChange={handleUserChange} />
    </div>
  );
};

export default UserProfile;
