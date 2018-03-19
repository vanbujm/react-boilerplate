/* eslint-env jest */
import 'babel-polyfill';
import dog from '../dog';

const args = { id: 2 };

describe('test dog query', () => {
  test('matches expected query object', async () => {
    const dog2 = await dog(null, args);
    await expect(dog2).toMatchSnapshot();
  });
});
