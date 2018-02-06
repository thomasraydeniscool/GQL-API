const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const MessageSchema = new mongoose.Schema({
  sender: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  chat: {
    type: ObjectId,
    ref: 'Chat',
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Message', MessageSchema);