import { configureStore } from '@reduxjs/toolkit';
import breakingNewsSlice from './breakingNewsSlice';
import entertainmentNewsSlice from './entertainmentNewsSlice';
import internationalNewsSlice from './internationalNewsSlice';
import sportsNewsSlice from './sportsNewsSlice';
import businessNewsSlice from './businessNewsSlice';

export const store = configureStore({
  reducer: {
    breakingNewsSlice,
    entertainmentNewsSlice,
    internationalNewsSlice,
    sportsNewsSlice,
    businessNewsSlice,
  },
});
