import React from "react";
import "./Guarantee.sass";
import shield from "../../img/shield-yellow.svg";
const Guarantee = () => {
  return (
    <div className="Guarantee">
      <img src={shield} alt="yellow shield" />
      <div className="left-side">
        <h1>100% Satisfaction Guarantee</h1>
        <p>
          We offer no questions asked refund policy for 14 days from the policy
          date.
        </p>
      </div>
      <div className="right-side">
        <button>get a free Quote</button>
      </div>
    </div>
  );
};

export default Guarantee;
