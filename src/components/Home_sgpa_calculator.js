import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './home_sgpa_calculator.css'
// import { Sgpa_calculator } from "./components/Sgpa_calculator";
// import {Link} from "react-router";
export const Home = () => {
  const [state, setState] = useState({
    brch: "",
  });
  const handleChange = e => {
    setState({
      [e.target.name]: e.target.value,
    });
    console.log(state.brch);
  }
  return (
    <div>
       
       <header className="App-header">
        <div className="head3">VTU SGPA <br /> CALCULATOR</div>
        <div className="head2">
        <label>
        Choose Your Branch :
        <div className="branch">
        <select
          name="brch"
          value={state.brch}
          onChange={handleChange}
          >
          <option value="">Select</option>
          <option value="cse">CSE/ISE</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
          <option value="ete">ETE</option>
          <option value="me">ME</option>
          <option value="civil">CIVIL</option>
        </select>
          </div> 
      </label>
      <br />
      <br />
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



