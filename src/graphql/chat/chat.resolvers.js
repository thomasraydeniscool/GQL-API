const Chat = require('../../api/chat/chat.model');
const Message = require('../../api/chat/message.model');

module.exports = {
    Query: {
        getMessages: async (parent, { chatId }, { viewer }) => {
            if (viewer) {
                const chat = await Chat.findById(chatId)
                    .populate({ path: 'messages' })
                    .exec();
                return chat.messages;
            }
            return null;
        }
    },
    Mutation: {
        newChat: async (parent, args, { viewer }) => {
            if (viewer) {
                args = Object.assign(args, { first: viewer._id });
                const chat = await Chat.create(args);
                return chat;
            }
            return null;
        },
        newMessage: async (parent, args, { viewer }) => {
            if (viewer) {
                args = Object.assign(args, { sender: viewer._id });
                const message = await Message.create(args);
                return message;
            }
            return null;
        },
    }
};