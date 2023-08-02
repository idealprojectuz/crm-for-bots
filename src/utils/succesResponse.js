const ErrorHandler = require("./errorHandle");
const succesResponse = async (res, data, next, count = null) => {
  try {
    const response = {
      ok: true,
      message: "Muvaffaqiyatli bajarildi",
      status: 200,
      ...(count !== null && { count }),
      data,
    };
    res.status(200).json(response);
  } catch (e) {
    next(new ErrorHandler(String(e), 500));
  }
};

module.exports = succesResponse;
