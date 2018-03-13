/* eslint-disable import/prefer-default-export */
import { REQUEST_REACT_NEWS } from '../constants/action-types';

export function requestReactNews() {
  return {
    type: REQUEST_REACT_NEWS,
  };
}
