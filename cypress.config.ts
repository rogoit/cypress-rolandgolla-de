require('ts-node').register({ compilerOptions: { module: 'commonjs' } });
const config = require('./cypress.config.base.ts');
module.exports = config;
