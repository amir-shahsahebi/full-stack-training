import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteCourse } from "../apis/courseApi";

function CourseList({ courseData }) {
  //   console.log(courseData);
  const navigate = useNavigate();
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
            <th>Slug</th>
          </tr>
        </thead>
        <tbody>
          {courseData?.map((course) => {
            return (
              <tr key={course._id}>
                <td>
                  <Link state={course._id} to={`/course/${course.slug}`}>
                    {course.title}
                  </Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>{course.slug}</td>
                <td>
                  <Button
                    onClick={() => {
                      deleteCourse(course._id);
                      navigate(0);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CourseList;
