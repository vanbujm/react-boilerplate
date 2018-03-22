/* eslint-disable no-plusplus */
import database from '../../models';

const { db: { Dog } } = database;

const dog = async (_, args) => {
  const id = Number(args.id);
  if (!id) {
    return null;
  }

  return Dog.findAll({
    where: {
      id,
    },
  });
};

export default dog;
