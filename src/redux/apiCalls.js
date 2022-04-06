import axios from 'axios';
import { getNewsSuccess } from './breakingNewsSlice';
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const fetchBreakingNews = async (dispatch) => {
  try {
    const res = await axios.get(
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=' + apiKey
    );
    dispatch(getNewsSuccess(res.data.articles));
  } catch (err) {}
};
