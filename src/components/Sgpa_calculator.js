// import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Sgpa_calculator.css'
import React,{useState} from 'react'

export const Sgpa_calculator = (props) => {
  // class Sgpa_calculator extends React.Component {
  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       Title='',
        
  //     };
  // }
  // render(){
    return (
      <div>
        <div className="head">
          <h1>{props.Title}</h1>
        </div>
        <div className="subhead">
          <h3>Subjects</h3>
        </div>
        <form action="/ ">
          <div className="marks">
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub1} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.Subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub2} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub3} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub4} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub5} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub6} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub7} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="sub">
              <div className="subname">
                <h5>{props.Sub8} -</h5>
              </div>
              <div className="form">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={props.subcode}
                  required
                />
              </div>
            </div>
            <div className="btn">
                                 {/* <button >Submit</button> */}
                                 {/* {this.state.count} */}
                                 <button onClick={this.exe}>Submit</button>
                                      </div>
                                {
                                 this.state.print?
                                 ((this.state.count != 0) ? <h1>{(Number(this.state.total/this.state.count).toFixed(2))}</h1> : <h1>{(Number(0).toFixed(2))}</h1>)
                                : null
                                }
          </div>
        </form>
      </div>
    );
  }
// }
// export default Sgpa_calculator;