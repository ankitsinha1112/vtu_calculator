import React from 'react'

class Sgpatopercentage extends React.Component {
    constructor() {
      super();
        this.state = {
          print:false,
          cgpa:''
        };
    }
    handlecgpa =(event) =>{
        (event.target.value>10 || event.target.value<0) ? alert("You can only insert value in range of 0 to 10") : console.log('hello');
        (event.target.value>10 || event.target.value<0) ? event.target.value=0 : console.log('hello');
        this.setState({
            cgpa:event.target.value,
            print:false,
            total:0,
            count:0
    });
    }
    exe =(event)=>{
        this.setState({ print:true});
    }
    render(){
        return (
            <div>
                <header className="App-header">
                    <div className="head3">SGPA/CGPA to<br /> PERCENTAGE</div>
                    <div className="head2">
                    The percentage should be calculated only after calculating SGPA/CGPA. <br />
                            <div>
                                <div className="sem">
                                    <span className="sem_head">Enter SGPA/CGPA : </span> 
                                    <input type="number" min="0" max="10" placeholder="0" value={this.state.cgpa} onChange={this.handlecgpa}/>
                                </div>
                                
                                <div className="btn">
                                     {/* <button >Submit</button> */}
                                     {/* {this.state.count} */}
                                     <button onClick={this.exe}>Calculate</button>
                                          </div>
                                    {
                                     this.state.print?
                                     ((this.state.cgpa != '') ? <h1>Percentage Obtained : {(Number((this.state.cgpa-0.75)*10).toFixed(2))} %</h1> : alert('Please enter value'))
                                    : null
                                    }
                            </div>
                    </div>
                </header>
            </div>
        );
    }
        }
    export default Sgpatopercentage;