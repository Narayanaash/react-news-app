import axios from 'axios';
import { getNewsSuccess } from './breakingNewsSlice';
import { getEntertainmentNewsSuccess } from './entertainmentNewsSlice';
import { getInternationalNewsSuccess } from './internationalNewsSlice';
import { getSportsNewsSuccess } from './sportsNewsSlice';
import { getBusinessNewsSuccess } from './businessNewsSlice';
import { getPoliticsNewsSuccess } from './politicsNewsSlice';
import { getGadgetsNewsSuccess } from './gadgetsNewsSlice';
import { getInnerNewsSuccess } from './innerNewsSlice';

export const fetchBreakingNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/headlines');
    dispatch(getNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchEntertainmentNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/entertainment');
    dispatch(getEntertainmentNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchInternationalNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/international');
    dispatch(getInternationalNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchSportsNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/sports');
    dispatch(getSportsNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchBusinessNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/business');
    dispatch(getBusinessNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchPoliticsNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/politics');
    dispatch(getPoliticsNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchGadgetsNews = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/gadgets');
    dispatch(getGadgetsNewsSuccess(res.data.articles));
  } catch (err) {}
};

// for inner page
export const fetchInnerNews = async (page, dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/' + page);
    dispatch(getInnerNewsSuccess(res.data.articles));
  } catch (err) {}
};
