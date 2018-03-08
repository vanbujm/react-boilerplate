/* eslint-disable import/prefer-default-export */
const mockNewsData = [
  {
    content: '<h1>Some mock content with html </h1>',
    link: 'https://reactjsnews.com/fake-news',
    title: 'Using Proxies with Redux Types',
  },
];
export async function fetchNews() {
  return {
    json: async () => ({ data: { news: mockNewsData } }),
  };
}
