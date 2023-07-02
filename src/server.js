require("dotenv").config();
const cors = require("cors");
const express = require("express");
const Errorhandlers = require("./utils/errorHandle");
const ErrorHandler = require("./middlewares/error/errorHandler");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use("/api/auth", require("./routers/auth"));
app.use("/api/assistants", require("./routers/assistant"));
app.use("/api/courses", require("./routers/course"));
app.use("/api/groups", require("./routers/groups"));
app.use("/api/homeworks", require("./routers/homeworks"));
app.use("/api/homework_asnwers", require("./routers/homework_answers"));
app.use("/api/students", require("./routers/students"));
app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    type: "CRM SYSTEM BACKEND",
    documentation: "https://documenter.getpostman.com/view/22823127/2s93z6eQ8h",
  });
});

// 404 page
app.all("/*", (req, res) => {
  res.status(404).json({
    ok: false,
    message: "404 not found",
    status: 404,
  });
});
app.use(ErrorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
