import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: window.screen.width > 500 ? false : true,
};

const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    setMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});
export const { setMobile } = responsiveSlice.actions;
export default responsiveSlice.reducer;
