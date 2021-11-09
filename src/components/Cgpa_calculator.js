// import React from 'react'
// import { NavLink } from 'react-router-dom'
import './Cgpa_calculator.css'

import React from 'react'

export const Cgpa = () => {
    let x,y;
    return (
        <div>
            <header className="App-header">
                <div className="head3">VTU CGPA <br /> CALCULATOR</div>
                <div className="head2">
                        ENTER SGPA <br />(Enter 0 for semesters not completed) <br />
                        <form action="/cgpa">
                            <div className="sem">
                                <span className="sem_head">Semester 1 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 2 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 3 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 4 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 5 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 6 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 7 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                            <div className="sem">
                                <span className="sem_head">Semester 8 -</span> 
                                <input type="number" min="0" max="10" placeholder="0" />
                            </div>
                        </form>
                </div>
            </header>
        </div>
    )
}
