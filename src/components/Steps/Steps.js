import React from "react";
import "./Steps.sass";
const Steps = () => {
  return (
    <div className="Steps">
      <h1 className="title">Simplified Claims</h1>
      <h3 className="sub-title">Easy as One, Two, Three</h3>
      <div className="Steps-grid-container sm-container">
        <div className="box">
          <div className="number-container blue">
            <p>1</p>
          </div>
          <h1>Report Claim</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            nunc vitae velit rutrum suscipit non et eros.
          </p>
        </div>
        <div className="box">
          <div className="number-container pink">
            <p>2</p>
          </div>
          <h1>Claim Processing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.</p>
        </div>
        <div className="box">
          <div className="number-container green">
            <p>3</p>
          </div>
          <h1>Final Settlement</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
