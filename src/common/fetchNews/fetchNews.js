/* eslint-disable import/prefer-default-export */
import { NEWS_FEED_ERROR } from '../../constants/index';

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
