import React from 'react'
import { Link } from 'react-router-dom'
import './home_sgpa_calculator.css'
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
class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        brch:'',
        sem:''
      };
  }
  handlebrch =(event) =>{
    this.setState({
        brch:event.target.value,
})
}
  handlesem =(event) =>{
    this.setState({
        sem:event.target.value,
})
}
exe=()=>{
 if(this.state.brch==='' || this.state.sem==='')
 {
      alert('Select a value from Branch and Semester')
 }
 else{
   this.props.handlebrch(this.state.brch)
   this.props.handlesem(this.state.sem)
 }
}
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
          required
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
          <select
          name="sem"
          value={this.state.sem}
          onChange={this.handlesem}
          required
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
                                 <button onClick={() => this.exe()}>  <StyledLink to="/sgpa-calculator" > Submit </StyledLink> </button>
         </div>
        </div>
      </header>
    </div>
  );
  };
}

export default Home;

