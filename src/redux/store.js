import { configureStore } from '@reduxjs/toolkit';
import breakingNewsSlice from './breakingNewsSlice';

export const store = configureStore({
  reducer: {
    breakingNewsSlice: breakingNewsSlice,
  },
});
