import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function ManageCoursePage(props) {
  // the useLocation hook is from react-router-dom and is can get the pathname of the url or the state (that has been passed through the Link from the CoursePage component)
  const location = useLocation();
  console.log(location);
  
  // use for query strings
  const [searchParams] = useSearchParams({});

  // console.log(searchParams.get("name"));
  const [updatedCourse, setUpdatedCourse] = useState({
    title: "",
    slug: "",
    authorId: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedCourse);
    setUpdatedCourse({
      title: "",
      slug: "",
      authorId: "",
      category: "",
    });
  };

  return (
    <div>
      <Link to="/courses">courses</Link>
      <h2>manage course</h2>
      <h4>your state that has come from your link is : {location.state}</h4>
      <div>
        <span style={{ color: "red" }}>
          this is the pathname and the params:
        </span>
        {location.pathname}
      </div>

      <span style={{ color: "blue" }}>this is the query string:</span>
      {searchParams.get("name")}

      <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <div>
          <label htmlFor="title">course title:</label>
          <input
            type="text"
            name="title"
            value={updatedCourse.title}
            onChange={(e) => {
              setUpdatedCourse({ ...updatedCourse, title: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="slug">course slug:</label>
          <input
            type="text"
            name="slug"
            value={updatedCourse.slug}
            onChange={(e) => {
              setUpdatedCourse({ ...updatedCourse, slug: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="authorId">course AuthorId:</label>
          <input
            type="text"
            name="authorId"
            value={updatedCourse.authorId}
            onChange={(e) => {
              setUpdatedCourse({ ...updatedCourse, authorId: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="category">course category:</label>
          <input
            type="text"
            name="category"
            value={updatedCourse.category}
            onChange={(e) => {
              setUpdatedCourse({ ...updatedCourse, category: e.target.value });
            }}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default ManageCoursePage;
