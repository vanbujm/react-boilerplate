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

export const userProfileDefinition = [
  'userProfile',
  {
    ...defaultModelAttributes,
    userId: {
      type: DataType.INTEGER,
      primaryKey: true,
    },

    displayName: {
      type: DataType.STRING(100),
    },

    picture: {
      type: DataType.STRING(255),
    },

    gender: {
      type: DataType.STRING(50),
    },

    location: {
      type: DataType.STRING(100),
    },

    website: {
      type: DataType.STRING(255),
    },
  },
  {
    ...defaultModelOptions,
  },
];

const UserProfile = sequelize => sequelize.define(...userProfileDefinition);

export default UserProfile;
