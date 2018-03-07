/* eslint-env jest */
import 'babel-polyfill';
import newsRequest from './newsRequest.mock';
import { fetchNews } from './fetchNews';
import { NEWS_FEED_ERROR } from '../../constants/index';

const fetchSpy = jest.fn();
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
