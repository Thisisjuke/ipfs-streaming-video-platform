const User = require("../model/User");
const uuidAPIKey = require('uuid-apikey');

exports.registerNewUser = async (req, res) => {
    try {
        if (await User.isUser(req.body.email)) {
            return res.status(409).json({
                message: "Email already in use"
            });
        }
        const apiKey = uuidAPIKey.create();
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            apiKey
        });
        console.log(user)
        const data = await user.save();
        const token = await user.generateAuthToken();
        res.status(201).json({ data, token, apiKey });
    } catch (err) {
        res.status(400).json({ err: err });
    }
};

exports.loginUser = async (req, res) => {
    console.log(req.headers.authorization);
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" });
        }
        const token = await user.generateAuthToken();
        const profile = user.toJSON()
        delete profile.password
        res.status(201).json({ user: profile, token });
    } catch (err) {
        res.status(400).json({ err: err });
    }
};

exports.getUserDetails = async (req, res) => {
    await res.json(req.userData);
};
