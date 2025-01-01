import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setUser: (state, action) => {
      state.id = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    clearUserId: (state) => {
      state.id = null;
    },
  },
});

export const { addToFeed, setUserFeed, setUser, setUserId, clearUserId } =
  userSlice.actions;

export default userSlice.reducer;
