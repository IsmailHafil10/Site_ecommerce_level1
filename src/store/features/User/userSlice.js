import { CreateSlice, createSlice } from "@reduxjs/toolkit";

const initialState = { users: { name: "", age: "" } };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
