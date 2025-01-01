import axios from "axios";
import { User } from "../../types/users/users";
import { endpoints } from "../endpoints";

export const createUser = async (userData: object): Promise<void> => {
  try {
    await axios.post(endpoints.users.create(), userData);
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(endpoints.users.getAll());
    return response.data;
  } catch (error) {
    console.log("Error", error);
    return [];
  }
};

export const deleteUser = async (id: string): Promise<void> => {
  try {
    await axios.delete(endpoints.users.delete(id));
  } catch (error) {
    console.log("Error", error);
  }
};

export const promoteToAdmin = async (id: string): Promise<void> => {
  try {
    await axios.patch(endpoints.users.update(id), { role: "admin" });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const demoteToUser = async (id: string): Promise<void> => {
  try {
    await axios.patch(endpoints.users.update(id), { role: "user" });
  } catch (error) {
    console.log("Error", error);
  }
};
