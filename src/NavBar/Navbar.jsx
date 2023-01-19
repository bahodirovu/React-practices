import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="head_nav">
        <ul className="nav_items">
          <Link to="/count" className="nav_links">
            Counter
          </Link>
          <Link to="/modal" className="nav_links">
            Modal
          </Link>
          <Link to="/quiz" className="nav_links">
            Quiz
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
