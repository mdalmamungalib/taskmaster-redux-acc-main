import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Galib",
  email: "galib@gmail.com",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
