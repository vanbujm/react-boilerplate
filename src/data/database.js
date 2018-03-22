import Sequelize from 'sequelize';
import { databaseConfig } from '../config';
import { modelDefinitionFunctions } from './models';
import { setupDatabase } from './utils';

const env = process.env.NODE_ENV || 'development';

const config = databaseConfig[env];

export function createSequelizeConnection(configObject) {
  return configObject.use_env_variable
    ? new Sequelize(process.env[configObject.use_env_variable], {
        dialect: 'postgres',
        protocol: 'postgres',
        port: match[4],
        host: match[3],
        logging: true, // false
      })
    : new Sequelize(
        configObject.database,
        configObject.username,
        configObject.password,
        configObject,
      );
}

function createAndSetupDb() {
  const sequelize = createSequelizeConnection(config);
  return {
    sequelize,
    db: setupDatabase(modelDefinitionFunctions, sequelize),
  };
}

export default createAndSetupDb();
