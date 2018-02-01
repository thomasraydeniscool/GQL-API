const { makeExecutableSchema } = require('graphql-tools');

// const User = require('../user');

const UserType = require('../user/user.type');
const UserResolvers = require('../user/user.resolvers');

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const RootQuery = `
  type Query {

  }
`;

const RootMutation = `
  type Mutation {

  }
`;

module.exports = makeExecutableSchema({
    typeDefs: [
        SchemaDefinition, RootQuery, RootMutation,
        ...UserType
    ],
    resolvers: Object.assign({}, ),
});