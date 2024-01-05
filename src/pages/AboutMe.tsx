import data from "../data/db.json";

const AboutMe = () => {
  return (
    <div className="about-me container pt-lg-5 pt-0">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <h1 className="my-lg-5 my-4">About Me</h1>
          {data.about.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5"
              style={{
                fontSize: "1.1rem",
                textAlign: "justify",
                lineHeight: "2.5rem",
              }}
            >
              {paragraph}
            </p>
          ))}
          <p
            className="mb-5"
            style={{
              fontSize: "1.1rem",
              textAlign: "justify",
              lineHeight: "2.5rem",
            }}
          >
            You may reach out to me at{" "}
            <a className="main-text" href={`mailto:${data.email}`}>
              {data.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
