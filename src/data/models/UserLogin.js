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

export const userLoginDefinition = [
  'userLogin',
  {
    ...defaultModelAttributes,
    name: {
      type: DataType.STRING(50),
      primaryKey: true,
    },

    key: {
      type: DataType.STRING(100),
      primaryKey: true,
    },
  },
];

const UserLogin = sequelize => sequelize.define(...userLoginDefinition);

export default UserLogin;
