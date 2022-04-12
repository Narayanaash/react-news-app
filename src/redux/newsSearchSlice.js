import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedNewsList: [],
  loading: true,
};

export const newsSearchSlice = createSlice({
  name: 'newsSearchSlice',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getSearchedNewsSuccess: (state, action) => {
      state.searchedNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
      state.loading = false;
    },
  },
});

export const { startLoading, getSearchedNewsSuccess } = newsSearchSlice.actions;

export default newsSearchSlice.reducer;
