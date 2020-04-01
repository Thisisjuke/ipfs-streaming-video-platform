const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Include your name"]
    }
});

videoSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

videoSchema.statics.findByCredentials = async hash => {
    const user = await Video.findOne({ hash });
    if (!user) {
        throw new Error("Invalid login details");
    }

    return user;
};

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
