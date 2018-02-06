const { makeExecutableSchema } = require('graphql-tools');

const User = require('../user');

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const RootQuery = `type Query`;

const RootMutation = `type Mutation`;

const resolvers = Object.assign({}, User.resolvers);

exports.schema = makeExecutableSchema({
    typeDefs: [
      SchemaDefinition, RootQuery, RootMutation,
      User.type,
    ],
    resolvers,
});