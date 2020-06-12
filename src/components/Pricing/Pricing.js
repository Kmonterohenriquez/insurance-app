import React from "react";
import "./Pricing.sass";
const Pricing = () => {
  return (
    <div className="Pricing">
      <h1>Honest Pricing</h1>
      <p>Simple & honest pricing. No hidden fees.</p>
      <div className="Pricing-grid-container">
        <div className="box basic">
          <h1>Basic</h1>
          <div className="price-box">
            <p>
              <span>$</span> 9
            </p>
            <div className="info">
              <p>Rapidiously strategize value</p>
              <p>Progressively visualize leadership</p>
              <p>Equity invested supply chains.</p>
            </div>
          </div>
        </div>
        <button>Choose Plan</button>

        <div className="Pricing-grid-container">
          <div className="box professional">
            <h1>Professional</h1>
            <div className="price-box">
              <p>
                <span>$</span> 19
              </p>
              <div className="info">
                <p>Rapidiously strategize value</p>
                <p>Progressively visualize leadership</p>
                <p>Equity invested supply chains.</p>
                <p>Proactively leverage</p>
              </div>
            </div>
          </div>
          <button>Choose Plan</button>
        </div>
        <div className="Pricing-grid-container">
          <div className="box premium">
            <h1>Premium</h1>
            <div className="price-box">
              <p>
                <span>$</span> 49
              </p>
              <div className="info">
                <p>Rapidiously strategize value</p>
                <p>Progressively visualize leadership</p>
                <p>Equity invested supply chains.</p>
              </div>
            </div>
          </div>
          <button>Choose Plan</button>
        </div>
      </div>
      <p className='Pricing-note'>*Prices shown per month if paid annually</p>
    </div>
  );
};

export default Pricing;
