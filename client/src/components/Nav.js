import { NavLink } from "react-router-dom";
// NavLink is also used for this feature that we can change the color of links when click and move on it
const Nav = () => {
  let activeStyle = {
    color: "red",
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/courses"
            style={({ isActive }) => (isActive ? activeStyle : undefined)} // isActive is a property of navLink that is true if we are on that link and false in else condition
          >
            courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span style={isActive ? activeStyle : undefined}>home</span> // because we dons use "{}" for arrow func, so we do not use return
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
