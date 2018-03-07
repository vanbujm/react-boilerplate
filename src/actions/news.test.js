/* eslint-env jest */
import 'babel-polyfill';
import newsRequest from './newsRequest.mock';
import { fetchNews, createNewsAction } from './news';
import { NEWS_FEED_ERROR, SET_REACT_NEWS } from '../constants';

const fetchSpy = jest.fn();
const dispatchSpy = jest.fn();
const dispatchMock = data => {
  dispatchSpy.mockReturnValue(data);
  return dispatchSpy();
};
const mockNewsData = {
  news: [
    {
      content: '<h1>Some mock content with html </h1>',
      link: 'https://reactjsnews.com/fake-news',
      title: 'Using Proxies with Redux Types',
    },
  ],
};

describe('fetchNews', () => {
  test('returns news data when fetch is successful', async () => {
    fetchSpy.mockReturnValue(newsRequest(mockNewsData));
    await expect(fetchNews(fetchSpy)).resolves.toBe(mockNewsData.news);
  });

  test('throws an error when fetch is unsuccessful', async () => {
    fetchSpy.mockReturnValue(newsRequest(mockNewsData, false));
    await expect(fetchNews(fetchSpy)).rejects.toEqual(
      new Error(NEWS_FEED_ERROR),
    );
  });
});

describe('createNewsAction', () => {
  test('generates an action', () => {
    const newsArray = [];
    const actionObject = createNewsAction(dispatchMock, newsArray);
    expect(dispatchSpy.mock.calls.length).toBe(1);
    expect(actionObject.type).toBe(SET_REACT_NEWS);
    expect(actionObject.news).toBe(newsArray);
  });
});
