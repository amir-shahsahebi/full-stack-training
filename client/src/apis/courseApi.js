import axios from "axios";

// const baseUrl = "http://localhost:5500/courses";
const baseUrl = "https://courses-training.herokuapp.com/courses";

export const getAllCourses = async () => {
  try {
    const courses = await axios.get(baseUrl);
    return courses;
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (id, course) => {
  try {
    const courses = await axios.patch(`${baseUrl}/${id}`, course);
    return courses;
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = async (course) => {
  try {
    const courses = await axios.post(baseUrl, course);
    return courses;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (id) => {
  try {
    const courses = await axios.delete(`${baseUrl}/${id}`);
    return courses;
  } catch (error) {
    console.log(error);
  }
};
