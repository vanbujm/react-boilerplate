import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_REACT_NEWS, SET_REACT_NEWS } from '../constants/index';
import createFetch from '../createFetch';
import { fetchNews } from '../common/fetchNews/fetchNews';

export function* retrieveReactNews() {
  const fetchFunction = createFetch(fetch, {
    baseUrl: window.App.apiUrl,
  });
  const news = yield call(fetchNews, fetchFunction);
  yield put({
    type: SET_REACT_NEWS,
    news,
  });
}

export function* watchRequestReactNews() {
  yield takeEvery(REQUEST_REACT_NEWS, retrieveReactNews);
}
