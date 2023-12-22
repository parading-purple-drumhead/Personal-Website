import { useState } from "react";
import TagChip from "./TagChip";

const ProjectCard = ({
  index,
  title,
  description,
  image,
  tags,
}: {
  index: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
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
          <div className="tag-chips">
            {/* <span className="tag-chip">Firebase</span>
            <span className="tag-chip">Node</span>
            <span className="tag-chip">React</span> */}
            {tags.map((name, i) => (
              <TagChip name={name} key={i} />
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
