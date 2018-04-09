/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import { capitalize } from 'lodash/string';
import { defaultModelAttributes, defaultModelOptions } from './defaults';

const yesOrNo = /^Yes|No$/g;
const isAlphaNumericWithSpaces = /^[a-zA-Z0-9\s]+$/g;

export const dogDefinition = [
  'dog',
  {
    ...defaultModelAttributes,
    name: {
      type: DataType.STRING(255),
      validate: { is: isAlphaNumericWithSpaces, notEmpty: true },
      set(val) {
        this.setDataValue('name', capitalize(val));
      },
    },

    breed: {
      type: DataType.STRING(255),
      validate: { notEmpty: true },
    },

    isGoodDog: {
      type: DataType.STRING(255),
      defaultValue: 'Yes',
      allowNull: false,
      validate: { is: yesOrNo },
    },
  },
  {
    ...defaultModelOptions,
    indexes: [{ fields: ['breed'] }],
  },
];

const Dog = sequelize => sequelize.define(...dogDefinition);

export default Dog;
