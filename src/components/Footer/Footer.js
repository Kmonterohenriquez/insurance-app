import React from "react";
import "./Footer.sass";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-grid-container container">
        <div className="box">
          <h1>Address</h1>
          <ul>
            <li>400-401 West Georgia Street</li>
            <li>Vancouver, BC, Canada, V6B 5A1</li>
            <li>+1 (123) 456 7890</li>
            <li>sales@insurance.com</li>
          </ul>
        </div>
        <div className="box">
          <h1>Follow Us</h1>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="box">
          <h1>Follow Us</h1>
          <p>
            Compellingly myocardinate market-driven infrastructures before team
            driven manufactured products. Monotonectally exploit tactical
            markets vis-a-vis excellent deliverables.
          </p>
        </div>
      </div>
      <h2> Copyright © 2020.</h2>
    </footer>
  );
};

export default Footer;
