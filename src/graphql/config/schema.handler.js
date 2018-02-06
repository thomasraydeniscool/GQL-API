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

const RootSubscription = `type Subscription`;

const resolvers = Object.assign({}, 
  UserResolvers,
  ChatResolvers
);

exports.schema = makeExecutableSchema({
    typeDefs: [
      SchemaDefinition, RootQuery, RootMutation, RootSubscription,
      UserType, ChatType,
    ],
    resolvers,
});