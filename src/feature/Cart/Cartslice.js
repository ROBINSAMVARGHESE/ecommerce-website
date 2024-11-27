// src/feature/Cart/Cartslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.total += item.price * item.quantity;
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const item = state.items.find(item => item.id === id);
      if (item) {
        state.items = state.items.filter(i => i.id !== id);
        state.total -= item.price * item.quantity;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload.id;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload.id;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



