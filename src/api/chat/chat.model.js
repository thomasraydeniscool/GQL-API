const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const ChatSchema = new mongoose.Schema({
  participants: {
    type: [ObjectId],
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Chat', ChatSchema);