const express = require("express");
const router = express.Router();
const userHandler = require("@/api/user/handler/userHandler");
const auth = require("@/middleware/auth");

router.post("/register", userHandler.registerNewUser);
router.post("/login", userHandler.loginUser);
router.get("/me", auth, userHandler.getUserDetails);

module.exports = router;
