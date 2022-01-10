// import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Cgpa_calculator.css'

import React from 'react'

class Cgpa extends React.Component {
    constructor() {
      super();
        this.state = {
          num1:'',
          num2:'',
          num3:'',
          num4:'',
          num5:'',
          num6:'',
          num7:'',
          num8:'',
          total:0,
          print:false,
          count:0,
          cgpa:0.0
        };
    }
    handlenum1 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
                num1:event.target.value,
                print:false,
                total:0,
                count:0
                // count1: (this.state.num1 != 0 || this.state.num1!=null)?  1 : 0,
        });
        console.log(event.target.value);
        console.log(this.state.num1);
        console.log(this.state.count);
        }
    handlenum2 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num2:event.target.value,
            print:false,
            total:0,
            count:0
            // count2: this.state.num2 != 0 || this.state.num2!='' ?  1: 0
    });
    }
    handlenum3 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num3:event.target.value,
            print:false,
            total:0,
            count:0
    });
    }
    handlenum4 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num4:event.target.value,
            print:false,
            total:0,
            count:0
    });
    }
    handlenum5 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num5:event.target.value,
            print:false,total:0,
            count:0
    });
    }
    handlenum6 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num6:event.target.value,
            print:false,total:0,
            count:0
    });
    }
    handlenum7 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num7:event.target.value,
            print:false,total:0,
            count:0
    });
    }
    handlenum8 =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            num8:event.target.value,
            print:false,total:0,
            count:0
    });
    }

    exe =(event)=>{
        
        (this.state.num1 !==0 && this.state.num1!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num1)})) : console.log('hello');
        (this.state.num1 !==0 && this.state.num1!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num2 !==0 && this.state.num2!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num2)})) : console.log('hello');
        (this.state.num2 !==0 && this.state.num2!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num3 !==0 && this.state.num3!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num3)})) : console.log('hello');
        (this.state.num3 !==0 && this.state.num3!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num4 !==0 && this.state.num4!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num4)})) : console.log('hello');
        (this.state.num4 !==0 && this.state.num4!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num5 !==0 && this.state.num5!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num5)})) : console.log('hello');
        (this.state.num5 !==0 && this.state.num5!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num6 !==0 && this.state.num6!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num6)})) : console.log('hello');
        (this.state.num6 !==0 && this.state.num6!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num7 !==0 && this.state.num7!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num7)})) : console.log('hello');
        (this.state.num7 !==0 && this.state.num7!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        (this.state.num8 !==0 && this.state.num8!=='' ) ? this.setState(prevstate => ({ total: (Number)(prevstate.total) + (Number)(this.state.num8)})) : console.log('hello');
        (this.state.num8 !==0 && this.state.num8!=='' ) ? this.setState(prevstate => ({ count: (Number)(prevstate.count) + 1})) : console.log('hello');
        this.setState({ print:true});
        console.log(this.state.total);
        console.log(this.state.count);
    }
    render(){
    return (
        <div>
            <header className="App-header">
                <div className="head3">VTU CGPA <br /> CALCULATOR</div>
                <div className="head2">
                        ENTER SGPA <br />(Enter 0 for semesters not completed) <br />
                        <div>
                            <div className="sem">
                                <span className="sem_head">Semester 1 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num1} onChange={this.handlenum1}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 2 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num2} onChange={this.handlenum2}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 3 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num3} onChange={this.handlenum3}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 4 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num4} onChange={this.handlenum4}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 5 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num5} onChange={this.handlenum5}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 6 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num6} onChange={this.handlenum6}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 7 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num7} onChange={this.handlenum7}/>
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 8 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" value={this.state.num8} onChange={this.handlenum8}/>
                            </div>
                            
                            <div className="btn">
                                 <button onClick={this.exe}>Submit</button>
                                      </div>
                                {
                                 this.state.print?
                                 ((this.state.count !== 0) ? <h1 className='result'>Your CGPA : {(Number(this.state.total/this.state.count).toFixed(2))}</h1> : <h1>{(Number(0).toFixed(2))}</h1>)
                                : null
                                }
                        </div>
                </div>
            </header>
        </div>
    );
}
    }
export default Cgpa;