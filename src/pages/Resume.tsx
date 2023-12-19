import resume from "./../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="resume container pt-lg-5 pt-0">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <h1 className="my-lg-5 my-2">Resume</h1>
          <div className="row mb-3">
            <div className="col-12">
              <a
                href={resume}
                target="_blank"
                className="btn btn-primary shadow-sm"
                style={{ float: "right" }}
              >
                Download my resume
              </a>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-12">
              <iframe
                src={resume}
                style={{ width: "100%", height: "100vh", border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
