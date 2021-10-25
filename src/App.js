
import './App.css';
// import { Sgpa_calculator } from "./components/Sgpa_calculator";
import { Home_sgpa_calculator } from "./sgpahome/Home_sgpa_calculator";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Sgpa_calculator Title = "1st Sem Results"
     Sub1='18MAT31'
     Sub2='18CS32'/> */}
      <Home_sgpa_calculator/>
    </div>
  );
}

export default App;
