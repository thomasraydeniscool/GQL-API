const User = require('../../api/user/user.model');

module.exports = {
    Query: {
        users: async (parent, args) => {
            const users = await User.find(args);
            return users.map((user) => Object.assign(user, { _id: user._id.toString() }));
        },
    },
    Mutation: {
        register: async (parent, args) => {
            const user = await User.create(args);
            return Object.assign(user, { _id: user._id.toString() });
        },
    },
};