import React, { Component  } from "react";
import { HashRouter,Route,Switch } from "react-router-dom";
// import { connect } from "react-redux";
import './App.css';
import  {Sgpa_calculator}  from "./components/Sgpa_calculator";
import { Home } from "./components/Home_sgpa_calculator";
import { Main } from "./components/Index";
import  Cgpa  from "./components/Cgpa_calculator";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

  class App extends Component {
  render() {
    return (
      
      <HashRouter>
    <div className="App">
        <Navbar/>
      <Switch>
     <Route exact path="/" component={Main}/>
     <Route path="/home" component={Home}/>
     <Route path="/sgpa-calculator" >
       <Sgpa_calculator Title="1st Sem Results"
       Sub1='18MAT31'
       Sub2='18CS32'
       />
       </Route>
       <Route path="/cgpa" component={Cgpa}/>
       <Route path="/about" component={About}/>
      </Switch>
      <Footer/>
    </div></HashRouter>
      );
  }
}

export default App;
