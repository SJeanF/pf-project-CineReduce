export const randomNumber = (min = 0, max = 99999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateUniqueId = (state, generator) => {
  const newId = generator();
  return state.some((movie) => movie.id === newId)
    ? generateUniqueId(state, generator)
    : newId;
};
