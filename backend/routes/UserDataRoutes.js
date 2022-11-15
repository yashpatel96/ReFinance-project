const express = require("express");
const router = express.Router();
const getUserData = require("../controller/Users/LoginUserController");
const addUserData = require("../controller/Users/SignupUserController");

router.post("/", getUserData);
router.post("/signup", addUserData);

module.exports = router;
