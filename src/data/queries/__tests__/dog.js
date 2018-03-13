/* eslint-env jest */
import 'babel-polyfill';
import { dog } from '../dog';

const setCacheHintSpy = jest.fn();

describe('test dog query', () => {
  test('matches expected query object', async () => {
    expect(dog).toMatchSnapshot();
  });

  test('matches expected query object', async () => {
    const dog2 = await dog.resolve(null, { id: 2 }, null, {
      cacheControl: { setCacheHint: setCacheHintSpy },
    });
    expect(dog2).toMatchSnapshot();
  });
});
