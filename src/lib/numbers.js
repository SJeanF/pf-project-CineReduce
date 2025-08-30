export const randomNumber = (min = 0, max = 99999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
