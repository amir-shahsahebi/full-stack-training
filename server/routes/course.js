const express = require("express");
const Course = require("../model/courses");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
