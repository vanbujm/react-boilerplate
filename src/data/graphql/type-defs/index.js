// Add new graphql type imports here to add them to the schema

import DogType from './DogType.graphqls';
import NewsItemType from './NewsItemType.graphqls';
import UserType from './UserType.graphqls';
import SchemaDefinition from './SchemaDefinition.graphqls';
import Query from './Query.graphqls';
import Mutation from './Mutation.graphqls';

// Make sure to add new types to Query.graphqls!
export default [
  SchemaDefinition,
  Query,
  Mutation,
  DogType,
  NewsItemType,
  UserType,
];
