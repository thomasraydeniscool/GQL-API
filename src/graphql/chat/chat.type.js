const Message = require('./message.type');

const Chat = `
    type Chat {
        _id: ID!
        users: [User!]!
        messages: [Message]
    }
    extend type Mutation {
        newChat(users: [User!]!): Chat
        newMessage(chat: Chat!, user: User!, body: String!): Message
    }
    extend type Subscription {
        messageListener(chat: Chat!): Message
    }
`;

// we wrap it in a function
// to avoid strings deduplication
module.exports = () => [Chat, Message];