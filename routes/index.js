const express = require("express");
const CourseRoutes = require("./course.routes"); 

const EnrollmentRoutes = require("./enrollment.routes");

const appRouter = express.Router();

appRouter.use(CourseRoutes);
appRouter.use(EnrollmentRoutes);

module.exports = appRouter;
