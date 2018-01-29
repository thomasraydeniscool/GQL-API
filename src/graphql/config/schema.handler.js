const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const user = require('../user/user.schema');

const fields = Object.assign(
    {}, 
    user
);

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields,
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});