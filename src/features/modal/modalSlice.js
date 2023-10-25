import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true;
    },
    closeModal: (state, action) => {
      state.isOpenModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
