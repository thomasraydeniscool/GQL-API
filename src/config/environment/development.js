const boxen = require('boxen');
const chalk = require('chalk');
const figures = require('figures');

/**
 * Development environment
 */
const environment = {
  production: false,
  environment: 'development',
  port: 4500,
  origin: 'http://localhost:4200',
  endPoint: 'http://localhost:4500',
  database: process.env.MONGODB_URI || 'mongodb://localhost/development',
  token: {
    secret: 'oo7r2?xi]YA6NE2yeZUtBmiqizbALtbu',
    expiration: 3 * 24 * 60 * 60 * 1000,
  },
  log: () => {
    console.log(boxen(listenText, boxOptions));
  },
};

/**
 * API 'listing' log
 */
const space = '  ';
const featureList = [
  { name: 'GraphiQL', active: true },
  { name: 'Morgan logs', active: true },
];
const listIcon = (active) => {
  if (active) {
    return chalk.green(figures.tick);
  }
  return chalk.red(figures.cross);
}

let listLine = '';
featureList.forEach(item => {
  listLine += `\n${ space }${ listIcon(item.active) }${ space }${ item.name }`;
});

const portLine = `${ chalk.bgMagenta.bold('GraphQL') } server running on port: ${ chalk.green(environment.port) }`;
const envLine = `Environment: ${ chalk.cyan(environment.environment) }`;

const listenText = `${ portLine }\n\n${ envLine }${ listLine }`;

const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
  borderColor: 'gray',
}

module.exports = environment;

