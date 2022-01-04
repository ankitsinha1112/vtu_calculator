import React from 'react'
import { Link } from 'react-router-dom'
import './home_sgpa_calculator.css'
// import { Sgpa_calculator } from "../components/Sgpa_calculator";
import styled from 'styled-components';
const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover, &:active,&:link,&:focus, &:visited {
      text-decoration: none;
      color: white;
      }

      &:hover,&:active{
        color:black;
      }
`;
let brch="cse";
let sem="3";
// import { Sgpa_calculator } from "./components/Sgpa_calculator";
// import {Link} from "react-router";
class Home extends React.Component {
  constructor() {
    super();
      this.state = {
        brch:'',
        sem:'',
      };
  }
  handlebrch =(event) =>{
    this.setState({
        brch:event.target.value,
})
brch=event.target.value;
;
}
  handlesem =(event) =>{
    this.setState({
        sem:event.target.value,
})
sem=event.target.value;
;
}
// export const Home = () => {
//   const [state, setState] = useState({
//     brch: "",
//     sem:""
//   });
  // const handleChange1 = e => {
  //   setState({
  //     [e.target.name]: e.target.value,
  //   });
   
  // }
  render(){
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
          value={this.state.brch}
          onChange={this.handlebrch}
          >
          <option value="">Select</option>
          <option value="cse">CSE/ISE</option>
          <option value="ece">ECE/ETE</option>
          <option value="eee">EEE</option>
          <option value="me">ME</option>
          <option value="civil">CIVIL</option>
        </select>
          </div> 
      </label>
      <br />
      <br />
        CHOOSE YOUR <span className="inp">SEMESTER : </span> 
        </div>
        <div className="container">
          {/* <div className="o1">
          <NavLink to="/sgpa-calculator" > 1st & 2nd SEM <br />
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
          </div> */}
          <select
          name="sem"
          value={this.state.sem}
          onChange={this.handlesem}
          >
          <option value="">Select</option>
          <option value="1st & 2nd SEM PHYSICS-CYCLE">1st & 2nd SEM PHYSICS-CYCLE</option>
          <option value="1st & 2nd SEM CHEMISTRY-CYCLE">1st & 2nd SEM CHEMISTRY-CYCLE</option>
          <option value="3">3rd SEM</option>
          <option value="4">4th SEM</option>
          <option value="5">5th SEM</option>
          <option value="6">6th SEM</option>
          <option value="7">7th SEM</option>
          <option value="8">8th SEM</option>
        </select>
        <div className="btn">
                                 <button >  <StyledLink to="/sgpa-calculator" > Submit </StyledLink> </button>
         </div>
        </div>
      </header>
    </div>
  );
  };
}

export default Home;
export {brch,sem};

