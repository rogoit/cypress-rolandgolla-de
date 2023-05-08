const wp = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  require('ts-node').register({ transpileOnly: true });

  const options = {
    webpackOptions: require('../../webpack.config'),
  };

  on('file:preprocessor', wp(options));

  // Import TypeScript configuration
  const tsConfig = require('../../cypress.config.ts');
  return { ...config, ...tsConfig };
};
