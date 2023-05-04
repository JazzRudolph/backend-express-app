const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add contact name to continue"],
    },
    email: {
        type: String,
        required: [true, "Please add contact email address to continue"],
    },
    phone: {
        type: String,
        required: [true, "Please add contact phone number to continue"],
    },
},
    {
    timestamp: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);