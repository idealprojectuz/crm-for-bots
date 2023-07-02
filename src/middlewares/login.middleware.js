const validator = require("./validator");
const express = require("express");
const validateError = require("../utils/validationError");
const readData = require("../utils/readData");
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/errorHandle");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

module.exports = async (req, res, next) => {
  try {
    const { error, value } = validator.validate(req.body);
    if (error) {
      validateError(res, error, next);
      return;
    }
    value.phone = "998" + value.phone;
    const result = await readData("users", { phone: value.phone });
    if (result.length) {
      const checking = await bcrypt.compare(value.password, result[0].password);
      if (checking) {
        req.result = result[0];
        next();
        return;
      }
      throw new ErrorHandler("telefon raqam yoki parol xato", 404);
    }
    throw new ErrorHandler("user not found", 404);
  } catch (err) {
    next(new ErrorHandler(err.message, err.status));
  }

  // next();
};
