import { itsMonday } from './config/cron';

const app = require('./config/app');
const environment = require('./config/environment');
const cron = require('./config/cron');

const GraphQLHandler = require('./graphql/config/graphql.handler');

const api = app((instance) => {
  GraphQLHandler(instance);
});

api.listen(
  process.env.PORT || environment.port, 
  console.log(`server started on port ${environment.port} (${environment.environment})`) // eslint-disable-line no-console
);

/**
 * Initialise cron functions
 */
itsMonday();

module.exports = api;
