import { randomNumber } from "./numbers";

const addMovieToCollection = (state, action) => {
  let numeroRandom = randomNumber();
  while (state.some((movie) => movie.id === numeroRandom)) {
    numeroRandom = randomNumber();
  }
  return [...state, { ...action.payload, id: numeroRandom }];
};
const removeMovieOfCollection = (state, action) => {
  return state.filter((movie) => movie.id !== action.payload);
};
const updateMovie = (state, action) => {
  const { id, ...updatedData } = action.payload;
  return state.map((movie) =>
    movie.id === id ? { ...movie, ...updatedData } : movie
  );
};

export const crudFunctions = {
  add: addMovieToCollection,
  remove: removeMovieOfCollection,
  update: updateMovie,
};
