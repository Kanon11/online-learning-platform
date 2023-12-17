
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  duration: Number,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
