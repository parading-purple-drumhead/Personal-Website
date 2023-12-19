import data from "../data/db.json";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = data.projects;

  return (
    <div className="resume container pt-lg-5 pt-0">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <h1 className="my-lg-5 my-4">Projects</h1>

          <div className="project-list">
            {projects.map((project, i) => (
              <Link
                to={`/projects/${i + 1}`}
                style={{ textDecoration: "none", color: "#222" }}
                key={i}
              >
                <ProjectCard
                  index={i}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  techUsed={project.techUsed}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
