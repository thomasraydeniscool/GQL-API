const expressGraphQL = require('express-graphql');

const schema = require('./schema.handler');
const { environment } = require('../../config/environment');

module.exports = (app) => {
    app.use('/graphql', expressGraphQL({
        schema: schema,
        graphiql: environment === 'development',
    }));
}