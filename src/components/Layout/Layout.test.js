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
import configureStore from 'redux-mock-store';
import App from '../App';
import Layout from './Layout';

const mockStore = configureStore();
const initialState = {};

describe('Layout', () => {
  test('renders children correctly', () => {
    const store = mockStore(initialState);
    const context = {
      insertCss: () => {},
      fetch: () => {},
      store,
      pathname: '',
    };

    const wrapper = renderer
      .create(
        <App context={context}>
          <Layout>
            <div className="child" />
          </Layout>
        </App>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
