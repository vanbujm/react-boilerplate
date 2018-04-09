import database from '../../database';

const { db: { Dog } } = database;

const dogs = async () =>
  Dog.findAll().map(aDog =>
    aDog.get({
      plain: true,
    }),
  );

const resolverObject = {
  Query: { dogs },
};

export default resolverObject;
