import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import news from './news';
import dogs from './dogs';

export default combineReducers({
  user,
  dogs,
  runtime,
  news,
});
