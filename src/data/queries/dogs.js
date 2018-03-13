/* eslint-disable no-plusplus */
import { GraphQLList as List } from 'graphql';
import DogType from '../types/DogType';
import { doggos } from './dog';

const dogs = {
  type: List(DogType),
  resolve(_1, _2, _3, { cacheControl }) {
    const tenMinutes = 10 * 60;

    cacheControl.setCacheHint({ maxAge: tenMinutes });

    return doggos;
  },
};

export default dogs;
