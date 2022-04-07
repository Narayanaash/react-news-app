import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessNewsList: [],
};

export const businessNewsSlice = createSlice({
  name: 'businessNewsSlice',
  initialState,
  reducers: {
    getBusinessNewsSuccess: (state, action) => {
      state.businessNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getBusinessNewsSuccess } = businessNewsSlice.actions;

export default businessNewsSlice.reducer;
