// import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Sgpa_calculator.css'
import {brch,sem} from './Home_sgpa_calculator'
import React from 'react'

// export const Sgpacalculator = () => {
  class Sgpacalculator extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
       Title:'',
       print:false,
        sub1:'',
        sub2:'',
        sub3:'',
        sub4:'',
        sub5:'',
        sub6:'',
        sub7:'',
        sub8:'',
        sub9:'',
        m1:0,
        m2:0,
        m3:0,
        m4:0,
        m5:0,
        m6:0,
        m7:0,
        m8:0,
        m9:0,
      };
  }
  handlenum1=(event)=>{
     this.setState({
       m1:event.target.value,
       print:false,
     });
 }
 handleChange2=(event)=>{
  this.setState({
    m2:event.target.value,
    print:false,
  });
}
handleChange3=(event)=>{
  this.setState({
    m3:event.target.value,
    print:false,
  });
}
handleChange4=(event)=>{
  this.setState({
    m4:event.target.value,
    print:false,
  });
}
handleChange5=(event)=>{
  this.setState({
    m5:event.target.value,
    print:false,
  });
}
handleChange6=(event)=>{
  this.setState({
    m6:event.target.value,
    print:false,
  });
}
handleChange7=(event)=>{
  this.setState({
    m7:event.target.value,
    print:false,
  });
}
handleChange8=(event)=>{
  this.setState({
    m8:event.target.value,
    print:false,
  });
}
exe=(event)=>{
  this.setState({ print:true});
  // useEffect(() => {
  // setprint(true);
// }, []);
}
  render(){
    console.log(brch);
    console.log(sem);
    // const [sub1,this.setState({sub1:]=useState(0);
    // const [m1,setm1]=useState(0);
    // const [sub2,this.setState({sub2:]=useState(0);
    // const [m2,setm2]=useState(0);
    // const [sub3,this.setState({sub3:]=useState(0);
    // const [m3,setm3]=useState(0);
    // const [sub4,this.setState({sub4:]=useState(0);
    // const [m4,setm4]=useState(0);
    // const [sub5,this.setState({sub5:]=useState(0);
    // const [m5,setm5]=useState(0);
    // const [sub6,this.setState({sub6:]=useState(0);
    // const [m6,setm6]=useState(0);
    // const [sub7,this.setState({sub7:]=useState(0);
    // const [m7,setm7]=useState(0);
    // const [sub8,this.setState({sub8:]=useState(0);
    // const [m8,setm8]=useState(0);
    // const [sub9,this.setState({sub9:]=useState(0);
    // const [m9,setm9]=useState(0);
    // const [Title,this.setState({Title:]=useState(0);
 
      // if(event.target.value>100 || event.target.value<0)
      // {
      //   alert()
      // }
  // const setbranch = (brch, sem) => {
    // const [brch,setbrch]=useState("CSE/ISE")});
    // const [sem,setsem]=useState(3);
    // }
    // useEffect(() => {
    if (sem ==='1st & 2nd SEM PHYSICS-CYCLE') {
      // setbrch("civil")})
      
      // this.setState({sub1:(event.target.value);
      if(this.state.Title!=='(2018 SCHEME) PHYSICS GROUP 1ST & 2ND SEM.'){
      this.setState({
                Title:"(2018 SCHEME) PHYSICS GROUP 1ST & 2ND SEM.",
          sub1:"18MAT11/21",
          sub2:"18PHY12/22",
          sub3:"18ELE13/23",
          sub4:"18CIV14/24",
          sub5:"18EGDL15/25",
          sub6:"18PHYL16/26",
          sub7:"18ELEL17/27",
          sub8:"18EGH18/28"
      });
    }
        // this.setState({Title:("(2018 SCHEME) PHYSICS GROUP 1ST & 2ND SEM.")});
        // this.setState({sub1:("18MAT11/21")});
        // this.setState({sub2:("18PHY12/22")});
        // this.setState({sub3:("18ELE13/23")});
        // this.setState({sub4:("18CIV14/24")});
        // this.setState({sub5:("18EGDL15/25")});
        // this.setState({sub6:("18PHYL16/26")});
        // this.setState({sub7:("18ELEL17/27")});
        // this.setState({sub8:("18EGH18/28")});
    }
 
    else if (sem === "1st & 2nd SEM CHEMISTRY-CYCLE") {   
      if(this.state.Title!=='(2018 SCHEME) CHEMISTRY GROUP 1ST & 2ND SEM.'){
     this.setState({Title:("(2018 SCHEME) CHEMISTRY GROUP 1ST & 2ND SEM.")})
      this.setState({sub1:("18MAT11/21")})
      this.setState({sub2:("18CHE12")})
        this.setState({sub3:("18CPS13")})
        this.setState({sub4:("18ELN14")})
        this.setState({sub5:("18ME15")})
        this.setState({sub6:("18CHEL16")})
        this.setState({sub7:("18CPL17")})
        this.setState({sub8:("18EGH18")})
      }
    }
      else if (brch === "cse") {
        console.log(sem)
        switch (sem) {
          case '3':
              console.log(sem);
              if(this.state.Title!=='3rd SEM'){
              this.setState({Title:("3rd SEM")})
              this.setState({sub1:("18MAT31")})
            this.setState({sub2:("18CS32")})
            this.setState({sub3:("18CS33")})
            this.setState({sub4:("18CS34")})
            this.setState({sub5:("18CS35")})
            this.setState({sub6:("18CS36")})
            this.setState({sub7:("18CSL37")})
            this.setState({sub8:("18CSL38")})
            this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
              }
           break;
        case '4':
          if(this.state.Title!=='4th SEM'){
           this.setState({Title:("4th SEM")})
          this.setState({sub1:("18MAT41")})
          this.setState({sub2:("18CS42")})
          this.setState({sub3:("18CS43")})
          this.setState({sub4:("18CS44")})
          this.setState({sub5:("18CS45")})
          this.setState({sub6:("18CS46")})
          this.setState({sub7:("18CSL47")})
          this.setState({sub8:("18CSL48")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
        }
        break;
        case '5':
          if(this.state.Title!=='5th SEM'){
           this.setState({Title:("5th SEM")})
          this.setState({sub1:("18MAT51")})
          this.setState({sub2:("18CS52")})
          this.setState({sub3:("18CS53")})
          this.setState({sub4:("18CS54")})
          this.setState({sub5:("18CS55")})
          this.setState({sub6:("18CS56")})
          this.setState({sub7:("18CSL57")})
          this.setState({sub8:("18CSL58")})
          this.setState({sub9:("18CIV59")})
          }
          break;
        case '6':
          if(this.state.Title!=='6th SEM'){
           this.setState({Title:("6th SEM")})
          this.setState({sub1:("18IS61")})
          this.setState({sub2:("18IS62")})
          this.setState({sub3:("18CS63")})
          this.setState({sub4:("18CS64X")})
          this.setState({sub5:("18CS65X")})
          this.setState({sub6:("18ISL66")})
          this.setState({sub7:("18ISL67")})
          this.setState({sub8:("18CSMP68")})
          }
          break;
        case '7':
          if(this.state.Title!=='7th SEM'){
           this.setState({Title:("7th SEM")})
          this.setState({sub1:("18CS71")})
          this.setState({sub2:("18CS72")})
          this.setState({sub3:("18CS73X")})
          this.setState({sub4:("18CS74X")})
          this.setState({sub5:("18CS75X")})
          this.setState({sub6:("18CSL76")})
          this.setState({sub7:("18CSP77")})
          }
          break;
        case '8':
          if(this.state.Title!=='8th SEM'){
           this.setState({Title:("8th SEM")})
          this.setState({sub1:("18CS81")})
          this.setState({sub2:("18CS82X")})
          this.setState({sub3:("18CSP83")})
          this.setState({sub4:("18CSS84")})
          this.setState({sub5:("18CSI85")})
          }
          break;
        default:
          break;
      }
    }

    else if (brch === "ece") {
      switch (sem) {
        case '3':
          if(this.state.Title!=='3rd SEM'){
           this.setState({Title:("3rd SEM")})
          this.setState({sub1:("18MAT31")})
          this.setState({sub2:("18EC32")})
          this.setState({sub3:("18EC33")})
          this.setState({sub4:("18EC34")})
          this.setState({sub5:("18EC35")})
          this.setState({sub6:("18EC36")})
          this.setState({sub7:("18ECL37")})
          this.setState({sub8:("18ECL38")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
          }
          break;
        case '4':
          if(this.state.Title!=='4th SEM'){
           this.setState({Title:("4th SEM")})
          this.setState({sub1:("18MAT41")})
          this.setState({sub2:("18EC42")})
          this.setState({sub3:("18EC43")})
          this.setState({sub4:("18EC44")})
          this.setState({sub5:("18EC45")})
          this.setState({sub6:("18EC46")})
          this.setState({sub7:("18ECL47")})
          this.setState({sub8:("18ECL48")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})}
          break;
        case '5':
          if(this.state.Title!=='5th SEM'){
           this.setState({Title:("5th SEM")})
          this.setState({sub1:("18ES51")})
          this.setState({sub2:("18EC52")})
          this.setState({sub3:("18EC53")})
          this.setState({sub4:("18EC54")})
          this.setState({sub5:("18EC55")})
          this.setState({sub6:("18EC56")})
          this.setState({sub7:("18ECL57")})
          this.setState({sub8:("18ECL58")})
          this.setState({sub9:("18CIV59")})}
          break;
        case '6':
          if(this.state.Title!=='6th SEM'){
           this.setState({Title:("6th SEM")})
          this.setState({sub1:("18EC61")})
          this.setState({sub2:("18EC62")})
          this.setState({sub3:("18EC63")})
          this.setState({sub4:("18XX64X")})
          this.setState({sub5:("18XX65X")})
          this.setState({sub6:("18ECL66")})
          this.setState({sub7:("18ECL67")})
          this.setState({sub8:("18ECMP68")})
         }
          break;
        case '7':
          if(this.state.Title!=='7th SEM'){
           this.setState({Title:("7th SEM")})
          this.setState({sub1:("18EC71")})
          this.setState({sub2:("18EC72")})
          this.setState({sub3:("18XX73X")})
          this.setState({sub4:("18XX74X")})
          this.setState({sub5:("18XX75X")})
          this.setState({sub6:("18ECL76")})
          this.setState({sub7:("18ECL77")})
          this.setState({sub8:("18ECP78 ")})
          }
          break;
        case '8':
          if(this.state.Title!=='8th SEM'){
           this.setState({Title:("8th SEM")})
          this.setState({sub1:("18EC81")})
          this.setState({sub2:("18XX82X")})
          this.setState({sub3:("18ECP83")})
          this.setState({sub4:("18ECS84")})
          }

          break;

        default:
          break;
      }
    }

    else if (brch === "eee") {
      switch (sem) {
        case '3':
          if(this.state.Title!=='3rd SEM'){
           this.setState({Title:("3rd SEM")})
          this.setState({sub1:("18MAT31")})
          this.setState({sub2:("18EE32")})
          this.setState({sub3:("18EE33")})
          this.setState({sub4:("18EE34")})
          this.setState({sub5:("18EE35")})
          this.setState({sub6:("18EE36")})
          this.setState({sub7:("18EEL37")})
          this.setState({sub8:("18EEL38")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
          }
          break;
        case '4':
          if(this.state.Title!=='4th SEM'){
           this.setState({Title:("4th SEM")})
          this.setState({sub1:("18MAT41")})
          this.setState({sub2:("18EE42")})
          this.setState({sub3:("18EE43")})
          this.setState({sub4:("18EE44")})
          this.setState({sub5:("18EE45")})
          this.setState({sub6:("18EE46")})
          this.setState({sub7:("18EEL47")})
          this.setState({sub8:("18EEL48")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
          }
          break;
        case '5':
          if(this.state.Title!=='5th SEM'){
           this.setState({Title:("5th SEM")})
          this.setState({sub1:("18EE51")})
          this.setState({sub2:("18EE52")})
          this.setState({sub3:("18EE53")})
          this.setState({sub4:("18EE54")})
          this.setState({sub5:("18EE55")})
          this.setState({sub6:("18EE56")})
          this.setState({sub7:("18EEL57")})
          this.setState({sub8:("18EEL58")})
          this.setState({sub9:("18CIV59")})
          }
          break;
        case '6':
          if(this.state.Title!=='6th SEM'){
           this.setState({Title:("6th SEM")})
          this.setState({sub1:("18EE61")})
          this.setState({sub2:("18EE62")})
          this.setState({sub3:("18EE63")})
          this.setState({sub4:("18EE64X")})
          this.setState({sub5:("18EE65X")})
          this.setState({sub6:("18EEL66")})
          this.setState({sub7:("18EEL67")})
          this.setState({sub8:("18EEMP68")})
          }
          break;
        case '7':
          if(this.state.Title!=='7th SEM'){
           this.setState({Title:("7th SEM")})
          this.setState({sub1:("18EE71")})
          this.setState({sub2:("18EE72")})
          this.setState({sub3:("18EE73X")})
          this.setState({sub4:("18EE74X")})
          this.setState({sub5:("18EE75X")})
          this.setState({sub6:("18EEL76")})
          this.setState({sub7:("18EEL77")})
          this.setState({sub8:("18EEP78")})
          } 
          break;
        case '8':
          if(this.state.Title!=='8th SEM'){
           this.setState({Title:("8th SEM")})
          this.setState({sub1:("18EE81")})
          this.setState({sub2:("18EE82")})
          this.setState({sub3:("18EEP83")})
          this.setState({sub4:("18EES84")})
          this.setState({sub5:("18EEI85")})
          }

          break;

        default:
          break;
      }
    }

    else if (brch === "me") {
      switch (sem) {
        case '3':
          if(this.state.Title!=='3rd SEM'){
           this.setState({Title:("3rd SEM")})
          this.setState({sub1:("18MAT31")})
          this.setState({sub2:("18ME32")})
          this.setState({sub3:("18ME33")})
          this.setState({sub4:("18ME34")})
          this.setState({sub5:("18ME35A/35B")})
          this.setState({sub6:("18ME36A/36B")})
          this.setState({sub7:("18MEL37A/37B")})
          this.setState({sub8:("18MEL38A/39B")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
          }
          break;
        case '4':
          if(this.state.Title!=='4th SEM'){
           this.setState({Title:("4th SEM")})
          this.setState({sub1:("18MAT41")})
          this.setState({sub2:("18ME42")})
          this.setState({sub3:("18ME43")})
          this.setState({sub4:("18ME44")})
          this.setState({sub5:("18ME45A/45B")})
          this.setState({sub6:("18ME46A/46B")})
          this.setState({sub7:("18MEL47A/47B")})
          this.setState({sub8:("18MEL48A/48B")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})}
          break;
        case '5':
          if(this.state.Title!=='5th SEM'){
           this.setState({Title:("5th SEM")})
          this.setState({sub1:("18ME51")})
          this.setState({sub2:("18ME52")})
          this.setState({sub3:("18ME53")})
          this.setState({sub4:("18ME54")})
          this.setState({sub5:("18ME55")})
          this.setState({sub6:("18ME56")})
          this.setState({sub7:("18MEL57")})
          this.setState({sub8:("18MEL58")})
          this.setState({sub9:("18CIV59")})}
          break;
        case '6':
          if(this.state.Title!=='6th SEM'){
           this.setState({Title:("6th SEM")})
          this.setState({sub1:("18ME61")})
          this.setState({sub2:("18ME62")})
          this.setState({sub3:("18ME63")})
          this.setState({sub4:("18ME64X")})
          this.setState({sub5:("18ME65X")})
          this.setState({sub6:("18MEL66")})
          this.setState({sub7:("18MEL67")})
          this.setState({sub8:("18MEMP68")})
          }
          break;
        case '7':
          if(this.state.Title!=='7th SEM'){
           this.setState({Title:("7th SEM")})
          this.setState({sub1:("18ME71")})
          this.setState({sub2:("18ME72")})
          this.setState({sub3:("18ME73X")})
          this.setState({sub4:("18ME74X")})
          this.setState({sub5:("18ME75X")})
          this.setState({sub6:("18MEL76")})
          this.setState({sub7:("18MEL77")})
          this.setState({sub8:("18MEP78")})
          }
          break;
        case '8':
          if(this.state.Title!=='8th SEM'){
           this.setState({Title:("8th SEM")})
          this.setState({sub1:("18ME81")})
          this.setState({sub2:("18ME82X")})
          this.setState({sub3:("18MEP83")})
          this.setState({sub4:("18MES84")})
          this.setState({sub5:("18XXI85")})
          }

          break;

        default:
          break;
      }
    }

    else if (brch === "civil") {
      switch (sem) {
        case '3':
          if(this.state.Title!=='3rd SEM'){
           this.setState({Title:("3rd SEM")})
          this.setState({sub1:("18MAT31")})
          this.setState({sub2:("18CV32")})
          this.setState({sub3:("18CV33")})
          this.setState({sub4:("18CV34")})
          this.setState({sub5:("18CV35")})
          this.setState({sub6:("18CV36")})
          this.setState({sub7:("18CVL37")})
          this.setState({sub8:("18CVL38")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})
          }
          break;
        case '4':
          if(this.state.Title!=='4th SEM'){
           this.setState({Title:("4th SEM")})
          this.setState({sub1:("18MAT41")})
          this.setState({sub2:("18CV42")})
          this.setState({sub3:("18CV43")})
          this.setState({sub4:("18CV44")})
          this.setState({sub5:("18CV45")})
          this.setState({sub6:("18CV46")})
          this.setState({sub7:("18CVL47")})
          this.setState({sub8:("18CVL48")})
          this.setState({sub9:("18KVK39/18KAK39/18CPC39")})}
          break;
        case '5':
          if(this.state.Title!=='5th SEM'){
           this.setState({Title:("5th SEM")}) 
          this.setState({sub1:("18CV51")})
          this.setState({sub2:("18CV52")})
          this.setState({sub3:("18CV53")})
          this.setState({sub4:("18CV54")})
          this.setState({sub5:("18CV55")})
          this.setState({sub6:("18CV56")})
          this.setState({sub7:("18CVL57")})
          this.setState({sub8:("18CVL58")})
          this.setState({sub9:("18CIV59")})}
          break;
        case '6':
          if(this.state.Title!=='6th SEM'){
           this.setState({Title:("6th SEM")})
          this.setState({sub1:("18CV61")})
          this.setState({sub2:("18CV62")})
          this.setState({sub3:("18CV63")})
          this.setState({sub4:("18CV64X")})
          this.setState({sub5:("18CV65X")})
          this.setState({sub6:("18CVL66")})
          this.setState({sub7:("18CVL67")})
          this.setState({sub8:("18CVEP68")})
          }
          break;
        case '7':
          if(this.state.Title!=='7th SEM'){
           this.setState({Title:("7th SEM")})
          this.setState({sub1:("18CV71")})
          this.setState({sub2:("18CV72")})
          this.setState({sub3:("18CV73X")})
          this.setState({sub4:("18CV74X")})
          this.setState({sub5:("18CV75X")})
          this.setState({sub6:("18CVL76")})
          this.setState({sub7:("18CVL77")})
          this.setState({sub8:("18CVP78")})}
          break;
        case '8':
          if(this.state.Title!=='8th SEM'){
           this.setState({Title:("8th SEM")})
          this.setState({sub1:("18CV81")})
          this.setState({sub2:("18CV82X")})
          this.setState({sub3:("18CVP83")})
          this.setState({sub4:("18CVS84")})
          this.setState({sub5:("18CVI85")})
          }

          break;

        default:
          break;
      }
    }
  // }, []);
    // const [print,setprint]=useState(false);
   
    return (
      <div>
        <div className="head">
          <h1>{this.state.Title}</h1>
        </div>
        <div className="subhead">
          <h3>Subjects</h3>
        </div>
        <form action="/ ">
          <div className="marks">
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub1} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m1}
                  onChange={this.handlenum1}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub2} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m2}
                  onChange={this.handleChange2}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub3} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m3}
                  onChange={this.handleChange3}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub4} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m4}
                  onChange={this.handleChange4}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub5} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m5}
                  onChange={this.handleChange5}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub6} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m6}
                  onChange={this.handleChange6}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub7} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m7}
                  onChange={this.handleChange7}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{this.state.sub8} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={this.state.m8}
                  onChange={this.handleChange8}
                  required
                />
              </div>
            </div>
            <div className="btn">
            {/* <h1>({print})</h1> */}
                                 <button onClick={this.exe}>Submit</button>
            </div>
                                {
                                (this.state.print)?
                                (<h1>{Number(Number(this.state.m1)+Number(this.state.m2)+Number(this.state.m3)+Number(this.state.m4)+Number(this.state.m5)+Number(this.state.m6)+Number(this.state.m7)+Number(this.state.m8))}</h1>)
                                :(null)
                                } 
        
          </div>
        </form>
      </div>
    );
  }
}
export default Sgpacalculator;