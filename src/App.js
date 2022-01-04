import React, { Component  } from "react";
import { HashRouter,Route,Switch } from "react-router-dom";
import "./App.css";
import Sgpacalculator  from "./components/Sgpa_calculator";
import  Home  from "./components/Home_sgpa_calculator";
import { Main } from "./components/Index";
import Cgpa from "./components/Cgpa_calculator";
import Sgpatopercentage from "./components/Sgpatopercentage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        brch:'',
        sem:''
    }
    this.handlebrch = this.handlebrch.bind(this);
      this.handlesem = this.handlesem.bind(this);
  }
  handlebrch = (newbrch) => {

    this.setState({brch: newbrch});
}
  handlesem = (newsem) => {

    this.setState({sem: newsem});
}
  render() {
    return (
    <HashRouter>
    <div className="App">
        <Navbar/>
      <Switch>
     <Route exact path="/" component={Main}/>
     <Route path="/home">
       <Home handlebrch={this.handlebrch}  brch={this.state.brch} handlesem={this.handlesem}  sem={this.state.sem}/>
       </Route>
     <Route path="/sgpa-calculator" >
     <Sgpacalculator brch={this.state.brch} sem={this.state.sem}/>
        {/* {foi} */}
       </Route>
       <Route path="/cgpa" component={Cgpa}/>
       <Route path="/sgpa-percentage" component={Sgpatopercentage}/>
       <Route path="/about" component={About}/>
      </Switch>
      <Footer/>
    </div>
    </HashRouter>
      );
  }
}

export default App;
