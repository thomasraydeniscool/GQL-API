const mongoose = require('mongoose');

const { ROLE_USER, ROLE_ADMIN } = require('./user.constants');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    enum: [ROLE_USER, ROLE_ADMIN],
    default: ROLE_USER,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);