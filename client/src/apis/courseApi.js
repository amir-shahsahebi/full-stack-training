import axios from "axios";

const baseUrl = "http://localhost:5000/courses";

export const getAllcourses = () => {
  try {
    const courses = axios.get(baseUrl + "/");
    return courses;
  } catch (error) {
    console.log(error);
  }
};
