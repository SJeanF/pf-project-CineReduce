import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import movieReducer, { STORAGE_KEY } from "./database/slice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    cart: cartReducer,
  },
});

let prevMoviesState = store.getState().movies;

store.subscribe(() => {
  const currentMoviesState = store.getState().movies;

  if (currentMoviesState !== prevMoviesState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentMoviesState));
    prevMoviesState = currentMoviesState;
  }
});

export default store;
