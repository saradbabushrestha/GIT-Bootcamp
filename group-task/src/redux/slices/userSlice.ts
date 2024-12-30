import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/users/users";

const initialState: User = {
  id: "",
  name: "",
  email: "",
  role: "user",
  feed: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToFeed(state, action) {
      state.feed.push(action.payload);
    },
    setUserFeed(state, action) {
      state.feed = action.payload;
    },
  },
});

export const { addToFeed, setUserFeed } = userSlice.actions;

export default userSlice.reducer;
