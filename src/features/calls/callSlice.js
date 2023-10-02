import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calls: {},
  // all_calls: [],
};

const callSlice = createSlice({
  name: "callInfo",
  initialState,
  reducers: {
    allCalls: (state, action) => {
      state.calls = action.payload;
      // state.all_calls = action.payload?.calls;
    },
    // updateAllCalls: (state, action) => {
    //   state.all_calls = [...state.all_calls, action.payload.calls];
    // },
  },
});

export const { allCalls } = callSlice.actions;

export default callSlice.reducer;
