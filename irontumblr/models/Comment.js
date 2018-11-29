const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  content: String,
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  imagePath: String,
  imageName: String
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;