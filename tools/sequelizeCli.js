import transform from 'babel-transform-dir';
import { readFile } from './lib/fs';

export default async function transpileSequelize() {
  const data = await readFile('.babelrc.sequelize');
  const babelConfig = JSON.parse(data);
  const sequelizeDirectories = [
    ['src/data/migrations', 'build/migrations'],
    ['src/data/models', 'build/models'],
    ['src/data/seeders', 'build/seeders'],
  ];
  return Promise.all(
    sequelizeDirectories.map(path =>
      transform(path[0], path[1], {
        babel: babelConfig,
      }),
    ),
  );
}
