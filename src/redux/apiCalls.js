import axios from 'axios';
import { getNewsSuccess } from './breakingNewsSlice';
import { getEntertainmentNewsSuccess } from './entertainmentNewsSlice';
import { getInternationalNewsSuccess } from './internationalNewsSlice';
import { getSportsNewsSuccess } from './sportsNewsSlice';
import { getBusinessNewsSuccess } from './businessNewsSlice';

export const fetchBreakingNews = async (dispatch) => {
  try {
    const res = await axios.get('https://reactnewz.herokuapp.com/headlines');
    dispatch(getNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchEntertainmentNews = async (dispatch) => {
  try {
    const res = await axios.get(
      'https://reactnewz.herokuapp.com/entertainment'
    );
    dispatch(getEntertainmentNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchInternationalNews = async (dispatch) => {
  try {
    const res = await axios.get(
      'https://reactnewz.herokuapp.com/international'
    );
    dispatch(getInternationalNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchSportsNews = async (dispatch) => {
  try {
    const res = await axios.get('https://reactnewz.herokuapp.com/sports');
    dispatch(getSportsNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchBusinessNews = async (dispatch) => {
  try {
    const res = await axios.get('https://reactnewz.herokuapp.com/business');
    dispatch(getBusinessNewsSuccess(res.data.articles));
  } catch (err) {}
};
