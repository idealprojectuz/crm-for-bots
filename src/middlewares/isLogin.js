const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandle");

const isLogin = (role = null) => {
  return async (req, res, next) => {
    try {
      let token = await req.headers.authorization;
      if (token) {
        token = token.split(" ")[1];
        req.loggeduser = await jwt.verify(token, process.env.SECRET_KEY);
        if (role) {
          if (req.loggeduser.role == role) {
            next();
            return;
          }
          throw new ErrorHandler(
            `Permission denied your role in the ${req.loggeduser.role}`,
            401
          );
        }
        next();
        return;
      }
      throw new ErrorHandler("Token is invalid or missing from request", 403);
    } catch (err) {
      next(new ErrorHandler(err.message, err.status));
    }
  };
};

module.exports = isLogin;
