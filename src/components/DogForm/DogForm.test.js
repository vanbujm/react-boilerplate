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
import { DogFormComponent } from './DogForm';

describe('AddDog', () => {
  test('renders correctly', () => {
    const onSubmit = () => {};
    const onChange = () => {};
    const updateName = () => {};
    const updateBreed = () => {};
    const name = '';
    const breed = '';

    const wrapper = renderer
      .create(
        <DogFormComponent
          onSubmit={onSubmit}
          onChange={onChange}
          name={name}
          breed={breed}
          updateName={updateName}
          updateBreed={updateBreed}
        />,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
