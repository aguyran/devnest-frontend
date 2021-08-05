import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isVisible: false,
    cartItems: [],
  },
  reducers: {
    addItemCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItemCart: (state, action) => {
      state.cartItems = state.cartItems.filter !== action.id;
    },
  },
});

export const { addItemCart, removeItemCart } = cartSlice.actions;
export default cartSlice.reducer;
