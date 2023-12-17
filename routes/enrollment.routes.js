const express = require("express");
const EnrollmentRoutes = express.Router();
const EnrollmentControllers = require("../controllers/Enrollment.Controller");

EnrollmentRoutes.get("/enrollments", EnrollmentControllers.createEnrollment);


module.exports = EnrollmentRoutes;
