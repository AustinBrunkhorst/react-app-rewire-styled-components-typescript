# `react-app-rewire-styled-components-typescript`

Add the [`typescript-plugin-styled-components`](https://github.com/Igorbek/typescript-plugin-styled-components) to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired) and [`react-scripts-ts`](https://github.com/wmonk/create-react-app-typescript).

## What does it do?

```JS
const Header = styled.h1`...`;
```

transpiles to

```JS
const Header = styled.h1.withConfig({ displayName: 'Header' })`...`;
```

This generates class names that are recognizable and easier to debug.

## Installation

```sh
npm install --save react-app-rewire-styled-components-typescript

# alternatively if you have yarn installed
yarn add react-app-rewire-styled-components-typescript
```

## Usage

In the `config-overrides.js` you created for `react-app-rewired` add the following:

> Note that `rewiredStyledComponents` is required before this plugin.

```JS
// config-overides.js

const { compose } = require("react-app-rewired");
const rewireStyledComponentsTypescriptPlugin = require('react-app-rewire-styled-components-typescript');

// react-app-rewired v1.3.4+ (right-to-left)
module.exports = compose(
  rewireStyledComponentsTypescriptPlugin,
  rewireStyledComponents
);

// older versions
module.exports = function(config, env) {
  config = rewireStyledComponents(config, env);
  config = rewireStyledComponentsTypescriptPlugin(config, env);

  return config;
};
```

## Options

You can pass options directly to [`typescript-plugin-styled-components`](https://github.com/Igorbek/typescript-plugin-styled-components) in the last argument

```JS
// config-overrides.js

module.exports = function(config, env) {
  const pluginOptions = {
    // fancy custom display name
    getDisplayName(filename, bindingName) {
      return (bindingName || filename).toUpperCase();
    }
  };

  config = rewireStyledComponents(config, env);
  config = rewireStyledComponentsTypescriptPlugin(config, env, pluginOptions);

  return config;
};
```
