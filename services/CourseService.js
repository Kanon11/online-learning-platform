
const Course = require('../models/Course');

const courseService = {
    get_courses: async () => {
        
        return await Course.find();
    },
    create_course: async (courseData) => {
        return await Course.create(courseData);
    },
    get_course_by_id: async (id) => {
        return await Course.findById(id);
    },
    filter_courses: async (filterParams) => {
        return await Course.find(filterParams);
    }
};

module.exports = courseService;
