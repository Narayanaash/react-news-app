import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  internationalNewsList: [],
};

export const internationalNewsSlice = createSlice({
  name: 'internationalNewsSlice',
  initialState,
  reducers: {
    getInternationalNewsSuccess: (state, action) => {
      state.internationalNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getInternationalNewsSuccess } = internationalNewsSlice.actions;

export default internationalNewsSlice.reducer;
