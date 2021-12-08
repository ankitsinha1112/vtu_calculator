import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        {/* <Link to className="active" href="/"> */}
        <Link to="/">
          HOME
        </Link>
        <Link to="/home">
        SGPA CALCULATOR
        </Link>
        <Link to="/cgpa">
        CGPA CALCULATOR
        </Link>
        <Link to="/about">
        ABOUT US
        </Link>
        {/* <a href="/home">SGPA CALCULATOR</a>
        <a href="/cgpa"></a>
        <a href="/about"></a> */}
      </div>
    </div>
  );
};