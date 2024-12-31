import axios from "axios";
import { User } from "../../types/users/users";
import { endpoints } from "../endpoints";

export const updateUserDetails = async (userId: string, updatedUser: User) => {
  try {
    const response = await axios.put(endpoints.users.update(userId), updatedUser);
    return response.data;
  } catch (e) {
    console.log("Error ", e);
  }
};
