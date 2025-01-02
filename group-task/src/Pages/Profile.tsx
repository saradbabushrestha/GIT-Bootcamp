import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { User } from "../types/users/users";
import { getUserDetails } from "../redux/services/profileServices";
import { updateUserDetails } from "../redux/services/updateServices";

import TopCard from "../components/TopCard";
import MiddleButton from "../components/MiddleButton";

const Profile: React.FC = () => {
  // id from coming params comes in string so we are converting in number
  const { id } = useParams<{ id: string }>(); 
  
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const userDetails = await getUserDetails(id);
          setUser(userDetails); 
        } catch (e) {
          console.log("Error fetching user data:", e);
        } 
      };

      fetchUser();
    }
  }, [id]); 

  const handleUserChange = async (updatedUser: User) => {
    if (id) {
      try {
        const updatedUserData = await updateUserDetails(id, updatedUser);
        setUser(updatedUserData);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      console.log("ID not found for updating");
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow">
      {user ? (
        <>
          <TopCard user={user} />
          <MiddleButton user={user} onUserChange={handleUserChange} />
        </>
      ) : (
        <div>Loading user...</div> 
      )}
    </div>
  ); 
};

export default Profile;
