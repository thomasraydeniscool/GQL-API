const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const config = require(`./${environment}`); // eslint-disable-line import/no-dynamic-require
const defaults = {
  root: path.join(__dirname, '/..'),
  log: () => {
    console.log(`Server running in ${ environment } mode`);
  },
};

module.exports = Object.assign(defaults, config);
