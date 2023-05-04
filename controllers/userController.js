const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All Fields Required");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("This user information is already being used");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }
    res.json({ message: "Register User" });
});

//@desc Login  user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login User" });
});

//@desc Current  user info
//@route POST /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current User Info" });
});




module.exports = { registerUser, loginUser, currentUser };