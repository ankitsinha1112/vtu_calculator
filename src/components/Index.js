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
            <NavLink to="/home" target="_blank">
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>SGPA Calculator</h2> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam dolor dicta molestias, perferendis non deleniti
                    , obcaecati tempore expedita pariatur alias tenetur asperiores illo totam?</p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/home" target="_blank">
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>CGPA Calculator</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  A quam dolor dicta molestias, perferendis non deleniti, obcaecati tempore expedita pariatur alias tenetur asperiores illo totam?
                </div>
              </div>
            </NavLink>
          </div>
          <div className="c2">
            <NavLink to="/home" target="_blank">
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>VTU RESULT</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam dolor dicta molestias, perferendis non deleniti, obcaecati tempore expedita pariatur alias tenetur asperiores illo totam?
                </div>
              </div>
            </NavLink>
            <NavLink to="/home" target="_blank">
              <div className="container1">
                <div className="icon">

                </div>
                <div className="content">
                  <h2>SGPA/CGPA TO PERCENTAGE</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam dolor dicta molestias, perferendis non deleniti, obcaecati tempore expedita pariatur alias tenetur asperiores illo totam?
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}
