import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (!state.some((movieInCart) => movieInCart.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      return state.filter((movie) => !(movie.id === action.payload));
    },
  },
});

export default cartSlice.reducer;

export const { addCart, removeCart } = cartSlice.actions;
