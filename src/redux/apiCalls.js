import axios from 'axios';
import { getNewsSuccess } from './breakingNewsSlice';
import { getEntertainmentNewsSuccess } from './entertainmentNewsSlice';
import { getInternationalNewsSuccess } from './internationalNewsSlice';
import { getSportsNewsSuccess } from './sportsNewsSlice';
import { getBusinessNewsSuccess } from './businessNewsSlice';
import { getPoliticsNewsSuccess } from './politicsNewsSlice';
import { getGadgetsNewsSuccess } from './gadgetsNewsSlice';
import { getInnerNewsSuccess } from './innerNewsSlice';

const baseurl = process.env.REACT_APP_API_URL;

export const fetchBreakingNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'headlines');
    dispatch(getNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchEntertainmentNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'entertainment');
    dispatch(getEntertainmentNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchInternationalNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'international');
    dispatch(getInternationalNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchSportsNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'sports');
    dispatch(getSportsNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchBusinessNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'business');
    dispatch(getBusinessNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchPoliticsNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'politics');
    dispatch(getPoliticsNewsSuccess(res.data.articles));
  } catch (err) {}
};

export const fetchGadgetsNews = async (dispatch) => {
  try {
    const res = await axios.get(baseurl + 'gadgets');
    dispatch(getGadgetsNewsSuccess(res.data.articles));
  } catch (err) {}
};

// for inner page
export const fetchInnerNews = async (page, dispatch) => {
  try {
    const res = await axios.get(baseurl + '' + page);
    dispatch(getInnerNewsSuccess(res.data.articles));
  } catch (err) {}
};
