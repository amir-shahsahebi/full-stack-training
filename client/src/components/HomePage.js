import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h3>home page</h3>
      {/* <a href="/about"> Go To About Page</a> */}
      <Link to="/about"> Go To About Page </Link>
    </div>
  );
};

export default HomePage;
