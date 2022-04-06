import axios from 'axios';
import { getNewsSuccess } from './breakingNewsSlice';
import { getEntertainmentNewsSuccess } from './entertainmentNewsSlice';

export const fetchBreakingNews = async (dispatch) => {
  try {
    const res = await axios.get('https://reactnewz.herokuapp.com/headlines');
    dispatch(getNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchEntertainmentNews = async (dispatch) => {
  try {
    const res = await axios.get('https://reactnewz.herokuapp.com/headlines');
    dispatch(getEntertainmentNewsSuccess(res.data.articles));
  } catch (err) {}
};
