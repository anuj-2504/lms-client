import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  role: null, // ✅ Store user role
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      if (action.payload && action.payload.user) {
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.role = action.payload.user.role || "student"; // ✅ Default to student if role is missing
      }
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null; // ✅ Clear role on logout
    }
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
