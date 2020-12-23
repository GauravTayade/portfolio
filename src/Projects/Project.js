import React from 'react'
import {motion} from "framer-motion";

const Project = (props) =>{

    return(
    <motion.div className="card shadow-lg mt-5 text-center" style={{width:"18rem"}} whileHover={{scale: 0.9, transition: { duration: 0.6 },}}>
        <div className="card-header bg-white border-0">
            <h4 className="font-weight-light">{props.name}</h4>
        </div>
        <img className="card-img-top img-fluid p-4" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text text-justify">{props.desc}</p>
            </div>
        <div className="card-footer border-0 bg-white">
            <a className="btn btn-block btn-light" target="_blank" href={props.link}>See the Code</a>
        </div>
    </motion.div>
    )
}

export default Project;
