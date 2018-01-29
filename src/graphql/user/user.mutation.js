const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const User = require('./user.model');
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
            if (user) user._id = user._id.toString();
            return user;
        }
    },
};