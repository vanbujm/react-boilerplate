import { takeEvery, call, put } from 'redux-saga/effects';
import {
  REQUEST_REACT_NEWS,
  SET_REACT_NEWS,
  RESPONSE_RECEIVED,
  REACT_NEWS_FEED_ERROR,
} from '../../constants/action-types/index';
import createFetch from '../../createFetch';
import { fetchNews } from '../../common/fetchNews/fetchNews';

export function* retrieveReactNews() {
  const fetchFunction = createFetch(fetch, {
    baseUrl: window.App.apiUrl,
  });

  const response = yield call(fetchNews, fetchFunction);

  yield put({ type: RESPONSE_RECEIVED });

  const getJson = async resp => resp.json();

  const { data } = yield call(getJson, response);

  if (!data || !data.news) yield put({ type: REACT_NEWS_FEED_ERROR });
  else {
    const { news } = data;
    yield put({
      type: SET_REACT_NEWS,
      news,
    });
  }
}

export function* watchRequestReactNews() {
  yield takeEvery(REQUEST_REACT_NEWS, retrieveReactNews);
}
