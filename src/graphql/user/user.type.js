const Chat = require('../chat/chat.type');

const User = `
    type User {
        _id: ID!
        name: String
        email: String
        role: Int
        chats: Chat
    }
    type Token {
        token: String!,
        user: User!,
        expiration: String!,
    }
    extend type Query {
        users: [User]
    }
    extend type Mutation {
        register(email: String!, name: String!, password: String!): Token!
        login(email: String!, password: String!): Token!
    }
`;

// we wrap it in a function
// to avoid strings deduplication
module.exports = () => [User, Chat];