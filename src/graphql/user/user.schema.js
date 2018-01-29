const { 
    GraphQLSchema, 
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
    }),
});

module.exports = {
    user: {
        type: UserType,
        args: {
            id: {
                type: GraphQLString,
            },
        },
        resolve(parentValue, args) {
            return users.find(user => user.id === args.id);
        },
    },
    users: {
        type: new GraphQLList(UserType),
        resolve(parentValue, args) {
            return users;
        },
    },
};