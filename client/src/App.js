import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

// you can change the BrowserRouter name to Router (optional)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageCoursePage from "./components/ManageCoursePage";
import CreateCourse from "./components/CreateCourse";

/*
route => /course/react/hooks
route => /course/react
route => /course
*/

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/course/:slug" element={<ManageCoursePage />} />
          <Route path="/create-course" element={<CreateCourse />} />

          {/* we can use the * to match all the routes, in order to render a not found page for unavailable routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
