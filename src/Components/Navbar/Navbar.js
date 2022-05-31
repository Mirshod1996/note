import React from "react";
import "./Navbar.scss";

function Navbar() {
 
  return (
    <nav className="navbar">
        <input placeholder="Search" className="navbar-inp"  />
        <button className="navbar-btn">Search</button>
    </nav>
  );
}

export default Navbar;
