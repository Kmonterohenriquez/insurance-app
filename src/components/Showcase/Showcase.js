import React from "react";
import "./Showcase.sass";
import showcase_img from "../../img/showcase_img.svg";

const Showcase = () => {
  return (
    <div className="Showcase">
      <div className="Showcase-container container">
        <div className="left-side">
          <h3>Hello, We are fincorp</h3>
          <h1>Insurance <br/> made easy.</h1>
          <button>Get your free Quote</button>
        </div>
        <div className="right-side">
          <img src={showcase_img} alt="showcase" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
