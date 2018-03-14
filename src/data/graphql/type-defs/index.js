/* eslint-disable import/no-unresolved,import/no-webpack-loader-syntax */

// Add new graphql type imports here to add them to the schema

import DogType from '!raw-loader!./DogType.graphqls';
import NewsItemType from '!raw-loader!./NewsItemType.graphqls';
import UserType from '!raw-loader!./UserType.graphqls';
import SchemaDefinition from '!raw-loader!./SchemaDefinition.graphqls';
import RootQuery from '!raw-loader!./RootQuery.graphqls';

// Make sure to add new types to RootQuery.graphqls!
export default [SchemaDefinition, RootQuery, DogType, NewsItemType, UserType];
