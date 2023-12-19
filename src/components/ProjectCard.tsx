import { useState } from "react";
import TechChip from "./TechChip";

const ProjectCard = ({
  index,
  title,
  description,
  image,
  techUsed,
}: {
  index: number;
  title: string;
  description: string;
  image: string;
  techUsed: string[];
}) => {
  const [isLeftCard] = useState<boolean>(index % 2 == 0);

  return (
    <div className="bg-white mb-5 shadow-sm project">
      <div className="row" id={index.toString()}>
        <div className={isLeftCard ? "col-lg-6 p-0" : "col-lg-6 p-0 d-lg-none"}>
          <img src={image} className="project-image" />
        </div>
        <div className="col-lg-6 py-2 px-4 py-sm-3 px-sm-5">
          <h4 className="main-text">{title}</h4>
          <p className="project-description">{description}</p>
          <div className="tech-chips">
            {/* <span className="tech-chip">Firebase</span>
            <span className="tech-chip">Node</span>
            <span className="tech-chip">React</span> */}
            {techUsed.map((name, i) => (
              <TechChip name={name} key={i} />
            ))}
          </div>
        </div>
        {isLeftCard ? (
          ""
        ) : (
          <div className="col-lg-6 p-0 d-none d-lg-block">
            <img src={image} className="project-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
