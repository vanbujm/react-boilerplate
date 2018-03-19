/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import { NewsComponent } from './News';

const fakeNews = [
  {
    content: '<h1>Some mock content with html </h1>',
    link: 'https://reactjsnews.com/fake-news',
    title: 'Using Fake News',
  },
];

describe('News', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<NewsComponent news={fakeNews} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
