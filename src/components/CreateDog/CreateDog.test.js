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
import { CreateDogComponent } from './CreateDog';
import {
  componentWithMockContext,
  createMockStore,
} from '../../../test/testHelpers';

const initialState = { dogs: { showDogForm: false } };
const store = createMockStore(initialState);

describe('CreateDog', () => {
  test('renders correctly', () => {
    const wrapper = renderer
      .create(
        componentWithMockContext({ store })(<CreateDogComponent showForm />),
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
