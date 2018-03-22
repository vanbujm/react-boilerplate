import Sequelize from 'sequelize';
import { camelCase, upperFirst } from 'lodash';
import { databaseConfig } from '../../config';
import User, { userDefinition } from './User';
import UserLogin, { userLoginDefinition } from './UserLogin';
import UserClaim, { userClaimDefinition } from './UserClaim';
import UserProfile, { userProfileDefinition } from './UserProfile';
import Dog, { dogDefinition } from './Dog';

const env = process.env.NODE_ENV || 'development';

const config = databaseConfig[env];

function createSequelizeConnection(configObject) {
  return configObject.use_env_variable
    ? new Sequelize(process.env[configObject.use_env_variable], configObject)
    : new Sequelize(
        configObject.database,
        configObject.username,
        configObject.password,
        configObject,
      );
}

// Add your defintion functions here
const modelDefinitionFunctions = [User, UserLogin, UserClaim, UserProfile, Dog];

function createDefinitions(modelDefinitionFactories, connection, database) {
  const definitions = {};
  modelDefinitionFactories.forEach(modelDefinition => {
    const model = modelDefinition(connection);
    definitions[upperFirst(camelCase(model.name))] = model;
  });
  return {
    ...database,
    ...definitions,
  };
}

// Add associations here
function addAssociations(db) {
  db.User.hasMany(db.UserLogin, {
    foreignKey: 'userId',
    as: 'logins',
    onUpdate: 'cascade',
    onDelete: 'cascade',
  });

  db.User.hasMany(db.UserClaim, {
    foreignKey: 'userId',
    as: 'claims',
    onUpdate: 'cascade',
    onDelete: 'cascade',
  });

  db.User.hasOne(db.UserProfile, {
    foreignKey: 'userId',
    as: 'profile',
    onUpdate: 'cascade',
    onDelete: 'cascade',
  });
}

function setupDatabase(modelDefinitionFactories, connection) {
  const db = createDefinitions(modelDefinitionFactories, connection, {});
  addAssociations(db);
  return db;
}

const sequelize = createSequelizeConnection(config);
const db = setupDatabase(modelDefinitionFunctions, sequelize);

export const allDefinitions = [
  userDefinition,
  userLoginDefinition,
  userClaimDefinition,
  userProfileDefinition,
  dogDefinition,
];

export default {
  db,
  sequelize,
  allDefinitions,
  User,
  UserLogin,
  UserClaim,
  UserProfile,
  Dog,
};
