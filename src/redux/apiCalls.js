import axios from 'axios';
import { getNewsSuccess } from './breakingNewsSlice';

export const fetchBreakingNews = async (dispatch) => {
  try {
    const res = await axios.get('http://reactnewz.herokuapp.com/');
    dispatch(getNewsSuccess(res.data.articles));
  } catch (err) {}
};
