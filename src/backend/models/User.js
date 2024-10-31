const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    fullname: { type: String, required: true, unique: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    coverPicture: { type: String },
    about: { type: String },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', User);
