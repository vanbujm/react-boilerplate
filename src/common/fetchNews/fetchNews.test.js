/* eslint-env jest */
import '@babel/polyfill';
import { fetchNews } from './fetchNews';

const fetchSpy = jest.fn();

describe('fetchNews', () => {
  test('calls the fetch function', async () => {
    await fetchNews(fetchSpy);
    expect(fetchSpy.mock.calls).toMatchSnapshot();
  });
});
