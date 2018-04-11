import { SHOW_DOG_FORM, HIDE_DOG_FORM } from '../constants/action-types';

export default function dogs(state = {}, action) {
  switch (action.type) {
    case SHOW_DOG_FORM:
      return {
        ...state,
        showDogForm: true,
      };
    case HIDE_DOG_FORM:
      return {
        ...state,
        showDogForm: false,
      };
    default:
      return state;
  }
}
