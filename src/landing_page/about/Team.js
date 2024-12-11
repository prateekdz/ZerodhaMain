import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/prateek.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Prateek Dwivedi</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Prateek is a skilled web developer and Certified Ethical Hacker (CEH) with an engineering background. Specializing in full-stack website development, I combine technical expertise with a strong foundation in cybersecurity to deliver innovative and secure digital solutions.
          </p>
          <p>
            He also contributed to community development through volunteering with Pratham Education Foundation.
          </p>
          <p>Playing Chess is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;