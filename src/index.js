/* Config */
const app = require('./config/app');
const environment = require('./config/environment');
const cron = require('./config/cron');

/* GraphQL */
const GraphQLHandler = require('./graphql/config/graphql.handler');

/**
 * API
 */
const api = app((instance) => {
  GraphQLHandler(instance);
});

api.listen(
  process.env.PORT || environment.port,
  environment.log()
);

/**
 * CRON
 */
cron.itsMonday();


module.exports = api;
