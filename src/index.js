import { join } from 'path';
import tilestrata from 'tilestrata';
import disk from 'tilestrata-disk';
import sharp from 'tilestrata-sharp';

import config from './config';

const {
  web: { port, address },
  map: { basePath }
} = config;

const server = tilestrata();

server
  .layer('base')
  .route('*.webp')
  .use(disk.provider(join(basePath, '{z}', '{x}', '{y}.png')))
  .use(sharp(image => image.webp()));

console.log(`Listening on http://${address}:${port}/\n`);
server.listen(port, address);
