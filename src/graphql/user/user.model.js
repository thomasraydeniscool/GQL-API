import mongoose from 'mongoose';

import { ROLE_USER, ROLE_ADMIN } from './user.constants';

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