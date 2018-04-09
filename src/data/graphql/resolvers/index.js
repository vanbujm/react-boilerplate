import { merge } from 'lodash/object';
import news from './news';
import dogs from './dogs';
import me from './me';
import dog from './dog';

const allResolvers = [news, dogs, me, dog];

const resolvers = {
  Query: {},
};

allResolvers.forEach(resolver => {
  merge(resolvers, resolver);
});

export default resolvers;
