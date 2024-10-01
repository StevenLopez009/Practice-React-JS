import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducer: {},
});

export default userSlice.reducer;
