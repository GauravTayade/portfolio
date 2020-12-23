import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartbeat} from "@fortawesome/free-solid-svg-icons";


const Footer = (props) => {
    return(
        <div className="jumbotron jumbotron-fluid mb-0">
            <div className="row text-center m-0 p-0">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    <span className="display-4">Made with <FontAwesomeIcon className="display-4 heart" icon={faHeartbeat}/> By Gaurav</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
