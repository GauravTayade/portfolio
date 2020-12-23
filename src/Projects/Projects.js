import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import ProjectList from "./ProjectList";

const Projects = (props) =>{

    return(
        <motion.div className="projects" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
            <h1 className="display-4 text-center m-4">Projects Page</h1>
            <div className="container-fluid">
                <ProjectList/>
            </div>
        </motion.div>
    )

}

export default Projects;
