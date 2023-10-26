import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  switchValue: "",
};

const switchAgent = createSlice({
  name: "switchAgent",
  initialState,
  reducers: {
    switchToAgent: (state, action) => {
      state.switchValue = "agents";
    },
    switchToDepartment: (state, action) => {
      state.switchValue = "department";
    },
  },
});

export const { switchToAgent, switchToDepartment } = switchAgent.actions;
export default switchAgent.reducer;
