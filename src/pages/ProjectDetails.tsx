import { Link, useParams } from "react-router-dom";
import data from "../data/db.json";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (id === undefined) {
    // Handle the case where id is undefined, e.g., redirect or show an error message
    return <div>Page not found</div>;
  }

  const project: {
    title: string;
    description: string;
    image: string;
    techUsed: string[];
    website: string;
    github: string;
  } = data.projects[parseInt(id) - 1];

  if (!project) {
    return (
      <div className="text-center pt-5">
        Page not found. Return to <Link to="/projects">Projects</Link>
      </div>
    );
  }

  const getTechUsedString = (techUsed: string[]) => {
    let techUsedString = "";

    techUsed.forEach((name, i) => {
      if (i !== techUsed.length - 1) techUsedString += `${name}, `;
      else techUsedString += name;
    });

    return techUsedString;
  };

  return (
    <div className="project-details container pt-lg-5 pt-0 mb-5">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <h1 className="my-lg-5 my-4 main-text">{project.title}</h1>
          <div className="row my-3">
            <div className="col-12 d-block d-md-none mb-3">
              <img src={project.image} className="img-fluid rounded" />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-3">Website Link:</p>
                </div>
                <div className="col-sm-8">
                  <p className="mb-3">
                    <a href="#">{project.website}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-3">GitHub:</p>
                </div>
                <div className="col-sm-9">
                  <p className="mb-3">
                    <a href="#">{project.github}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-3">Tech Used:</p>
                </div>
                <div className="col-sm-9">
                  <p className="mb-3" style={{ color: "#757575" }}>
                    {getTechUsedString(project.techUsed)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img src={project.image} className="img-fluid rounded" />
            </div>
          </div>
          <div className="row">
            <p style={{ textAlign: "justify" }}>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
