import fetch from 'node-fetch';

// React.js News Feed (RSS)
const url =
  'https://api.rss2json.com/v1/api.json' +
  '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = () => {
  if (lastFetchTask) {
    return lastFetchTask;
  }

  const tenMinutes = 1000 * 60 * 10;

  if (new Date() - lastFetchTime > tenMinutes) {
    lastFetchTime = new Date();
    lastFetchTask = fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          items = data.items;
        }

        lastFetchTask = null;
        return items;
      })
      .catch(err => {
        lastFetchTask = null;
        throw err;
      });

    if (items.length) {
      return items;
    }

    return lastFetchTask;
  }

  return items;
};

export default news;
