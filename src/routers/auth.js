const express = require("express");
const router = express.Router();
const loginMiddleware = require("../middlewares/login.middleware");
const loginController = require("../controllers/auth/login");
router.post("/login", loginMiddleware, loginController);

module.exports = router;
