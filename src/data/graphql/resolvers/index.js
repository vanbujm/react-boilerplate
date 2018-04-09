import news from './news';
import dogs from './dogs';
import me from './me';
import dog from './dog';

const resolvers = {
  Query: {
    dogs,
    dog,
    news,
    me,
  },
};

export default resolvers;
