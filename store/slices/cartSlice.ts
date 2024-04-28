import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CartState {
  items: { [productId: string]: { quantity: number } };
}

// Define the initial state
const initialState: CartState = {
  items: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      if (!state.items[productId]) {
        state.items[productId] = { quantity };
      } else {
        state.items[productId].quantity += quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state.items[productId]) {
        delete state.items[productId];
      }
    },
    updateCart: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      if (state.items[productId]) {
        state.items[productId].quantity = quantity;
      }
    },
    deleteFromCart: (state) => {
      state.items = {};
    },
  },
});

// Export actions for dispatch
export const { addToCart, removeFromCart, updateCart, deleteFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
