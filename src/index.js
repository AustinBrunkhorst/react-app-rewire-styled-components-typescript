const { getLoader, loaderNameMatches } = require('react-app-rewired');
const { createTransformer } = require('typescript-plugin-styled-components');

const tsLoaderMatcher = rule => loaderNameMatches(rule, 'ts-loader');
const getTsLoader = rules => getLoader(rules, tsLoaderMatcher);

const rewireStyledComponentsTypescriptPlugin = (config, _env, options) => {
  const tsLoader = getTsLoader(config.module.rules);

  if (!tsLoader) {
    console.error(
      'Skipping styled components typescript plugin: ts-loader not found.'
    );

    return config;
  }

  const styledComponentsTransformer = createTransformer(options);

  tsLoader.options.getCustomTransformers = () => ({
    before: [styledComponentsTransformer],
  });

  return config;
};

module.exports = rewireStyledComponentsTypescriptPlugin;
