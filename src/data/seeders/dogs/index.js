/* eslint-disable no-plusplus */
import { capitalize } from 'lodash';
import DOG_BREEDS from './dogBreeds';
import dogNames from './dogNames';

const seededRandom = (max, min, seed) => {
  const actualMax = max || 1;
  const actualMin = min || 0;

  // some prime numbers to make things exciting
  const actualSeed = (seed * 9301 + 49297) % 233280;
  const rnd = actualSeed / 233280;

  return actualMin + rnd * (actualMax - actualMin);
};

const createDogs = (numberOfDoggos = 200, seed = 2) => {
  const doggos = [];
  let newSeed = seed;

  for (let i = 0; i < numberOfDoggos; i++) {
    const breedIndex = Math.floor(seededRandom(DOG_BREEDS.length, 0, newSeed));
    const nameIndex = Math.floor(
      seededRandom(DOG_BREEDS.length, 0, newSeed + 1),
    );
    const doggo = {
      name: capitalize(dogNames[nameIndex]),
      breed: DOG_BREEDS[breedIndex],
      isGoodDog: 'Yes',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    doggos.push(doggo);
    newSeed++;
  }
  return doggos;
};

export default createDogs();
