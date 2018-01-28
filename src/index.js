const app = require('./config/app');
const environment = require('./config/environment');
const cron = require('./config/cron');

/**
 * Routes
 */
// import exampleRoutes from './api/example/example.routes';

const GraphQLHandler = require('./graphql/config/graphql.handler');

const api = app((instance) => {
  GraphQLHandler(instance);
});

api.listen(
  process.env.PORT || environment.port, 
  console.log(`server started on port ${environment.port} (${environment.environment})`)
); // eslint-disable-line no-console

/**
 * Initiate cron functions
 */
// cronPayouts();
// cronExpire();
// cronReminders();

module.exports = api;
