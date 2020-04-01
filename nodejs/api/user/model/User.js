const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("@/config/mongodb");

const keysSchema = mongoose.Schema({
    uuid: {
        type: String,
    },
    apiKey: {
        type: String,
    }
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Include your name"]
    },
    email: {
        type: String,
        required: [true, "Please Include your email"]
    },
    password: {
        type: String,
        required: [true, "Please Include your password"],
    },
    token: {
        type: String
    },
    apiKey: keysSchema
});

userSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, apiKey: user.apiKey.apiKey }, config.secret);
    user.token = token;
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid login details");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid login details");
    }

    return user;
};

userSchema.statics.isUser = async email => {
    return User.findOne({email});
};

const User = mongoose.model("User", userSchema);

module.exports = User;
