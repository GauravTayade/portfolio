import React from 'react'
import { Link } from "react-router-dom";

const Navigation = (props) =>{

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="/assets/images/bearded.png" width="80" height="80" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/projects">Projects</Link>
                    <Link className="nav-item nav-link" to="/activities">Activities</Link>
                    <Link className="nav-item nav-link" to="/resume">Resume</Link>
                    <Link className="nav-item nav-link" to="/aboutme">AboutMe</Link>
                </div>
            </div>
        </nav>
    )

}

export default Navigation;
