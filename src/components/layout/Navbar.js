import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/navbar.css"
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
        <div className="container">
        <NavLink className="navbar-brand" to="/">
          Users Record
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      <Link className="btn btn-outline-light mx-4" to="/user/add-user">Add User</Link>

        </div>
             </nav>
    </>
  );
}

export default Navbar;
