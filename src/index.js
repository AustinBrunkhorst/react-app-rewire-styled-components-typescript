const { getLoader, loaderNameMatches } = require('react-app-rewired');

const { createTransformer } = require('typescript-plugin-styled-components');
const styledComponentsTransformer = createTransformer();

const tsLoaderMatcher = rule => loaderNameMatches(rule, 'ts-loader');
const getTsLoader = rules => getLoader(rules, tsLoaderMatcher);

const rewireStyledComponentsTypescriptPlugin = (config, _env) => {
  const tsLoader = getTsLoader(config.module.rules);

  if (!tsLoader) {
    console.log('ts-loader not found');

    return config;
  }

  tsLoader.options.getCustomTransformers = () => ({
    before: [styledComponentsTransformer],
  });

  return config;
};

module.exports = rewireStyledComponentsTypescriptPlugin;
