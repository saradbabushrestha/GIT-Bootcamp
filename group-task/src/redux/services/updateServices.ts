import axios from "axios";
import { User } from "../../types/users/users";

const API_URL = "http://localhost:5001/users"; 

export const updateUserDetails = async (userId: string, updatedUser: User) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, updatedUser);
    return response.data;
  } catch (e) {
    console.log("Error updating user data", e);
  }
};
