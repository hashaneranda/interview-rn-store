import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  cart: any;
}

const initialState: initialStateType = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.cart = state.cart.filter((x: any) => x !== action.payload);
    },
    clearCart: () => {
      initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = counterSlice.actions;

export default counterSlice.reducer;
