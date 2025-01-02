import axios from "axios";
import { User } from "../../types/users/userlogin";

const API_URL = "http://localhost:5001/users";

export const userLoginService = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await axios.get(
      `${API_URL}?email=${email}&password=${password}`
    );

    if (response.data && response.data.length > 0) {
      return response.data[0];
    }

    throw new Error("User not found or incorrect credentials");
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed");
  }
};
