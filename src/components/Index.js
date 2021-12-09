import './Index.css';
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
export default (props) => <StyledLink {...props} />;
export const Main = () => {
  return (
    <div className="App">
      <header className="App-header1">
        <div className="head3">VTU <br />SGPA & CGPA <br />CALCULATOR</div>
        <div className="main">
          <div className="c1">
            <StyledLink to="/home" >
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>SGPA Calculator</h2> <p> Select your branch and sem and then enter all the marks for the respective subjects.</p>
                </div>
              </div>
            </StyledLink>
            <StyledLink to="/cgpa" >
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>CGPA Calculator</h2>
                  Enter all the semester SGPA in the Edit TextView till given to get the CGPA.
                </div>
              </div>
            </StyledLink>
          </div>
          <div className="c2">
            <a href="https://results.vtu.ac.in/" target="_blank">
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>VTU RESULT</h2>Click on this tab to get the VTU results which automatically redirects you to the VTU Website.
                </div>
              </div>
            </a>
            <StyledLink to="/sgpa-percentage">
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>SGPA/CGPA TO PERCENTAGE</h2>
                      Enter your CGPA in the Edit TextView till given to get the Percentage.
                </div>
              </div>
            </StyledLink>
          </div>
        </div>
      </header>
    </div>
  );
}
