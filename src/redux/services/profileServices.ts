import axios from "axios";
import { endpoints } from "../endpoints";

export const getUserDetails = async (userId: string) => {
  try {
    const response = await axios.get(endpoints.users.getById(userId));
    return response.data;
  } catch (e) {
    console.log("Error", e);
  }
};
