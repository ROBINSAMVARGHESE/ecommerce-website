import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/feature/Cart/Cartslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

