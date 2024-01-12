import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: state => {
      state.value = state.cart.filter(x => !action.payload);
    },
    clearCart: (state, action) => {
      initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, clearCart} = counterSlice.actions;

export default counterSlice.reducer;
