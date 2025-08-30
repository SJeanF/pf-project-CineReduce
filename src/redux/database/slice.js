import { createSlice } from "@reduxjs/toolkit";
import filmes from "../../assets/database.json";
import { randomNumber } from "../../utils/numbers";

const initialState = filmes;

const databaseSlice = createSlice({
  name: "dataBase",
  initialState,
  reducers: {
    resetCollection: (state, action) => {
      return filmes;
    },

    addMovieToCollection: (state, action) => {
      const numeroRandom = randomNumber();
      while (state.some((movie) => !(movie.id === numeroRandom))) {
        numeroRandom = randomNumber();
      }
      state.push({ ...action.payload, id: numeroRandom });
    },

    removeMovieOfCollection: (state, action) => {
      alert("filme removido com sucesso");
      return state.filter((movie) => !(movie.id === action.payload));
    },

    updateMovie: (state, action) => {
      const { id, ...updatedData } = action.payload;

      const movieIndex = state.findIndex((movie) => movie.id === id);
      if (movieIndex !== -1) {
        state[movieIndex] = { ...state[movieIndex], ...updatedData };
      }
    },
  },
});

export default databaseSlice.reducer;

export const {
  resetCollection,
  addMovieToCollection,
  removeMovieOfCollection,
  updateMovie,
} = databaseSlice.actions;
