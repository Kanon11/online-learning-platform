
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true

  },
  description: String,
  instructor: String,
  duration: {
    type: Number,
    required: true

  },
  price: {
    type: Number,
    required: true

  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
