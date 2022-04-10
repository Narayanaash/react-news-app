import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  innerNewsList: [],
  loading: true,
};

export const innerNewsSlice = createSlice({
  name: 'innerNewsSlice',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getInnerNewsSuccess: (state, action) => {
      state.innerNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
      state.loading = false;
    },
  },
});

export const { startLoading, getInnerNewsSuccess } = innerNewsSlice.actions;

export default innerNewsSlice.reducer;
