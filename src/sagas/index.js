/* eslint-disable import/prefer-default-export */

import { all, fork } from 'redux-saga/effects';

import { watchRequestReactNews } from './news/news';

export function* rootSaga() {
  const allSagas = [watchRequestReactNews];
  yield all(allSagas.map(saga => fork(saga)));
}
