import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import layoutSlice from "../features/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    auth: authSlice,
    // stock: stockSlice,
  },
  // devTools: import.meta.env.MODE !== "production",
});
