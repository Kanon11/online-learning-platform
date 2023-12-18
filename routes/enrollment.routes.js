const express = require("express");
const EnrollmentRoutes = express.Router();
const EnrollmentControllers = require("../controllers/Enrollment.Controller");

EnrollmentRoutes.post("/enrollments", EnrollmentControllers.createEnrollment);
EnrollmentRoutes.get("/enrollments", EnrollmentControllers.getAllEnrollments);


module.exports = EnrollmentRoutes;
