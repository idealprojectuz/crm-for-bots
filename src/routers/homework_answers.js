const express = require("express");
const router = express.Router();

const homework_asnwers = require("../controllers/homework_answers");

router.get("/", homework_asnwers.get);
router.get("/:id", homework_asnwers.getById);
router.delete("/:id", homework_asnwers.destroy);
router.post("/create", homework_asnwers.create);
router.put("/:id", homework_asnwers.update);
router.put("/check/:id", homework_asnwers.check);
module.exports = router;
