const EnrollmentService = require('../services/EnrollmentService');

const EnrollmentController = {
    createEnrollment: async (req, res) => {
        try {
            const enrollmentData = req.body;
            const validation = await EnrollmentService.validate_enrollment(enrollmentData);

            if (!validation.isValid) {
                return res.status(400).json({ message: 'Enrollment validation failed' });
            }

            const result = await EnrollmentService.enroll_student(enrollmentData);
            return res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ 'message': error.message ||'error on createEnrollment'})
        }
    }
}
module.exports = EnrollmentController;