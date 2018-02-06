const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const { schema } = require('./schema.handler');
const { environment } = require('../../config/environment');
const { Viewer } = require('../shared/auth');

module.exports = (app) => {
    app.use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress((req) => {
            return {
                schema,
                context: {
                    viewer: new Viewer(req),
                },
            };
        }),
    );
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}