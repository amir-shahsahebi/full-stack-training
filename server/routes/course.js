const express = require("express");
// const Course = require("../model/courses")

const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course");

const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const courses = await Course.find({});
//     return res.status(200).json(courses);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// });

router.get("/", getAllCourses);
router.get("/:id", getCourse);
router.post("/", createCourse);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);

// router.route('/').get(getAllCourse).post(createCourse)

module.exports = router;
