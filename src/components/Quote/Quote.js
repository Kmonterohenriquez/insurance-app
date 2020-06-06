import React from "react";
import "./Quote.sass";
import quote from "../../img/quote.png";
import bg from "../../img/bg-image3.png";

const Quote = () => {
  return (
    <div className="Quote">
      <div className="left-side">
        <img src={quote} alt="quote" className="quote" />
        <h1>
          I need to understand what’s going on – it’s my health and I want to
          feel secure in it. With my previous health insurance, I didn’t know
          how any of it worked.
        </h1>
        <h3 className="author">Matthew Young</h3>
        <h4 className="job-title">Legal Consultant, United States</h4>
      </div>
      <img src={bg} alt="background 03" className="bg"/>
    </div>
  );
};

export default Quote;
