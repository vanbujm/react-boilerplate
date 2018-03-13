/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fetch from 'node-fetch';
import NewsItemType from '../types/NewsItemType';

// React.js News Feed (RSS)
const url =
  'https://api.rss2json.com/v1/api.json' +
  '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];

const news = {
  type: new List(NewsItemType),
  resolve(_, _1, _2, { cacheControl }) {
    const tenMinutes = 1000 * 60 * 10;
    cacheControl.setCacheHint({ maxAge: tenMinutes });

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          items = data.items;
        }

        return items;
      })
      .catch(err => {
        throw err;
      });
  },
};

export default news;
