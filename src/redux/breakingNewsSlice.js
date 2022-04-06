import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breakingNewsList: [],
};

export const breakingNewsSlice = createSlice({
  name: 'breakingNewsSlice',
  initialState,
  reducers: {
    getNewsSuccess: (state, action) => {
      state.breakingNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getNewsSuccess } = breakingNewsSlice.actions;

export default breakingNewsSlice.reducer;
