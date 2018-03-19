/* eslint-disable no-plusplus */
import dogs from '../../../constants/dogs';

const dog = (_, args) => {
  const id = Number(args.id);
  if (!id) {
    return null;
  }

  const doggo = dogs.find(aDog => aDog.id === id);

  return new Promise(resolve => {
    setTimeout(() => resolve(doggo !== undefined ? doggo : null), 3000);
  });
};

export default dog;
