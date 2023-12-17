const express = require("express");
const CourseRoutes = express.Router();
const CourseControllers = require("../controllers/Course.Controller");

CourseRoutes.get("/courses", CourseControllers.getAllCourses);
CourseRoutes.post("/courses", CourseControllers.createCourse);
CourseRoutes.get("/courses/:id", CourseControllers.getCourseById);

module.exports = CourseRoutes;
