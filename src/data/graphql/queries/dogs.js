import { doggos } from './dog';

const dogs = (_1, _2, _3, { cacheControl }) => {
  const tenMinutes = 10 * 60;

  cacheControl.setCacheHint({ maxAge: tenMinutes });

  return doggos;
};
export default dogs;
