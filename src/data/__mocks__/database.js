import SequelizeMock from 'sequelize-mock';
import { modelDefinitionFunctions } from '../models';
import { setupDatabase } from '../utils';

function createAndSetupDb() {
  // Setup the mock database connection
  const DBConnectionMock = new SequelizeMock();

  const db = setupDatabase(modelDefinitionFunctions, DBConnectionMock);
  return {
    sequelize: DBConnectionMock,
    db,
  };
}

export default createAndSetupDb();
