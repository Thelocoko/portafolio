import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="r-footer">
        <li>
          <h2>Redes Sociales</h2>
          <ul className="box">
            <a href="http://www.facebook.com/thelocoko" target="_blank" rel="noreferrer">
              <i className="social fab fa-facebook-square text-light mr-4"></i>
            </a>
            <a href="http://www.twitter.com/thelocoko" target="_blank" rel="noreferrer">
              <i className="social fab fa-twitter text-light mr-4"></i>
            </a>
            <a href="https://instagram.com/thelocoko" target="_blank" rel="noreferrer">
              <i className="social fab fa-instagram text-light mr-4"></i>
            </a>
          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <p>All rights reserved by ©Elias Conde Reyes 2021 </p>
      </div>
    </footer>
  );
};

export default Footer;
