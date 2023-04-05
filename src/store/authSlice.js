import { createSlice } from "@reduxjs/toolkit";

const initialState = { auth: false, user: null };

const authReducer = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        console.log(state, "STAE")
        state.auth = true;
        state.user = JSON.stringify(action.payload);
      }
    },

    logout: (state) => {
      state.auth = false;
      state.user = null;
    },
  },
});

export const AUTH_ACTIONS = { ...authReducer.actions };
export default authReducer.reducer;