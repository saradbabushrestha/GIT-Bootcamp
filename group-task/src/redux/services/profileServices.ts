import axios from "axios";

const API_URL = "http://localhost:5001/users";

export const getUserDetails = async (userId: string) => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      return response.data; 
    } catch (e) {
      console.log("Error encountered:", e);
    }
};
