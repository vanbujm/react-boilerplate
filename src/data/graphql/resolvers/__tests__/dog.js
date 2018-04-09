/* eslint-env jest */
import '@babel/polyfill';
import dog from '../dog';
import database from '../../../database';

const { db: { Dog } } = database;

jest.mock('../../../database');

const args = { id: 2 };

const mockDog = {
  breed: 'Dutch Shepherd Dog',
  createdAt: null,
  id: 2,
  isGoodDog: 'Yes',
  name: 'Hunter',
  updatedAt: null,
};

describe('test dog query', () => {
  test('matches expected query object', async () => {
    const mockDogModel = Dog.build(mockDog);
    const { Query: { dog: dogQuery } } = dog;

    // set autgenerated values to null so we can snapshot
    mockDogModel.set({ createdAt: null });
    mockDogModel.set({ updatedAt: null });

    Dog.$queueResult([mockDogModel]);

    const dog2 = await dogQuery(null, args);
    await expect(dog2).toMatchSnapshot();
  });
});
