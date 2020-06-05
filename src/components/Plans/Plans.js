import React from "react";
import "./Plans.sass";
import business from "../../img/business-insurance.svg";
import car from "../../img/car-insurance.svg";
import home from "../../img/home-insurance.svg";
import life from "../../img/life-insurance.svg";
import travel from "../../img/travel-insurance.svg";
import other from "../../img/other-insurance.svg";

const Plans = () => {
  return (
    <div className="Plans">
      <div className="Plans-container sm-container">
        <h1 className="title">Choose your Insurance</h1>
        <h3 className="sub-title">Keep Your Life Smile, Safe, and Wealthy</h3>
        <div className="Plans-grid-container">
          <div className="plan">
            <div className="img-container blue">
              <img src={home} alt="Home Insurance" />
            </div>
            <h1>Home Insurance</h1>
            <p>
              Insurance can have various effects on society through the way that
              it changes who bears the cost of losses and damage.
            </p>
          </div>
          <div className="plan">
            <div className="img-container pink">
              <img src={car} alt="Car Insurance" />
            </div>
            <h1>Car Insurance</h1>
            <p>
              Insurance can have various effects on society through the way that
              it changes who bears the cost of losses and damage.
            </p>
          </div>
          <div className="plan">
            <div className="img-container green">
              <img src={life} alt="Life Insurance" />
            </div>
            <h1>Life Insurance</h1>
            <p>
              Insurance can have various effects on society through the way that
              it changes who bears the cost of losses and damage.
            </p>
          </div>
          <div className="plan">
            <div className="img-container yellow">
              <img src={business} alt="Business Insurance" />
            </div>
            <h1>Business Insurance</h1>
            <p>
              Insurance can have various effects on society through the way that
              it changes who bears the cost of losses and damage.
            </p>
          </div>
          <div className="plan">
            <div className="img-container brown">
              <img src={travel} alt="Travel Insurance" />
            </div>
            <h1>Travel Insurance</h1>
            <p>
              Insurance can have various effects on society through the way that
              it changes who bears the cost of losses and damage.
            </p>
          </div>
          <div className="plan">
            <div className="img-container purple">
              <img src={other} alt="Other Insurance" />
            </div>
            <h1>Other Insurance</h1>
            <p>
              Insurance can have various effects on society through the way that
              it changes who bears the cost of losses and damage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
