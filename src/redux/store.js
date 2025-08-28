import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import movieReducer from "./database/slice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    cart: cartReducer,
  },
});

export default store;
