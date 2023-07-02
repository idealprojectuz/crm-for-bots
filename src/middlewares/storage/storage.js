const multer = require("multer");
const { v4: uuid4 } = require("uuid");
const path = require("path");

const maxSize = Number(process.env.FILE_SIZE || 5) * 1024 * 1024;
// const maxSize = 5 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = path.join(__dirname, "..", "..", "..", "uploads", "images");
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    if (file) {
      cb(null, uuid4() + `.${file.mimetype.split("/")[1]}`);
      return;
    }
    cb({
      error: "File_required_field",
      message: "image required field",
    });
  },
});

const fileFilter = function async(req, file, cb) {
  try {
    if (
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png"
    ) {
      cb(null, true);
    } else {
      cb(
        {
          error: "FILE_TYPE",
          message: "File type not supported",
        },
        false
      );
    }
  } catch (error) {
    console.log(error.message);
    cb({
      error: "FileUploadError",
      message: "Faylni yuklashda xatolik yuz berdi.",
    });
  }
};

const upload = multer({
  fileFilter: fileFilter,
  storage: storage,
  limits: {
    fileSize: maxSize,
  },
}).single("image");
module.exports = upload;
