const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
 
  title: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
    
  // comment: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Comment',
  //   required: true
  // }],
  user_id: 
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  
  
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;