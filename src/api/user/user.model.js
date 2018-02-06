const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';

const { ROLE_USER, ROLE_ADMIN } = require('./user.constants');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    sparse: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address'],
  },
  password: {
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

/**
 * Hash saved password if password is modified or new.
 */
UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    bcrypt.genSalt(5)
      .then(salt => bcrypt.hash(this.password, salt))
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(next);
  }
});

/**
 * Hash password and compare against saved hash.
 */
UserSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', UserSchema);