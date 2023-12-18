
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    studentName: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
