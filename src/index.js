import { join } from 'path';
import tilestrata from 'tilestrata';
import disk from 'tilestrata-disk';

import config from './config';

const {
  web: { port, path },
  map: { basePath, layerName }
} = config;

const server = tilestrata();

server
  .layer(layerName)
  .route(path)
  .use(disk.provider(join(basePath, '{z}', '{x}', '{y}.png')));

server.listen(port);
