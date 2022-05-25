import React from "react";
import { Link } from "react-router-dom";
import "./HomeUnits.css";

function HomeUnits() {
  const p1 = "home";
  const p2 = "units";
  return (
    <div className="header">
      <Link to="/" className="logo"></Link>
      <div className="mock-up">
        <ul className="navbarr">
          <li>
            <Link to={`/${p1}`} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/${p2}`} className="link">
              Units
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HomeUnits;
