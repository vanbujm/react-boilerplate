/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import { componentWithMockContext } from '../../../test/testHelpers';
import { DogsComponent } from './Dogs';

const mockDogs = [
  {
    id: 1,
    name: 'Chewer',
    breed: 'Big dog',
    isGoodDog: 'Yes',
  },
  {
    id: 2,
    name: 'Nibbler',
    breed: 'Smol dog',
    isGoodDog: 'Yes',
  },
];

describe('Dogs Page', () => {
  test('renders', () => {
    const renderedComponent = renderer
      .create(componentWithMockContext()(<DogsComponent data={{ dogs: [] }} />))
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });

  test('renders dogs', () => {
    const renderedComponent = renderer
      .create(
        componentWithMockContext()(<DogsComponent data={{ dogs: mockDogs }} />),
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});
