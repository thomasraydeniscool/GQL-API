const User = require('../../api/user/user.model');

const { packageAuth, loginUser } = require('../shared/auth');

module.exports = {
    Query: {
        users: async (parent, args, { viewer }) => {
            if (viewer && viewer.role === 10) {
                const users = await User.find(args);
                return users.map((user) => Object.assign(user, { _id: user._id.toString() }));
            }
            return null;
        }
    },
    Mutation: {
        register: async (parent, args) => {
            const user = await User.create(args);
            if (user) return packageAuth(user);
            console.log(user);
            return null;
        },
        login: async (parent, args) => loginUser(args),
    }
};