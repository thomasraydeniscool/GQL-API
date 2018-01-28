const expressGraphQL = require('express-graphql');

const schema = require('./schema.handler');
const { enviroment } = require('../../config/environment');

module.exports = (app) => {
    app.use('/graphql', expressGraphQL({
        schema: schema,
        graphiql: enviroment === 'development',
    }));
}