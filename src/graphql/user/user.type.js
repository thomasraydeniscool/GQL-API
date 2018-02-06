const User = `
    type User {
        _id: String!
        name: String!
        email: String!
        role: Int!
    }
    extend type Query {
        users: [User!]!
    }
    extend type Mutation {
        register(name: String!): User!
    }
`;

// we wrap it in a function
// to avoid strings deduplication
module.exports = [User];