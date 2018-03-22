import { databaseConfig } from '../config';

const { development, test } = databaseConfig;
module.exports = {
  development: {
    username: development.username,
    password: development.password,
    database: development.database,
    host: development.host,
    dialect: development.dialect,
  },
  test: {
    username: test.username,
    password: test.password,
    database: test.database,
    host: test.host,
    dialect: test.dialect,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    url: process.env.DATABASE_URL,
  },
};
