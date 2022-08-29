const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "user must have username"]
        },
        email: {
            type: String,
            required: [true, "user must have valid email"],
        },
        // password: {
        //     type: String,
        //     required: [true, "user must have valid password"],
        // },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;