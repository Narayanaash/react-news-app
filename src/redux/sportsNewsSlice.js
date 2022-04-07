import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sportsNewsList: [],
};

export const sportsNewsSlice = createSlice({
  name: 'sportstNewsSlice',
  initialState,
  reducers: {
    getSportsNewsSuccess: (state, action) => {
      state.sportsNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
      console.log(state.sportsNewsList);
    },
  },
});

export const { getSportsNewsSuccess } = sportsNewsSlice.actions;

export default sportsNewsSlice.reducer;
