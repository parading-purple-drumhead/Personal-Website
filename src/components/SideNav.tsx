import me from "../assets/me.jpg";
import data from "../data/db.json";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SideNav = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsAbout(true);
      setIsResume(false);
      setIsProjects(false);
    } else if (location.pathname === "/resume") {
      setIsAbout(false);
      setIsResume(true);
      setIsProjects(false);
    } else {
      setIsAbout(false);
      setIsResume(false);
      setIsProjects(true);
    }
  }, [location.pathname]);

  const [isAbout, setIsAbout] = useState<boolean>(true);
  const [isResume, setIsResume] = useState<boolean>(false);
  const [isProjects, setIsProjects] = useState<boolean>(false);

  return (
    // Side Panel for desktops
    <div
      className="side-column bg-white pt-5"
      style={{ height: "100vh", paddingRight: 0 }}
    >
      <div className="row mb-4">
        <div className="col-8 offset-2">
          <img
            src={me}
            className="img-fluid"
            style={{ borderRadius: "100%" }}
          />
        </div>
      </div>

      <h5 className="text-center mb-5">{data.name}</h5>
      <div className="nav-links text-center mb-5">
        <Link
          to={"/"}
          onClick={() => {
            setIsAbout(true);
            setIsResume(false);
            setIsProjects(false);
          }}
        >
          <h6
            className={
              isAbout
                ? "text-secondary nav-link active"
                : "text-secondary nav-link"
            }
          >
            About Me
          </h6>
        </Link>
        <br />
        <br />
        <Link
          to={"/resume"}
          onClick={() => {
            setIsAbout(false);
            setIsResume(true);
            setIsProjects(false);
          }}
        >
          <h6
            className={
              isResume
                ? "text-secondary nav-link active"
                : "text-secondary nav-link"
            }
          >
            Resume
          </h6>
        </Link>
        <br />
        <br />
        <Link
          to={"/projects"}
          onClick={() => {
            setIsAbout(false);
            setIsResume(false);
            setIsProjects(true);
          }}
        >
          <h6
            className={
              isProjects
                ? "text-secondary nav-link active"
                : "text-secondary nav-link"
            }
          >
            Projects
          </h6>
        </Link>
      </div>

      <h5 className="text-center mb-4">Contact Me</h5>
      <div className="row social-links px-4">
        <div className="col-4 social-link text-center">
          <a href={`mailto:${data.email}`} target="_blank">
            <div
              className="bg-success text-white mx-auto"
              style={{
                height: "2rem",
                width: "2rem",
                padding: "0.25rem",
                borderRadius: "50%",
              }}
            >
              <i className="bi-envelope"></i>
            </div>
          </a>
        </div>
        <div className="col-4 social-link text-center">
          <a href={data.linkedin} target="_blank">
            <div
              className="bg-primary text-white mx-auto"
              style={{
                height: "2rem",
                width: "2rem",
                padding: "0.25rem",
                borderRadius: "50%",
              }}
            >
              <i className="bi-linkedin"></i>
            </div>
          </a>
        </div>
        <div className="col-4 social-link text-center">
          <a href={data.github} target="_blank">
            <div
              className="bg-dark text-white mx-auto"
              style={{
                height: "2rem",
                width: "2rem",
                padding: "0.25rem",
                borderRadius: "50%",
              }}
            >
              <i className="bi-github"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
