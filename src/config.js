import { cosmiconfigSync } from 'cosmiconfig';

const configSearch = cosmiconfigSync('tile').search();

if (!configSearch || configSearch.isEmpty) {
  throw new Error(
    'Could not locate config for module name "tile" - see https://github.com/davidtheclark/cosmiconfig#explorersearch'
  );
}

export default configSearch.config;
