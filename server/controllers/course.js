const Course = require("../model/courses");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getCourse = async (req, res) => {
  try {
    const { id: courseID } = req.params;
    const course = await Course.findOne({ _id: courseID });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createCourse = async (req, res) => {
  const newCourse = req.body;
  try {
    // create method post the data to mongoDB
    const course = await Course.create(newCourse);
    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateCourse = async (req, res) => {
  const { id: _id } = req.params;
  const course = req.body;
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      { _id },
      { ...course, _id },
      { new: true }
    );
    res.status(200).json({ updatedCourse });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteCourse = async (req, res) => {
  const { id: courseID } = req.params;
  try {
    const course = await Course.findByIdAndDelete({ _id: courseID });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
