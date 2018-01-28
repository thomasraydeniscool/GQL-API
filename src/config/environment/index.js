const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const config = require(`./${environment}`); // eslint-disable-line import/no-dynamic-require
const defaults = {
  root: path.join(__dirname, '/..'),
};

module.exports = Object.assign(defaults, config);
