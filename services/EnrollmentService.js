
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

const enrollmentService = {
    enroll_student: async (enrollmentData) => {
        
        return await Enrollment.create(enrollmentData);
    },
    validate_enrollment: async (enrollmentData) => {
        const { studentName, courseId } = enrollmentData;


        const courseExists = await Course.findById(courseId);
        if (!courseExists) {
            return { isValid: false, message: 'Course does not exist' };
        }


        if (!studentName || typeof studentName !== 'string') {
            return { isValid: false, message: 'Invalid student name' };
        }

        return { isValid: true };
    }
};

module.exports = enrollmentService;
