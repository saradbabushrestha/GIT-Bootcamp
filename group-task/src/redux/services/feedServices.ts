import axios from "axios";
import { endpoints } from "../endpoints";

export const getFeed = async (userId: string) => {
  try {
    const response = await axios.get(endpoints.users.getById(userId));
    return response.data.feed;
  } catch (error) {
    console.log("Error", error);
  }
};

export const addPostToFeed = async (userId: string, newPost: { id: string; text: string }) => {
  try {
    const userResponse = await axios.get(endpoints.users.getById(userId));
    const updatedFeed = [...userResponse.data.feed, newPost];

    await axios.patch(endpoints.users.update(userId), { feed: updatedFeed });
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await axios.get(endpoints.users.getById(userId));
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
