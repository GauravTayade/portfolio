import React from 'react'
import {motion} from "framer-motion";

const Music = (props) => {

    return(
        <React.Fragment>
            <div className="card border-0">
                <div className="card-body">
                    <motion.img src={props.image} className="rounded-circle img-fluid shadow-lg" whileHover={{scale:0.95}} transition={{duration:0.6}}/>
                </div>
                <div className="card-header-pills text-center border-0">
                    <h5 className="font-weight-light">{props.name}</h5>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Music;
