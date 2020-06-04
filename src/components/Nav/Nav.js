import React from "react";
import "./Nav.sass";
import logo from "../../img/logo.png";
const Nav = () => {
  return (
    <header className="Nav ">
      <div className="Nav-container container">
        <div className="img-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>For you & family</li>
            <li className='business-link'>For Business</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
