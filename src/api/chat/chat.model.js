const mongoose = require('mongoose');

const Message = require('./message.model');

const ObjectId = mongoose.Schema.ObjectId;

const ChatSchema = new mongoose.Schema({
  first: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  seccond: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
});

ChatSchema.virtual('messages', {
  ref: 'Message',
  localField: '_id',
  foreignField: 'chat',
});

module.exports = mongoose.model('Chat', ChatSchema);