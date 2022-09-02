const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "post title cannot be empty"]
        },
        image: {
        type: String,
        required: [true, "image cannot be empty"],
        },
        likes: {
            type: Number,
            default: 0,
            min: [0, 'amount of likes cannot be negative']
        },
        likedBy: [String],
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;