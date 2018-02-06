
const Message = `
    type Message {
        _id: ID!
        sender: User!
        body: String!
    }
`;

// we wrap it in a function
// to avoid strings deduplication
module.exports = () => [Message];