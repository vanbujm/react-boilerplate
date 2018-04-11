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
import { HideDogButtonComponent } from './HideDogButton';

describe('HideDogButton', () => {
  test('renders correctly', () => {
    const onClick = () => {};
    const onKeyPress = () => {};
    const wrapper = renderer
      .create(
        <HideDogButtonComponent onClick={onClick} onKeyPress={onKeyPress} />,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
