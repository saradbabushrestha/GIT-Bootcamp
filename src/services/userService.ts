import axios from "axios";
import { User } from "../types/User";

const API_URL = "http://localhost:5000/users";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
