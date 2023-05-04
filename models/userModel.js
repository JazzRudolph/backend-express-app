const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Missing Username"],
    },
    email: {
        type: String,
        required: [true, "Missing Email"],
        unique: [true, "That email is already being used."]
    },
    password: {
        type: String,
        require: [true, "Missing Password"]
    }
},
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);