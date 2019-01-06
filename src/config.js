import cosmiconfig from 'cosmiconfig';

const configSearch = cosmiconfig('tile').searchSync();

if (configSearch === null) {
  throw new Error(
    'Could not locate config for module name "tile" - see https://github.com/davidtheclark/cosmiconfig#explorersearch'
  );
}

export default configSearch.config;
