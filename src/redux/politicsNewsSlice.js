import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  politicsNewsList: [],
};

export const politicsNewsSlice = createSlice({
  name: 'politicsNewsSlice',
  initialState,
  reducers: {
    getPoliticsNewsSuccess: (state, action) => {
      state.politicsNewsList = action.payload.filter(
        (item) => item.urlToImage !== null
      );
    },
  },
});

export const { getPoliticsNewsSuccess } = politicsNewsSlice.actions;

export default politicsNewsSlice.reducer;
