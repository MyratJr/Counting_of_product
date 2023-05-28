import React, {Component} from "react";

const Navbar=(props)=>{
    console.log('Navbar - Rendered')
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand m-2">
                Navbar{""} 
                <span className="btn btn-pill btn-secondary m-2">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    )
    
};

export default  Navbar;