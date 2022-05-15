const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must have course name"],
    maxlength: [20, "course must have less than 20 characters"],
  },
  category: String,
  slug: String,
  authorID: Number,
});

module.exports = mongoose.model("course", CourseSchema);
