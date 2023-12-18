const CourseService = require('../services/CourseService');

const CourseControllers = {
    getAllCourses:async(req, res) => {
        try {
            
            let result = await CourseService.get_courses();
            return res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ message: error.message || 'error on getAllCourses' });
        }
    },
    createCourse: async (req, res) => {
        try {
            let result = await CourseService.create_course(req.body);
            return res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ message: error.message || 'error on createCourse' });
        }
    },
    getCourseById: async (req, res) => {
        try {
            let id = req.params.id
            let result = await CourseService.get_course_by_id(id);
            return res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ message: error.message || 'error on getCourseById'});
        }
    }
}
module.exports = CourseControllers;