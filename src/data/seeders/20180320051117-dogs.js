import dogs from './dogs';

export default {
  up: queryInterface => queryInterface.bulkInsert('dog', dogs),
  down: queryInterface => queryInterface.bulkDelete('dog'),
};
