import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  loading: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setAdmin, setLoading } = adminSlice.actions;
export default adminSlice.reducer;
