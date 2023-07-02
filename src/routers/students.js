const express = require("express");
const router = express.Router();
const isLogin = require("../middlewares/isLogin");
const students = require("../controllers/students");
const uploadupdateMiddleware = require("../middlewares/storage/updateimage.middleware");

router.get("/", isLogin(), students.get);
router.get("/:id", isLogin(), students.getById);
router.delete("/:id", isLogin("administrator"), students.destroy);
router.post(
  "/create",
  isLogin("administrator"),
  uploadupdateMiddleware,
  students.create
);
router.put(
  "/:id",
  isLogin("administrator"),
  uploadupdateMiddleware,
  students.update
);
module.exports = router;
