/* eslint-disable no-plusplus */
import faker from 'faker';
import { GraphQLID as ID } from 'graphql';
import DogType from '../types/DogType';
import DOG_BREEDS from '../../constants/dogBreeds';

const doggos = [];

const numberOfDoggos = 20;

for (let i = 0; i < numberOfDoggos; i++) {
  const doggo = {
    id: i + 1,
    name: faker.name.firstName(),
    breed: DOG_BREEDS[Math.floor(Math.random() * numberOfDoggos)],
    isGoodDog: true,
  };
  doggos.push(doggo);
}

const dog = {
  type: DogType,
  args: {
    id: {
      type: ID,
    },
  },
  resolve(_, args, _2, { cacheControl }) {
    const oneMinute = 60;

    cacheControl.setCacheHint({ maxAge: oneMinute });
    const id = Number(args.id);
    if (!id) {
      return null;
    }

    const doggo = doggos.find(aDog => aDog.id === id);

    return new Promise(resolve => {
      setTimeout(() => resolve(doggo !== undefined ? doggo : null), 3000);
    });
  },
};

export { dog, doggos };
