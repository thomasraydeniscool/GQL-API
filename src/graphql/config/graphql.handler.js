const expressGraphQL = require('express-graphql');

const schema = require('./schema.handler');
const { environment } = require('../../config/environment');

// const viewer = viewer.fromAuthToken(request.auth_token);

module.exports = (app) => {
    app.use('/graphql', expressGraphQL({
        schema: schema,
        graphiql: environment === 'development',
        viewer,
    }));
}