const succesResponse = require("../../utils/succesResponse");
const readData = require("../../utils/readData");
const ErrorHandler = require("../../utils/errorHandle");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const token = await jwt.sign(
      {
        userid: req.result.id,
        role: req.result.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    const result = { token: token, role: req.result.role };
    succesResponse(res, result, next);
  } catch (error) {
    console.log(error.message);
  }
};
