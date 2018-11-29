const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  content: String,
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  picPath: String,
  picName: String
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;