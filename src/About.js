import React from "react";
import hk from "./hk.webp";

const About = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="container">
        <div className="p">
          <div className="contain">
            <h1 className="m">grow your business with</h1>
            <h2 className="m">harshank kanungo</h2>
            <p className="m">
              {" "}
              we are team of frontend developermaking websites
            </p>
            <button className="m btn">get start</button>
          </div>
          <div className="show">
            <img src={hk} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
