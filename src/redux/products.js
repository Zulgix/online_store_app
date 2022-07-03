import { createSlice } from "@reduxjs/toolkit";
import product_data from "../data/product_data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: product_data,
    filteredProducts: [],
    searchedWords: [],
  },
  reducers: {
    setSearchWords: (state, action) => {
      state.searchedWords = action.payload;
    },

    setFilteredData: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchWords, setFilteredData } = productsSlice.actions;

export default productsSlice.reducer;
