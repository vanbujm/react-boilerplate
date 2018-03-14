/* eslint-disable no-plusplus */
import { capitalize } from 'lodash';
import DOG_BREEDS from '../../../constants/dogs/dogBreeds';
import dogNames from '../../../constants/dogs/dogNames';

const seededRandom = (max, min, seed) => {
  const actualMax = max || 1;
  const actualMin = min || 0;

  // some prime numbers to make things exciting
  const actualSeed = (seed * 9301 + 49297) % 233280;
  const rnd = actualSeed / 233280;

  return actualMin + rnd * (actualMax - actualMin);
};

const createDogs = (numberOfDoggos = 20, seed = 2) => {
  const doggos = [];
  let newSeed = seed;

  for (let i = 0; i < numberOfDoggos; i++) {
    const breedIndex = Math.floor(seededRandom(DOG_BREEDS.length, 0, newSeed));
    const nameIndex = Math.floor(
      seededRandom(DOG_BREEDS.length, 0, newSeed + 1),
    );
    const doggo = {
      id: i + 1,
      name: capitalize(dogNames[nameIndex]),
      breed: DOG_BREEDS[breedIndex],
      isGoodDog: 'Yes',
    };
    doggos.push(doggo);
    newSeed++;
  }
  return doggos;
};

const doggos = createDogs();

const dog = (_, args, _2, { cacheControl }) => {
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
};

export { dog, doggos };
