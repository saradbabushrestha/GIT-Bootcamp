import axios from "axios";

const API_URL = "http://localhost:5001/users";

export const getFeed = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data.feed; 
  } catch (error) {
    console.error("Error encountered:", error);
    throw new Error("Error fetching feed");
  }
};

export const addPostToFeed = async (userId: string, newPost: { id: string; text: string }) => {
  try {
    const userResponse = await axios.get(`${API_URL}/${userId}`);
    const updatedFeed = [...userResponse.data.feed, newPost];

    await axios.patch(`${API_URL}/${userId}`, { feed: updatedFeed });
  } catch (error) {
    console.error("Error encountered while adding post:", error);
    throw new Error("Error adding post to feed");
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data; 
  } catch (error) {
    console.log("Error fetching user:", error);
    throw new Error("Error fetching user");
  }
};

