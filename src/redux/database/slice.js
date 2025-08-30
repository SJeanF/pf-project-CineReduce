import { createSlice } from "@reduxjs/toolkit";
import filmes from "../../assets/database.json";
import { randomNumber } from "../../lib/numbers";
import { crudFunctions } from "../../lib/crudfunctions";

export const STORAGE_KEY = "PF::movies";

const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY));
const initialState = savedMovies || filmes;

const databaseSlice = createSlice({
  name: "dataBase",
  initialState,
  reducers: { ...crudFunctions },
});

export default databaseSlice.reducer;
export const { addMovieToCollection, removeMovieOfCollection, updateMovie } =
  databaseSlice.actions;
