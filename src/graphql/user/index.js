const UserResolvers = require('./user.resolvers');
const UserType = require('./user.type');

exports.type = () => UserType;
exports.resolvers = UserResolvers;