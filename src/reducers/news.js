import { SET_REACT_NEWS, REQUEST_REACT_NEWS } from '../constants/action-types';

export default function news(state = {}, action) {
  switch (action.type) {
    case REQUEST_REACT_NEWS:
      return {
        ...state,
        loading: true,
      };
    case SET_REACT_NEWS:
      return {
        ...state,
        loading: false,
        reactNews: action.news,
      };
    default:
      return state;
  }
}
