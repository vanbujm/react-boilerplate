import { camelCase, upperFirst } from 'lodash/string';
import { addAssociations } from '../models';

export function createDefinitions(
  modelDefinitionFactories,
  connection,
  database,
) {
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

export function setupDatabase(modelDefinitionFactories, connection) {
  const db = createDefinitions(modelDefinitionFactories, connection, {});
  addAssociations(db);
  return db;
}
