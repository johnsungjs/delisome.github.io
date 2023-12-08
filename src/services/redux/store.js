import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import searchSlice from './features/search/searchSlice';
import formCheckoutSlice from './features/form/formCheckoutSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    search: searchSlice,
    formCheckout: formCheckoutSlice,
  },
})

