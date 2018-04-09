/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import { defaultModelAttributes, defaultModelOptions } from './defaults';

export const userDefinition = [
  'user',
  {
    ...defaultModelAttributes,
    email: {
      type: DataType.STRING(255),
      validate: { isEmail: true },
    },

    emailConfirmed: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    ...defaultModelOptions,
    indexes: [{ fields: ['email'] }],
  },
];

const User = sequelize => sequelize.define(...userDefinition);

export default User;
