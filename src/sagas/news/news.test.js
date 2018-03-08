/* eslint-env jest */
/* eslint-disable no-restricted-syntax */
import 'babel-polyfill';
import { runSaga } from 'redux-saga';
import { retrieveReactNews } from './news';

jest.mock('../../common/fetchNews/fetchNews');

const dispatchSpy = jest.fn();

const reduxStore = {
  dispatch: action => dispatchSpy(action),
  getState: () => ({ state: 'test' }),
};

describe('retrieveReactNews: ', () => {
  beforeEach(() => {
    window.App = {
      apiUrl: 'testURL',
    };
  });

  test('it dispatches the correct actions', async () => {
    await runSaga(reduxStore, retrieveReactNews).done;
    expect(dispatchSpy.mock.calls).toMatchSnapshot();
  });
});
