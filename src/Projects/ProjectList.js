import React, {useEffect, useState} from 'react';
import Project from "./Project";
import ProjectsData from "../Data/Projects.json";

const ProjectList = (props) => {

    const [projectList,setProjectList] = useState(0);

    useEffect(()=>{
       setProjectList(ProjectsData);
       console.log(projectList);
    },[])

    return(

            <div className="row justify-content-around">
                {
                    projectList ?
                        projectList.projects.map((project)=>{
                            return (
                                <Project name={project.name} image={project.image} desc={project.desc} link={project.link} />
                            )
                        })
                        :
                        <h1 className="display-4 text-center">No Data</h1>
                }
            </div>

    )

}

export default ProjectList;
