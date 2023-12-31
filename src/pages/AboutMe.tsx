import data from "../data/db.json";

const AboutMe = () => {
  return (
    <div className="about-me container pt-5">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <h1 className="my-5 ">About Me</h1>
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
