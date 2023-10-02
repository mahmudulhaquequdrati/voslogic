import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import layoutSlice from "../features/layout/layoutSlice";
import callSlice from "../features/calls/callSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    auth: authSlice,
    calls: callSlice,
    // stock: stockSlice,
  },
  // devTools: import.meta.env.MODE !== "production",
});
