import { configureStore } from '@reduxjs/toolkit';
import breakingNewsSlice from './breakingNewsSlice';
import entertainmentNewsSlice from './entertainmentNewsSlice';

export const store = configureStore({
  reducer: {
    breakingNewsSlice: breakingNewsSlice,
    entertainmentNewsSlice: entertainmentNewsSlice,
  },
});
