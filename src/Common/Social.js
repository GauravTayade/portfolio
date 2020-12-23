import React from 'react';
import {motion} from "framer-motion";

const  Social = (props) =>{

    return(
        <motion.div className="card shadow-lg mt-5 text-center " style={{width:"18rem"}} whileHover={{scale: 0.9, transition: { duration: 0.6 },}}>
            <div className="card-header border-0 bg-white">
                {props.name}
            </div>
            <img className="card-img-top img-fluid mx-auto my-2" style={{width:"128px"}} src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text text-justify">{props.desc}</p>
            </div>
            <div className="card-footer bg-white border-0">
                <a className="btn btn-block btn-light" target="_blank" href={props.link}>Lets Connect</a>
            </div>
        </motion.div>
    )

}

export default Social;
