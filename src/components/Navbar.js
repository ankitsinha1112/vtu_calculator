import React from "react";
import './navbar.css';
import { NavLink,Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        {/* <Link to className="active" href="/"> */}
        <Link to="/" >
          HOME
        </Link>
        <Link to="/home">
        SGPA CALCULATOR
        </Link>
        <Link to="/cgpa">
        CGPA CALCULATOR
        </Link>
        <Link to="/sgpa-percentage">
        PERCENTAGE CALCULATOR
        </Link>
        <Link to="/about">
        ABOUT US
        </Link>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.nbird.vtusgpacalculator" className="app">OUR APP</a>
       
        {/* <a href="/home">SGPA CALCULATOR</a>
        <a href="/cgpa"></a>
        <a href="/about"></a> */}
      </div>
    </div>
  );
};