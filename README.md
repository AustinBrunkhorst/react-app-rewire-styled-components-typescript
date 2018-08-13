# `react-app-rewire-styled-components-typescript`

Add the [`typescript-plugin-styled-components`](https://github.com/Igorbek/typescript-plugin-styled-components) to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired) and [`react-scripts-ts`](https://github.com/wmonk/create-react-app-typescript).

## Installation

```sh
npm install --save react-app-rewire-styled-components-typescript

# alternatively if you have yarn installed
yarn add react-app-rewire-styled-components-typescript
```

## Usage

In the `config-overrides.js` you created for `react-app-rewired` add this code:

```JS
const rewireStyledComponentsTypescriptPlugin = require('react-app-rewire-styled-components-typescript');

module.exports = function override(config, env) {
  config = rewireStyledComponentsTypescriptPlugin(config, env);

  return config;
}
```
