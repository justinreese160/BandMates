const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  comment: {
    type: String
  },


});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
