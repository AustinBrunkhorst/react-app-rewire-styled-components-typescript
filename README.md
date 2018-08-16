# `Styled Components Debugging - TypeScript`

[![npm version](https://img.shields.io/npm/v/react-app-rewire-styled-components-typescript.svg)](https://www.npmjs.com/package/react-app-rewire-styled-components-typescript)
[![npm downloads](https://img.shields.io/npm/dt/react-app-rewire-styled-components-typescript.svg)](https://www.npmjs.com/package/react-app-rewire-styled-components-typescript)

Debug your TypeScript styled component apps.

## What does this package do?

Adds a [TypeScript transformer](https://github.com/Igorbek/typescript-plugin-styled-components) to generate debug information for [rewired](https://github.com/wmonk/create-react-app-typescript) [create react apps](https://github.com/wmonk/create-react-app-typescript).

```JS
const Header = styled.h1`...`;
```

transpiles to

```JS
const Header = styled.h1.withConfig({ displayName: 'Header' })`...`;
```

✨  ✨

## Installation

```sh
npm install --save react-app-rewire-styled-components-typescript
```
```sh
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
