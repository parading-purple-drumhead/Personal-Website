import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import SideNav from "./components/SideNav";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="landing bg-light container-fluid">
      <div className="row nav-menus">
        {/* Left panel for sidenav */}
        <div className="col-lg-2 d-none d-lg-block">
          <SideNav />
        </div>
        {/* Navbar for mobile displays */}
        <Navbar />
        {/* Right panel for pages */}
        <div
          className="col-lg-10"
          style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
