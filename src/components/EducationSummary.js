import React from "react";

const downloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-download"
    viewBox="0 0 16 16"
  >
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
  </svg>
);

const EducationSummary = ({ data }) => {
  return (
    <div className="edu-cont bg-success">
      <div className="vignette"></div>
      <img src={data.banner} className="banner" loading="lazy" />
      <div>
        <img
          src={data.logo}
          className={`icon ${data.type}-icon`} loading="lazy"
        />
      </div>
      <div
        className="d-flex col-10"
        style={{ position: "absolute", justifyContent: "space-between" }}
      >
        <div className="card text-center section info">
          <div className={`card-header h2 ${data.type}-title`}>
            {data.institute}
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            
          </div>
          <div className="card-footer d-flex bg-info">
            <div className="col-4">{data.timeline}</div>|
            <div className="col-4">{data.course}</div>|
            <div className="col-4">{data.score + " " + data.scoreType}</div>
          </div>
        </div>

        <div className="card text-center section files my-auto bg-light">
          <div className={`card-header`}>Documents</div>
          <div className="card-body p-0">
            <table className="table table-sm table-striped table-hover">
              <tbody>
                {data.certificates.map((cert, idx) => (
                  <tr key={idx}>
                    <td scope="col-auto">{cert.type}</td>
                    <td scope="col-1">
                      <a
                        className="btn btn-link p-0"
                        href={`/certificates/${cert.file}`}
                        download={cert.file}
                      >
                        {downloadIcon}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSummary;
