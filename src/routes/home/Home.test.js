/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import { componentWithMockContext } from '../../../test/testHelpers';
import { HomeComponent } from './Home';

const mockNewsData = [
  {
    content: '<h1>Some mock content with html </h1>',
    link: 'https://reactjsnews.com/fake-news',
    title: 'Using Proxies with Redux Types',
  },
];

describe('Home Page', () => {
  test('renders', () => {
    const renderedComponent = renderer
      .create(componentWithMockContext()(<HomeComponent />))
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  test('renders news content', () => {
    const renderedComponent = renderer
      .create(componentWithMockContext()(<HomeComponent news={mockNewsData} />))
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});
