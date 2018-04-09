/* eslint-disable no-plusplus */
import database from '../../database';

const { db: { Dog } } = database;

const dog = async (_, args) => {
  const id = Number(args.id);
  if (!id) {
    return null;
  }

  return Dog.findOne({
    where: {
      id,
    },
  });
};

const dogMutation = async (_, args) => Dog.create(args);

const resolverObject = {
  Query: { dog },
  Mutation: { dog: dogMutation },
};

export default resolverObject;
