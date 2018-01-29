const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const userQuery = require('../user/user.query');
const userMutation = require('../user/user.mutation');

/**
 * Query
 */
const queryFields = Object.assign(
    {}, 
    userQuery
);

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: queryFields,
});

/**
 * Mutation
 */
const mutationFields = Object.assign(
    {},
    userMutation
);

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: mutationFields,
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});