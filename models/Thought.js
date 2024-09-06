const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Define the Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [Reaction],
});

// Create the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
