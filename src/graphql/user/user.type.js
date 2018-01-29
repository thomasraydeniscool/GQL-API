const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        role: {
            type: GraphQLInt,
        },
    }),
});