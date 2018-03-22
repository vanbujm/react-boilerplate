import { allDefinitions } from '../models';

export default {
  up: async queryInterface =>
    allDefinitions.map(async modelDefinition => {
      try {
        return await queryInterface.createTable(...modelDefinition);
      } catch (error) {
        console.error(error);
        return [];
      }
    }),
  down: async queryInterface =>
    allDefinitions.map(async modelDefinition =>
      queryInterface.dropTable(modelDefinition[0]),
    ),
};
