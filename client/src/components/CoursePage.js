import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList";
// import courseData from "./data";
import { getAllCourses } from "../apis/courseApi";

const CoursePage = () => {
  //   console.log(courseData);

  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // getAllCourses().then(({ data }) => console.log(data));
    getAllCourses().then(({ data }) => setCourses(data.courses));
  }, []);

  return (
    <div>
      <Button onClick={() => navigate("/create-course")}>create course</Button>
      <h3>course page</h3>
      <CourseList courseData={courses} />
    </div>
  );
};

export default CoursePage;
