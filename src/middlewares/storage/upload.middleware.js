const upload = require("./storage");
const ErrorHandler = require("../../utils/errorHandle");
module.exports = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        ok: false,
        message: err,
        status: 400,
      });
    }
    if (req.file) {
      next();
      return;
    }
    next(new ErrorHandler("image field is required", 400));
  });
};
