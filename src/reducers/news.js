import { SET_REACT_NEWS } from '../constants';

export default function news(state = {}, action) {
  switch (action.type) {
    case SET_REACT_NEWS:
      return {
        ...state,
        reactNews: action.news,
      };
    default:
      return state;
  }
}
