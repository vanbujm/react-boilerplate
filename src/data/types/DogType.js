import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as Boolean,
} from 'graphql';

const DogType = new ObjectType({
  name: 'Dog',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: StringType },
    breed: { type: StringType },
    isGoodDog: { type: NonNull(Boolean) },
  },
});

export default DogType;
