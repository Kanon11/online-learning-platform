var express = require("express");
var dotenv = require("dotenv");
var appRouter = require("./routes/index.js");
dotenv.config();
var app = express();
app.use(express.json());


app.use("/api/v1", appRouter);

module.exports = app;
