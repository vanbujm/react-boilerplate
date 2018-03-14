import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './queries/index';
import typeDefs from './type-defs/index';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
