import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin";
import responsiveSlice from "./features/responsive";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    responsive: responsiveSlice,
  },
});
