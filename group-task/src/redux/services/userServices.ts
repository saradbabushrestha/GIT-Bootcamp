// here it contains the function for admin and super admin like fetching users, removing users, promoting and demoting the users and also the API_URL

import axios from "axios";
import { User } from "../../types/users/users";

// json server url
const API_URL = "http://localhost:5001/users";

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
//create user
export const createUser = async (userData: object): Promise<void> => {
  try {
    await axios.post(endpoints.users.create(), userData);
  } catch (error) {
    console.log("Error", error);
  }
};

// Delete a user by id
export const deleteUser = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

// Promote a user to admin
export const promoteToAdmin = async (id: number): Promise<void> => {
  try {
    await axios.patch(`${API_URL}/${id}`, { role: "admin" });
  } catch (error) {
    console.error("Error promoting user to admin:", error);
  }
};

// Demote an admin to user
export const demoteToUser = async (id: number): Promise<void> => {
  try {
    await axios.patch(`${API_URL}/${id}`, { role: "user" });
  } catch (error) {
    console.error("Error demoting admin to user:", error);
  }
};
