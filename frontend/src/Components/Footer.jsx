//Foot.jsx
import React from "react";
import "./../footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      {/* <h1>Footer</h1> */}
      <div className="container">
        <div className="row">
          {/* // column1 */}
          <div className="col">
            <h4>SHOE GAME INC</h4>
            <ul className="list-unstyled">
              <li>281-330-8004</li>
              <li>Location: Every Where Near YOU, USA</li>
              <li>123 Street Around The Corner</li>
            </ul>
          </div>
          {/* // column2 */}
          <div className="col">
            <h4>Github Links</h4>
            <ul className="list-unstyled">
              <a
                href="https://github.com/sunnydreamer"
                style={{ color: "white" }}
              >
                Sunny
              </a>
              <br />
              <a href="https://github.com/sujvem33" style={{ color: "white" }}>
                Sujitha
              </a>
              <br />
              <a href="https://github.com/Jmccaster" style={{ color: "white" }}>
                Jibril
              </a>
              <br />
              <a href="https://github.com/Remidemic" style={{ color: "white" }}>
                Remy
              </a>
            </ul>
          </div>
          {/* // column3 */}
          <div className="col">
            <h4>Some More Stuff</h4>
            <ul className="list-unstyled">
              <li>Shoes</li>
              <li>More Shoes</li>
              <li>A lot of Shoes</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Shoe Game INC | All Rights Reserved
            | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
