export const selectTotalCart = (state) =>
  state.cart.reduce((acc, movie) => acc + movie.price, 0);
