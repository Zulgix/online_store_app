import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",

  initialState: {
    openModal: false,
    item: "",
  },

  reducers: {
    setModalOpen: (state, action) => {
      state.openModal = action.payload;
    },
    setModalItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setModalOpen, setModalItem } = modalSlice.actions;
export default modalSlice.reducer;
