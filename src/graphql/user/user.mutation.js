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
    createUser: {
        type: UserType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: async (parent, args) => {
            const user = await new User(args).save();
            if (!user) return null;
            return Object.assign(user, { _id: user._id.toString() });
        }
    },
};