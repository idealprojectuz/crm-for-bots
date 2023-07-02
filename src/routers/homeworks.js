const express = require("express");
const router = express.Router();
const isLogin = require("../middlewares/isLogin");
const homeworks = require("../controllers/homework");

router.get("/", isLogin("assistants"), homeworks.get);
router.get("/:id", isLogin("assistants"), homeworks.getById);
router.delete("/:id", isLogin("assistants"), homeworks.destroy);
router.post("/create", isLogin("assistants"), homeworks.create);
router.put("/:id", isLogin("assistants"), homeworks.update);
module.exports = router;
