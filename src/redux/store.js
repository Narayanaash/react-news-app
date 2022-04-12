import { configureStore } from '@reduxjs/toolkit';
import breakingNewsSlice from './breakingNewsSlice';
import entertainmentNewsSlice from './entertainmentNewsSlice';
import internationalNewsSlice from './internationalNewsSlice';
import sportsNewsSlice from './sportsNewsSlice';
import businessNewsSlice from './businessNewsSlice';
import politicsNewsSlice from './politicsNewsSlice';
import gadgetsNewsSlice from './gadgetsNewsSlice';
import innerNewsSlice from './innerNewsSlice';
import newsSearchSlice from './newsSearchSlice';

export const store = configureStore({
  reducer: {
    breakingNewsSlice,
    entertainmentNewsSlice,
    internationalNewsSlice,
    sportsNewsSlice,
    businessNewsSlice,
    politicsNewsSlice,
    gadgetsNewsSlice,
    innerNewsSlice,
    newsSearchSlice,
  },
});
