import React from "react";
import './navbar.css';

export const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        <a className="active" href="/">
          HOME
        </a>
        <a href="/home">SGPA CALCULATOR</a>
        <a href="/cgpa">CGPA CALCULATOR</a>
        <a href="/about">ABOUT US</a>
      </div>
    </div>
  );
};