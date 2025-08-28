import { createSlice } from "@reduxjs/toolkit";
import filmes from "../../assets/database.json";

const initialState = filmes;

const databaseSlice = createSlice({
  name: "dataBase",
  initialState,
  reducers: {},
});

export default databaseSlice.reducer;
