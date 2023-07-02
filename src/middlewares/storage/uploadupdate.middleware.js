const upload = require("./storage");
const ErrorHandler = require("../../utils/errorHandle");
module.exports = (req, res, next) => {
  try {
    upload(req, res, function (err) {
      if (err) {
        throw new ErrorHandler(err.message, 500);
      }
      next();
      return;
    });
  } catch (error) {
    next(new ErrorHandler("image field is required", error.status));
  }
};
