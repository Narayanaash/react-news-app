import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entertainmentNewsList: [],
};

export const entertainmentNewsSlice = createSlice({
  name: 'entertainmentNewsSlice',
  initialState,
  reducers: {
    getEntertainmentNewsSuccess: (state, action) => {
      state.entertainmentNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getEntertainmentNewsSuccess } = entertainmentNewsSlice.actions;

export default entertainmentNewsSlice.reducer;
