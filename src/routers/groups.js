const uploadMiddleware = require("../middlewares/storage/upload.middleware");
const express = require("express");
const router = express.Router();
const isLogin = require("../middlewares/isLogin");

const groups = require("../controllers/groups");
const uploadupdateMiddleware = require("../middlewares/storage/uploadupdate.middleware");

router.get("/", isLogin("administrator"), groups.get);
router.get("/getme", isLogin("assistants"), groups.getByme);
router.get("/:id", isLogin(), groups.getById);
router.delete("/:id", isLogin("administrator"), groups.destroy);
router.post(
  "/create",
  isLogin("administrator"),
  uploadMiddleware,
  groups.create
);
router.put(
  "/:id",
  isLogin("administrator"),
  uploadupdateMiddleware,
  groups.update
);
module.exports = router;
