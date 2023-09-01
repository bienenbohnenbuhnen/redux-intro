import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Log" },
  { id: "1", name: "Gary" },
  { id: "2", name: "Hans" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
