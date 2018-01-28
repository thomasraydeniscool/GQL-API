const { 
    GraphQLSchema, 
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const users = [
    { id: '1', name: 'Thomas Rayden' },
    { id: '2', name: 'Duncan Rayden' },
];

const UserType = new GraphQLObjectType({
    name: 'user',
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
    type: UserType,
    args: {
        id: {
            type: GraphQLString,
        },
    },
    resolve(parentValue, args) {

    },
};