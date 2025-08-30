import { createSlice } from "@reduxjs/toolkit";
import filmes from "../../assets/database.json";
import { randomNumber } from "../../lib/numbers";

export const STORAGE_KEY = "PF::movies";

const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY));
const initialState = savedMovies || filmes;

const databaseSlice = createSlice({
  name: "dataBase",
  initialState,
  reducers: {
    addMovieToCollection: (state, action) => {
      let numeroRandom = randomNumber();
      while (state.some((movie) => movie.id === numeroRandom)) {
        numeroRandom = randomNumber();
      }
      return [...state, { ...action.payload, id: numeroRandom }];
    },

    removeMovieOfCollection: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },

    updateMovie: (state, action) => {
      const { id, ...updatedData } = action.payload;
      return state.map((movie) =>
        movie.id === id ? { ...movie, ...updatedData } : movie
      );
    },
  },
});

export default databaseSlice.reducer;
export const { addMovieToCollection, removeMovieOfCollection, updateMovie } =
  databaseSlice.actions;
