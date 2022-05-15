import axios from "axios";

const baseUrl = "http://localhost:5500/courses";

export const getAllCourses = async () => {
  try {
    const courses = await axios.get(baseUrl);
    return courses;
  } catch (error) {
    console.log(error);
  }
};
