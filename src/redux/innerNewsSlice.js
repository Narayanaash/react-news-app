import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  innerNewsList: [],
};

export const innerNewsSlice = createSlice({
  name: 'innerNewsSlice',
  initialState,
  reducers: {
    getInnerNewsSuccess: (state, action) => {
      state.innerNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getInnerNewsSuccess } = innerNewsSlice.actions;

export default innerNewsSlice.reducer;
