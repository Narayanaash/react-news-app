import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gadgetsNewsList: [],
};

export const gadgetsNewsSlice = createSlice({
  name: 'gadgetsNewsSlice',
  initialState,
  reducers: {
    getGadgetsNewsSuccess: (state, action) => {
      state.gadgetsNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getGadgetsNewsSuccess } = gadgetsNewsSlice.actions;

export default gadgetsNewsSlice.reducer;
