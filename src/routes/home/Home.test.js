/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from './Home';

const mockNewsData = [
  {
    content: '<h1>Some mock content with html </h1>',
    link: 'https://reactjsnews.com/fake-news',
    title: 'Using Proxies with Redux Types',
  },
];

const newsActionSpy = jest.fn();

const mockNewsAction = () => newsActionSpy();

describe('Home Page', () => {
  test('renders', () => {
    const renderedComponent = renderer
      .create(<Home requestReactNews={mockNewsAction} />)
      .toJSON();

    expect(newsActionSpy.mock.calls.length).toBeGreaterThan(0);
    expect(renderedComponent).toMatchSnapshot();
  });

  test('renders news content', () => {
    const renderedComponent = renderer
      .create(<Home requestReactNews={mockNewsAction} news={mockNewsData} />)
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});
