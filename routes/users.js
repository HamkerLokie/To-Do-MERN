const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, authChecker } = require("../controllers/AuthController");

router.post("/register", registerUser );

router.post("/login", loginUser );


router.delete("/logout", logoutUser );

router.get("/authchecker", authChecker );

module.exports = router;
