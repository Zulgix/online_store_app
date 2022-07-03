import { createSlice } from "@reduxjs/toolkit";

const backdropSlice = createSlice({
  name: "backdrop",

  initialState: {
    open: false,
  },
  reducers: {
    setBackdropOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setBackdropOpen } = backdropSlice.actions;
export default backdropSlice.reducer;
