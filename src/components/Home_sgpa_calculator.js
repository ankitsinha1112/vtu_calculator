import React from 'react'
import { NavLink } from 'react-router-dom'
import './home_sgpa_calculator.css'
// import { Sgpa_calculator } from "./components/Sgpa_calculator";
// import {Link} from "react-router";
export const Home = () => {
  return (
    <div>
       
       <header className="App-header">
        <div className="head3">VTU SGPA <br /> CALCULATOR</div>
        <div className="head2">
        CHOOSE YOUR <span className="inp">SEMESTER</span> 
        </div>
        <div className="container">
          <div className="o1">
          <NavLink to="/sgpa-calculator" target="_blank"> 1st & 2nd SEM <br />
            PHYSICS-CYCLE</NavLink>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 1st & 2nd SEM <br />
          CHEMISTRY-CYCLE</a>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 3rd SEM </a>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 4th SEM </a>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 5th SEM </a>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 6th SEM</a>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 7th SEM</a>
          </div>
          <div className="o1">
          <a href="#" target="_blank"> 8th SEM</a>
          </div>
        </div>
      </header>
    </div>
  )
}



