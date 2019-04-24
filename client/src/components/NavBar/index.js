import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Glam Me
      </Link>
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={
                     window.location.pathname === "/register"  ? "nav-link active" : "nav-link"
              }
            >
              Login/Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/artist"
              className={window.location.pathname === "/artist" ? "nav-link active" : "nav-link"}
            >
             Find an Artist
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/appointments"
              className={window.location.pathname === "/appointments" ? "nav-link active" : "nav-link"}
            >
             Make an appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
