import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseList({ courseData }) {
  //   console.log(courseData);

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
              <tr key={course.id}>
                <td>
                  <Link state={course.id} to={`/course/${course.slug}`}>
                    {course.title}
                  </Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>{course.slug}</td>
                <td>
                  <Button
                    onClick={() =>
                      console.log(`${course.title} has been deleted`)
                    }
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
