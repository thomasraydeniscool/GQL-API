const User = `
    type User {
        _id: ID!
        name: String
        email: String!
        role: Int!
    }
    type Token {
        token: String!,
        user: User!,
        expiration: String!,
    }
    extend type Query {
        users: [User]
    }
    extend type Mutation {
        register(email: String!, name: String!, password: String!): Token!
        login(email: String!, password: String!): Token!
    }
`;

// we wrap it in a function
// to avoid strings deduplication
module.exports = [User];