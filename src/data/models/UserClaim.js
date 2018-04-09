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

export const userClaimDefinition = [
  'userClaim',
  {
    ...defaultModelAttributes,
    type: {
      type: DataType.STRING,
    },

    value: {
      type: DataType.STRING,
    },
  },
  {
    ...defaultModelOptions,
  },
];

const UserClaim = sequelize => sequelize.define(...userClaimDefinition);
export default UserClaim;
