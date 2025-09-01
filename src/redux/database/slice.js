import { createSlice } from "@reduxjs/toolkit";
import filmes from "../../assets/database.json";
import { randomNumber } from "../../lib/numbers";

export const STORAGE_KEY = "PF::movies";

const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY));
const initialState = savedMovies || filmes;

// função pura para gerar um id único
const generateUniqueId = (state, generator) => {
  const newId = generator();
  return state.some((movie) => movie.id === newId)
    ? generateUniqueId(state, generator) // recursão no lugar do while
    : newId;
};

const databaseSlice = createSlice({
  name: "dataBase",
  initialState,
  reducers: {
    addMovieToCollection: (state, action) => {
      const id = generateUniqueId(state, randomNumber);
      return [...state, { ...action.payload, id }];
    },

    removeMovieOfCollection: (state, action) =>
      state.filter((movie) => movie.id !== action.payload),

    updateMovie: (state, action) =>
      state.map((movie) =>
        movie.id === action.payload.id ? { ...movie, ...action.payload } : movie
      ),
  },
});

export default databaseSlice.reducer;
export const { addMovieToCollection, removeMovieOfCollection, updateMovie } =
  databaseSlice.actions;
