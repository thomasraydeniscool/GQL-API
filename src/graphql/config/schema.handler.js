const { makeExecutableSchema } = require('graphql-tools');

const UserType = require('../user/user.type');
const ChatType = require('../chat/chat.type');

const UserResolvers = require('../user/user.resolvers');
const ChatResolvers = require('../chat/chat.resolvers');

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const RootQuery = `type Query`;

const RootMutation = `type Mutation`;

const resolvers = {
  Query: Object.assign(UserResolvers.Query, ChatResolvers.Query),
  Mutation: Object.assign(UserResolvers.Mutation, ChatResolvers.Mutation),
};

// console.log(resolvers);

exports.schema = makeExecutableSchema({
    typeDefs: [
      SchemaDefinition, RootQuery, RootMutation,
      UserType, ChatType,
    ],
    resolvers,
});