/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { componentWithMockContext } from '../../../test/testHelpers';
import Layout from './Layout';

describe('Layout', () => {
  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        componentWithMockContext()(
          <Layout>
            <div className="child" />
          </Layout>,
        ),
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
