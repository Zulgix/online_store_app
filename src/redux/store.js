import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import backdropReducer from "./backdrop";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    backdrop: backdropReducer,
    modal: modalReducer,
  },
});
