const fs = require("fs");
const path = require("path");

const removeMedia = (file) =>
  fs.existsSync(path.join(process.cwd(), "uploads", "images", file))
    ? fs.unlinkSync(path.join(process.cwd(), "uploads", "images", file))
    : false;

module.exports = removeMedia;
