import database from '../../models';

const { db: { Dog } } = database;

const dogs = async () =>
  Dog.findAll().map(aDog =>
    aDog.get({
      plain: true,
    }),
  );
export default dogs;
