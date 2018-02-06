const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const { schema } = require('./schema.handler');
const { environment } = require('../../config/environment');
const { viewerFromToken, getToken } = require('../shared/auth');

module.exports = (app) => {
    app.use(
        '/graphql',
        bodyParser.json(),
        graphqlExpress(async (req) => {
            const viewer = await viewerFromToken(getToken(req)); 
            return {
                schema,
                context: {
                    viewer,
                },
            };
        }),
    );
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}