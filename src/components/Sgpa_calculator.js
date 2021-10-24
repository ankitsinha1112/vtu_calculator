import React from 'react'
import './Sgpa_calculator.css'

export const Sgpa_calculator = (props) => {
    return (
        <div>
            <div className="head">
                <h1>{props.Title}</h1>
            </div>
            <div className="subhead">
                <h3>Subjects</h3>
            </div>
            <div className="marks">
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub1} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub2} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub3} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub4} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub5} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub6} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub7} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
                <div className="sub">
                    <div className="subname">
                        <h5>{props.Sub8} -</h5>
                    </div>
                    <div className="form">
                        <input type="number" />
                    </div>

                </div>
            </div>
        </div>
    )
}

