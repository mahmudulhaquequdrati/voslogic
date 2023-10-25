import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import callSlice from "../features/calls/callSlice";
import layoutSlice from "../features/layout/layoutSlice";
import modalSlice from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    auth: authSlice,
    calls: callSlice,
    modal: modalSlice,
    // stock: stockSlice,
  },
  // devTools: import.meta.env.MODE !== "production",
});
