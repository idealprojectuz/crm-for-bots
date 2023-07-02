const express = require("express");
const router = express.Router();
const isLogin = require("../middlewares/isLogin");
const course = require("../controllers/course");

router.get("/", isLogin(), course.get);
router.get("/:id", isLogin(), course.getById);
router.delete("/:id", isLogin("administrator"), course.destroy);
router.post("/create", isLogin("administrator"), course.create);
router.put("/:id", isLogin("administrator"), course.update);
module.exports = router;
