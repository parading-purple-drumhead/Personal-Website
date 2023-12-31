import me from "../assets/me.jpg";
import data from "../data/db.json";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
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

  useEffect(() => {
    const navbar = document.getElementById("navbarSupportedContent");
    const navbarTitle = document.getElementById("navbar-title");

    // Add an event listener for the 'hidden' event
    navbar?.addEventListener("hidden.bs.collapse", function () {
      navbarTitle!.style.display = "block";
    });

    navbar?.addEventListener("show.bs.collapse", function () {
      navbarTitle!.style.display = "none";
    });
  }, []);

  return (
    // Top navbar for tablets and phones
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-lg-none px-3">
      <div className="container-fluid">
        <h3 id="navbar-title">Sudhanshu Basuroy</h3>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row">
            <div className="col-8 offset-2 col-sm-5 offset-sm-1 col-md-4 offset-md-2">
              <img
                src={me}
                className="img-fluid mb-4"
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="col-sm-6 text-center">
              <h3 className="mb-3">Sudhanshu Basuroy</h3>
              <div className="nav-links text-center mb-2">
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

              <h5 className="text-center mb-3">Contact Me</h5>
              <div className="row social-links px-4">
                <div className="col-3 offset-1 social-link text-center">
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
                <div className="col-3 social-link text-center">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
