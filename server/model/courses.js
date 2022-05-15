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

// the first argument is the model name and the second one is the schema that we want to build a model on top of.
module.exports = mongoose.model("Course", CourseSchema);
