import React from "react";

const downloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-download"
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
      <img src={data.banner} className="banner" />
      <img src={data.logo} className={`icon ${data.type}-icon`} />

      <div
        className="d-flex col-10"
        style={{ position: "absolute", justifyContent: "space-between" }}
      >
        <div class="card text-center section info">
          <div class={`card-header h2 ${data.type}-title`}>
            {data.institute}
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div class="card-footer d-flex bg-info">
            <div className="col-4">{data.timeline}</div>|
            <div className="col-4">{data.course}</div>|
            <div className="col-4">{data.score + " " + data.scoreType}</div>
          </div>
        </div>

        <div class="card text-center section files my-auto bg-light">
          <div class={`card-header`}>Documents</div>
          <div class="card-body p-0">
            <table className="table table-sm table-striped table-hover">
              <tbody>
                {data.certificates.map((cert,idx)=><tr key={idx}>
                  <td scope="col-auto">{cert.type}</td>
                  <td scope="col-1"><a className="btn btn-link p-0" href={`/certificates/${cert.file}`} download={cert.file}>{downloadIcon}</a></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSummary;
