import { join } from 'path';
import { existsSync } from 'fs';
import disk from 'tilestrata-disk';
import tilestrata from 'tilestrata';
import sharp from 'tilestrata-sharp';

import config from './config';

const {
  web: { port, address },
  maps
} = config;

const server = tilestrata();

for (const map of maps) {
  const { name, path } = map;

  if (!existsSync(path)) {
    console.error(`Skipping /${name} because ${path} does not exist!`);
  } else {
    console.log(`Serving /${name} from ${path}`);
    server
      .layer(name)
      .route('*.webp')
      .use(disk.provider(join(path, '{z}', '{x}', '{y}.png')))
      .use(sharp(image => image.webp()));
  }
}

console.log(`Listening on http://${address}:${port}/`);
server.listen(port, address);
