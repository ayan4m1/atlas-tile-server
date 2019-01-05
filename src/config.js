import cosmiconfig from 'cosmiconfig';

const configSearch = cosmiconfig('tile').searchSync();

if (configSearch === null) {
  throw new Error(
    'Did not find a config file for module name "spyglas" - see https://github.com/davidtheclark/cosmiconfig#explorersearch'
  );
}

export default configSearch.config;
