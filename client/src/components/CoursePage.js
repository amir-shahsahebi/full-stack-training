import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList";
import courseData from "./data";

const CoursePage = () => {
  //   console.log(courseData);

  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/create-course")}>create course</Button>
      <h3>course page</h3>
      <CourseList courseData={courseData} />
    </div>
  );
};

export default CoursePage;
