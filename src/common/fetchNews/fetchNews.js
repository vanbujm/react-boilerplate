/* eslint-disable import/prefer-default-export */

export async function fetchNews(fetchFunction) {
  return fetchFunction('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
}
