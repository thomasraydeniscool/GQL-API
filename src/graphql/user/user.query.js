const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} = require('graphql');

const User = require('./user.model');
const UserType = require('./user.type');

module.exports = {
    user: {
        type: UserType,
        args: {
            _id: {
                type: GraphQLString,
            },
            name: {
                type: GraphQLString,
            },
        },
        resolve: async (parent, args) => {
            const user = await User.findOne(args);
            if (user) user._id = user._id.toString();
            return user;
        },
    },
    users: {
        type: new GraphQLList(UserType),
        args: {
            role: {
                type: GraphQLInt,
            },
        },
        resolve: async (parent, args) => {
            const users = await User.find(args);
            return users.map(user => {
                user._id = user._id.toString();
                return user;
            });
        },
    },
};