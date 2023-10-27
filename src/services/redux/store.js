import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import searchSlice from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    search: searchSlice
  },
})

