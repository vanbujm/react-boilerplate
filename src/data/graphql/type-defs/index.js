// Add new graphql type imports here to add them to the schema

import DogType from './DogType.graphqls';
import NewsItemType from './NewsItemType.graphqls';
import UserType from './UserType.graphqls';
import SchemaDefinition from './SchemaDefinition.graphqls';
import RootQuery from './RootQuery.graphqls';

// Make sure to add new types to RootQuery.graphqls!
export default [SchemaDefinition, RootQuery, DogType, NewsItemType, UserType];
