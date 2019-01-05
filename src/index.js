import { join } from 'path';
import tilestrata from 'tilestrata';
import disk from 'tilestrata-disk';

import config from './config';

const {
  web: { port, address },
  map: { basePath }
} = config;

const server = tilestrata();

server
  .layer('base')
  .route('*.png')
  .use(disk.provider(join(basePath, '{z}', '{x}', '{y}.png')));

server.listen(port, address);
