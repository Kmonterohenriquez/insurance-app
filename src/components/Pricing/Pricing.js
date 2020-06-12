import React from "react";
import "./Pricing.sass";
import tick from '../../img/tick.png'
const Pricing = () => {
  return (
    <div className="Pricing">
      <h1 className="title">Honest Pricing</h1>
      <p className="sub-title">Simple & honest pricing. No hidden fees.</p>
      <div className="Pricing-grid-container">
        <div className="box basic">
          <h1>Basic</h1>
          <div className="price-box">
            <div className='circle'>
              <span>$</span> 9
            </div>
            <div className="info">
              <p><img src={tick} alt="check mark"/> Rapidiously strategize value</p>
              <p><img src={tick} alt="check mark"/> Progressively visualize leadership</p>
              <p><img src={tick} alt="check mark"/> Equity invested supply chains.</p>
            </div>
          </div>
          <button>Choose Plan</button>
        </div>

        <div className="Pricing-grid-container">
          <div className="box professional">
            <h1>Professional</h1>
            <div className="price-box">
              <div className="circle">
                <span>$</span> 19
              </div>
              <div className="info">
                <p><img src={tick} alt="check mark"/> Rapidiously strategize value</p>
                <p><img src={tick} alt="check mark"/> Progressively visualize leadership</p>
                <p><img src={tick} alt="check mark"/> Equity invested supply chains.</p>
                <p><img src={tick} alt="check mark"/> Proactively leverage</p>
              </div>
            </div>
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="Pricing-grid-container">
          <div className="box premium">
            <h1>Premium</h1>
            <div className="price-box">
              <div className='circle'>
                <span>$</span> 49
              </div>
              <div className="info">
                <p><img src={tick} alt="check mark"/> Rapidiously strategize value</p>
                <p><img src={tick} alt="check mark"/> Progressively visualize leadership</p>
                <p><img src={tick} alt="check mark"/> Equity invested supply chains.</p>
              </div>
            </div>
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
      <p className="Pricing-note">*Prices shown per month if paid annually</p>
    </div>
  );
};

export default Pricing;
