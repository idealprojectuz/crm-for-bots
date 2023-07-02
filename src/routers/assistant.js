const uploadMiddleware = require("../middlewares/storage/upload.middleware");
const express = require("express");
const router = express.Router();
const updateuploadMiddleware = require("../middlewares/storage/updateimage.middleware");
const assistants = require("../controllers/assistants/index");
const isLogin = require("../middlewares/isLogin");

router.get("/", isLogin("administrator"), assistants.get);
router.get("/:id", isLogin("administrator"), assistants.getById);
router.delete("/:id", isLogin("administrator"), assistants.destroy);
router.post(
  "/create",
  isLogin("administrator"),
  uploadMiddleware,
  assistants.create
);
router.put("/:id", isLogin(), updateuploadMiddleware, assistants.update);
module.exports = router;
