import React from "react";
import "./Info.sass";
import check from "../../img/tick.png";
import family_pic from "../../img/health-family-illustration.svg";
const Info = () => {
  return (
    <div className="Info">
      <img src={family_pic} alt="health family illustration" className="bg" />
      <div className="top">
        <h1>A new take on insurance</h1>
        <h3>Great for individuals and business</h3>
      </div>
      <div className="Info-container container">
          <div className="left-side"></div>
        <div className="right-side">
          <h2>
            Monotonectally deploy seamless data and resource maximizing systems.
          </h2>
          <h4>Great for individuals and small families up to 4 members.</h4>
          <p className="description">
            A strong, up-to-date, employee benefits health insurance program is
            vital for attracting and retaining good employees. It takes
            diligence, creativity and attention to detail to ensure you are
            getting the best “bang for your buck” each and every year.
          </p>
          <div className="boxes-container">
            <div className="box">
              <img src={check} alt="check mark" />
              <div className="info">
                <h1>Comprehensive Insurance</h1>
                <p>
                  Dynamically repurpose e-business users rather than granular
                  products.
                </p>
              </div>
            </div>
            <div className="box">
              <img src={check} alt="check mark" />
              <div className="info">
                <h1>Support is just a call away</h1>
                <p>
                  Rapidiously customize value-added platforms compliant action
                  items.
                </p>
              </div>
            </div>
            <div className="box">
              <img src={check} alt="check mark" />
              <div className="info">
                <h1>Say goodbye to paperwork.</h1>
                <p>
                  Globally deliver economically sound communities relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
