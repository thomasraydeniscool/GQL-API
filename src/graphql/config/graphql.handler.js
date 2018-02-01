const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema.handler');
const { environment } = require('../../config/environment');

// const viewer = viewer.fromAuthToken(request.auth_token);

module.exports = (app) => {
    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
    if (environment === 'development') app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}