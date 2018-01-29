const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const User = require('../../api/user/user.model');

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
            role: {
                type: GraphQLInt,
            },
        },
        resolve: async (parent, args, viewer) => {
            const user = await User.findOne(args);
            if (!user) return null; 
            return Object.assign(user, { _id: user._id.toString() });
        },
    },
    users: {
        type: new GraphQLList(UserType),
        args: {
            role: {
                type: GraphQLInt,
            },
        },
        resolve: async (parent, args, viewer) => {
            const users = await User.find(args);
            return users.map(user => {
                return Object.assign(user, { _id: user._id.toString() });
            });
        },
    },
};