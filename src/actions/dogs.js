import {
  REQUEST_DOGS,
  SHOW_DOG_FORM,
  HIDE_DOG_FORM,
} from '../constants/action-types';

export const requestDogs = () => ({ type: REQUEST_DOGS });

export const showDogForm = () => ({ type: SHOW_DOG_FORM });
export const hideDogForm = () => ({ type: HIDE_DOG_FORM });

export default requestDogs;
