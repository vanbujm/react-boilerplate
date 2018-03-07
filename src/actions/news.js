/* eslint-disable import/prefer-default-export */
import 'whatwg-fetch';
import createFetch from '../createFetch';

import {
  FETCH_REACT_NEWS,
  SET_REACT_NEWS,
  NEWS_FEED_ERROR,
} from '../constants';

export async function fetchNews(fetchFunction) {
  const resp = await fetchFunction('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error(NEWS_FEED_ERROR);
  return data.news;
}

export function createNewsAction(dispatch, news) {
  return dispatch({
    type: SET_REACT_NEWS,
    news,
  });
}

export function retrieveReactNews() {
  const fetchFunction = createFetch(fetch, {
    baseUrl: window.App.apiUrl,
  });
  return async dispatch => {
    dispatch({ type: FETCH_REACT_NEWS });
    const news = await fetchNews(fetchFunction);
    return createNewsAction(dispatch, news);
  };
}
