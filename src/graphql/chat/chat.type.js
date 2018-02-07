const Message = require('./message.type');

const Chat = `
    type Chat {
        _id: ID!
        first: ID!
        seccond: ID!
        messages: [Message]
    }
    extend type Query {
        getMessages(chatId: ID!): [Message]
    }
    extend type Mutation {
        newChat(seccond: ID!): Chat
        newMessage(chat: ID!, body: String!): Message
    }
`;

// we wrap it in a function
// to avoid strings deduplication
module.exports = () => [Chat, Message];