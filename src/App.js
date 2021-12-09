import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
import "./App.css";
import { Sgpa_calculator } from "./components/Sgpa_calculator";
import { Home } from "./components/Home_sgpa_calculator";
import { Main } from "./components/Index";
import Cgpa from "./components/Cgpa_calculator";
import Sgpatopercentage from "./components/Sgpatopercentage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    const setbranch = (brch, sem) => {
      if (sem == "1st & 2nd SEM PHYSICS-CYCLE") {
        <Sgpa_calculator
          Title="(2018 SCHEME) PHYSICS GROUP 1ST & 2ND SEM."
          Sub1="18MAT11/21"
          Sub2="18PHY12/22"
          Sub3="18ELE13/23"
          Sub4="18CIV14/24"
          Sub5="18EGDL15/25"
          Sub6="18PHYL16/26"
          Sub7="18ELEL17/27"
          Sub8="18EGH18/28"
        />;
      }
       else if (sem == "1st & 2nd SEM CHEMISTRY-CYCLE") {
        <Sgpa_calculator
          Title="(2018 SCHEME) PHYSICS GROUP 1ST & 2ND SEM."
          Sub1="18MAT11/21"
          Sub2="18CHE12"
          Sub3="18CPS13"
          Sub4="18ELN14"
          Sub5="18ME15"
          Sub6="18CHEL16"
          Sub7="18CPL17"
          Sub8="18EGH18"
        />;
      } else if (brch == "CSE/ISE") {
        switch (sem) {
          case 3:
            <Sgpa_calculator
              Title="3rd SEM"
              Sub1="18MAT31"
              Sub2="18CS32"
              Sub3="18CS33"
              Sub4="18CS34"
              Sub5="18CS35"
              Sub6="18CS36"
              Sub7="18CSL37"
              Sub8="18CSL38"
              Sub9="18KVK39/18KAK39/18CPC39"
            />

            break;
          case 4:
            <Sgpa_calculator
              Title="4th SEM"
              Sub1="18MAT41"
              Sub2="18CS42"
              Sub3="18CS43"
              Sub4="18CS44"
              Sub5="18CS45"
              Sub6="18CS46"
              Sub7="18CSL47"
              Sub8="18CSL48"
              Sub9="18KVK39/18KAK39/18CPC39"
            />
            break;
          case 5:
            <Sgpa_calculator
              Title="5th SEM"
              Sub1="18MAT51"
              Sub2="18CS52"
              Sub3="18CS53"
              Sub4="18CS54"
              Sub5="18CS55"
              Sub6="18CS56"
              Sub7="18CSL57"
              Sub8="18CSL58"
              Sub9="18CIV59"
            />
            break;
          case 6:
            <Sgpa_calculator
              Title="6th SEM"
              Sub1="18IS61"
              Sub2="18IS62"
              Sub3="18CS63"
              Sub4="18CS64X"
              Sub5="18CS65X"
              Sub6="18ISL66"
              Sub7="18ISL67"
              Sub8="18CSMP68"
            />
            break;
          case 7:
            <Sgpa_calculator
              Title="7th SEM"
              Sub1="18CS71"
              Sub2="18CS72"
              Sub3="18CS73X"
              Sub4="18CS74X"
              Sub5="18CS75X"
              Sub6="18CSL76"
              Sub7="18CSP77"
            />
            break;
          case 8:
            <Sgpa_calculator
              Title="8th SEM"
              Sub1="18CS81"
              Sub2="18CS82X"
              Sub3="18CSP83"
              Sub4="18CSS84"
              Sub5="18CSI85"
            />
            break;

          default:
            break;
        }
      }

      else if (brch == "ECE/ETE") {
        switch (sem) {
          case 3:
            <Sgpa_calculator
              Title="3rd SEM"
              Sub1="18MAT31"
              Sub2="18EC32"
              Sub3="18EC33"
              Sub4="18EC34"
              Sub5="18EC35"
              Sub6="18EC36"
              Sub7="18ECL37"
              Sub8="18ECL38"
              Sub9="18KVK39/18KAK39/18CPC39"
            />

            break;
          case 4:
            <Sgpa_calculator
              Title="4th SEM"
              Sub1="18MAT41"
              Sub2="18EC42"
              Sub3="18EC43"
              Sub4="18EC44"
              Sub5="18EC45"
              Sub6="18EC46"
              Sub7="18ECL47"
              Sub8="18ECL48"
              Sub9="18KVK39/18KAK39/18CPC39"
            />
            break;
          case 5:
            <Sgpa_calculator
              Title="5th SEM"
              Sub1="18ES51"
              Sub2="18EC52"
              Sub3="18EC53"
              Sub4="18EC54"
              Sub5="18EC55"
              Sub6="18EC56"
              Sub7="18ECL57"
              Sub8="18ECL58"
              Sub9="18CIV59"
            />
            break;
          case 6:
            <Sgpa_calculator
              Title="6th SEM"
              Sub1="18EC61"
              Sub2="18EC62"
              Sub3="18EC63"
              Sub4="18XX64X"
              Sub5="18XX65X"
              Sub6="18ECL66"
              Sub7="18ECL67"
              Sub8="18ECMP68"
           
            />
            break;
          case 7:
            <Sgpa_calculator
              Title="7th SEM"
              Sub1="18EC71"
              Sub2="18EC72"
              Sub3="18XX73X"
              Sub4="18XX74X"
              Sub5="18XX75X"
              Sub6="18ECL76"
              Sub7="18ECL77"
              Sub8="18ECP78 "
            
            />
            break;
          case 8:
            <Sgpa_calculator
              Title="8th SEM"
              Sub1="18EC81"
              Sub2="18XX82X"
              Sub3="18ECP83"
              Sub4="18ECS84"
             
            />;
            break;

          default:
            break;
        }
      }

      else if (brch == "EEE") {
        switch (sem) {
          case 3:
            <Sgpa_calculator
              Title="3rd SEM"
              Sub1="18MAT31"
              Sub2="18EE32"
              Sub3="18EE33"
              Sub4="18EE34"
              Sub5="18EE35"
              Sub6="18EE36"
              Sub7="18EEL37"
              Sub8="18EEL38"
              Sub9="18KVK39/18KAK39/18CPC39"
            />

            break;
          case 4:
            <Sgpa_calculator
              Title="4th SEM"
              Sub1="18MAT41"
              Sub2="18EE42"
              Sub3="18EE43"
              Sub4="18EE44"
              Sub5="18EE45"
              Sub6="18EE46"
              Sub7="18EEL47"
              Sub8="18EEL48"
              Sub9="18KVK39/18KAK39/18CPC39"
            />
            break;
          case 5:
            <Sgpa_calculator
              Title="5th SEM"
              Sub1="18EE51"
              Sub2="18EE52"
              Sub3="18EE53"
              Sub4="18EE54"
              Sub5="18EE55"
              Sub6="18EE56"
              Sub7="18EEL57"
              Sub8="18EEL58"
              Sub9="18CIV59"
            />
            break;
          case 6:
            <Sgpa_calculator
              Title="6th SEM"
              Sub1="18EE61"
              Sub2="18EE62"
              Sub3="18EE63"
              Sub4="18EE64X"
              Sub5="18EE65X"
              Sub6="18EEL66"
              Sub7="18EEL67"
              Sub8="18EEMP68"
             
            />
            break;
          case 7:
            <Sgpa_calculator
              Title="7th SEM"
              Sub1="18EE71"
              Sub2="18EE72"
              Sub3="18EE73X"
              Sub4="18EE74X"
              Sub5="18EE75X"
              Sub6="18EEL76"
              Sub7="18EEL77"
              Sub8="18EEP78"
              
            />
            break;
          case 8:
            <Sgpa_calculator
              Title="8th SEM"
              Sub1="18EE81"
              Sub2="18EE82"
              Sub3="18EEP83"
              Sub4="18EES84"
              Sub5="18EEI85"
              
            />;
            break;

          default:
            break;
        }
      }

      else if (brch == "ME") {
        switch (sem) {
          case 3:
            <Sgpa_calculator
              Title="3rd SEM"
              Sub1="18MAT31"
              Sub2="18ME32"
              Sub3="18ME33"
              Sub4="18ME34"
              Sub5="18ME35A/35B"
              Sub6="18ME36A/36B"
              Sub7="18MEL37A/37B"
              Sub8="18MEL38A/39B"
              Sub9="18KVK39/18KAK39/18CPC39"
            />

            break;
          case 4:
            <Sgpa_calculator
              Title="4th SEM"
              Sub1="18MAT41"
              Sub2="18ME42"
              Sub3="18ME43"
              Sub4="18ME44"
              Sub5="18ME45A/45B"
              Sub6="18ME46A/46B"
              Sub7="18MEL47A/47B"
              Sub8="18MEL48A/48B"
              Sub9="18KVK39/18KAK39/18CPC39"
            />
            break;
          case 5:
            <Sgpa_calculator
              Title="5th SEM"
              Sub1="18ME51"
              Sub2="18ME52"
              Sub3="18ME53"
              Sub4="18ME54"
              Sub5="18ME55"
              Sub6="18ME56"
              Sub7="18MEL57"
              Sub8="18MEL58"
              Sub9="18CIV59"
            />
            break;
          case 6:
            <Sgpa_calculator
              Title="6th SEM"
              Sub1="18ME61"
              Sub2="18ME62"
              Sub3="18ME63"
              Sub4="18ME64X"
              Sub5="18ME65X"
              Sub6="18MEL66"
              Sub7="18MEL67"
              Sub8="18MEMP68"
             
            />
            break;
          case 7:
            <Sgpa_calculator
              Title="7th SEM"
              Sub1="18ME71"
              Sub2="18ME72"
              Sub3="18ME73X"
              Sub4="18ME74X"
              Sub5="18ME75X"
              Sub6="18MEL76"
              Sub7="18MEL77"
              Sub8="18MEP78"
              
            />
            break;
          case 8:
            <Sgpa_calculator
              Title="8th SEM"
              Sub1="18ME81"
              Sub2="18ME82X"
              Sub3="18MEP83"
              Sub4="18MES84"
              Sub5="18XXI85"
              
            />;
            break;

          default:
            break;
        }
      }

      else if (brch == "CIVIL") {
        switch (sem) {
          case 3:
            <Sgpa_calculator
              Title="3rd SEM"
              Sub1="18MAT31"
              Sub2="18CV32"
              Sub3="18CV33"
              Sub4="18CV34"
              Sub5="18CV35"
              Sub6="18CV36"
              Sub7="18CVL37"
              Sub8="18CVL38"
              Sub9="18KVK39/18KAK39/18CPC39"
            />

            break;
          case 4:
            <Sgpa_calculator
              Title="4th SEM"
              Sub1="18MAT41"
              Sub2="18CV42"
              Sub3="18CV43"
              Sub4="18CV44"
              Sub5="18CV45"
              Sub6="18CV46"
              Sub7="18CVL47"
              Sub8="18CVL48"
              Sub9="18KVK39/18KAK39/18CPC39"
            />
            break;
          case 5:
            <Sgpa_calculator
              Title="5th SEM"
              Sub1="18CV51"
              Sub2="18CV52"
              Sub3="18CV53"
              Sub4="18CV54"
              Sub5="18CV55"
              Sub6="18CV56"
              Sub7="18CVL57"
              Sub8="18CVL58"
              Sub9="18CIV59"
            />
            break;
          case 6:
            <Sgpa_calculator
              Title="6th SEM"
              Sub1="18CV61"
              Sub2="18CV62"
              Sub3="18CV63"
              Sub4="18CV64X"
              Sub5="18CV65X"
              Sub6="18CVL66"
              Sub7="18CVL67"
              Sub8="18CVEP68"
             
            />
            break;
          case 7:
            <Sgpa_calculator
              Title="7th SEM"
              Sub1="18CV71"
              Sub2="18CV72"
              Sub3="18CV73X"
              Sub4="18CV74X"
              Sub5="18CV75X"
              Sub6="18CVL76"
              Sub7="18CVL77"
              Sub8="18CVP78"
              
            />
            break;
          case 8:
            <Sgpa_calculator
              Title="8th SEM"
              Sub1="18CV81"
              Sub2="18CV82X"
              Sub3="18CVP83"
              Sub4="18CVS84"
              Sub5="18CVI85"
              
            />;
            break;

          default:
            break;
        }
      }

      
    };
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/home" component={Home} />
            <Route path="/sgpa-calculator">
              {setbranch}
            </Route>
            <Route path="/cgpa" component={Cgpa} />
            <Route path="/sgpa-percentage" component={Sgpatopercentage} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
