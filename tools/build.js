/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import cp from 'child_process';
import transform from 'babel-transform-dir';
import { readFile } from './lib/fs';
import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';
import render from './render';
import pkg from '../package.json';

async function transpileSequelize() {
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

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(clean);
  await run(copy);
  await run(transpileSequelize);
  await run(bundle);

  if (process.argv.includes('--static')) {
    await run(render);
  }

  if (process.argv.includes('--docker')) {
    cp.spawnSync('docker', ['build', '-t', pkg.name, '.'], {
      stdio: 'inherit',
    });
  }
}

export default build;
