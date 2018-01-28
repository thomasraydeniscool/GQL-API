const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const user = require('../user/user.schema');

const RootQuery = new GraphQLObjectType({
    name: 'root',
    fields: {
        user,
    }, 
});

module.exports = new GraphQLSchema({
    
});