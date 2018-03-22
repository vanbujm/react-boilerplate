/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import defaultModelAttributes from './defaultModelAttributes';

const yesOrNo = /^Yes|No$/g;

export const dogDefinition = [
  'dog',
  {
    ...defaultModelAttributes,
    name: {
      type: DataType.STRING(255),
      validate: { isAlphanumeric: true, notEmpty: true },
    },

    breed: {
      type: DataType.STRING(255),
      validate: { isAlphanumeric: true, notEmpty: true },
    },

    isGoodDog: {
      type: DataType.STRING(255),
      defaultValue: 'Yes',
      allowNull: false,
      validate: { is: yesOrNo },
    },
  },
  {
    indexes: [{ fields: ['breed'] }],
  },
];

const Dog = sequelize => sequelize.define(...dogDefinition);

export default Dog;
