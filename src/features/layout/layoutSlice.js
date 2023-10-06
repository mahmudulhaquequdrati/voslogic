import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  apiCall: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleApi: (state, action) => {
      state.apiCall = action.payload;
    },
  },
});

export const { toggleSidebar, toggleApi } = layoutSlice.actions;

export default layoutSlice.reducer;
