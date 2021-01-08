import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import TypeIt from "typeit-react";
import './Home.css';
import SocialData from '../Data/Social.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faReact,
    faLaravel,
    faVuejs,
    faJs,
    faPhp,
    faJava,
    faBootstrap,
    faEnvira, faCuttlefish, faCss3
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faFire} from "@fortawesome/free-solid-svg-icons";
import {faFileCode} from "@fortawesome/free-solid-svg-icons/faFileCode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Social from "../Common/Social";
import Footer from "../Common/Footer";



const Home = (props) => {

    const [social,setSocial] = useState(0);

    useEffect(()=>{
        setSocial(SocialData);
        document.title="Home - Gaurav Tayade";
    },[])

    return(
        <motion.div className="container-fluid h-100 d-inline-block" initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.6}}>
            <div className="row m-0 p-0">
                <div className="col-md-5 col-sm-5 m-0 p-0 background">

                </div>
                <div className="col-md-7 col-sm-7 m-0 p-0">
                    <div className="jumbotron jumbotron-fluid h-100" style={{backgroundColor:"#F7F8FA"}}>
                        <div className="container-fluid text-center">
                            <TypeIt className="display-4" options={{strings:['Hello There'],speed:2,waitUntilVisible: true}}/>
                            <h1 className="display-3">My Name is Gaurav Tayade</h1>
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <h3 className="text-center font-weight-light m-5">
                                        Welcome to my personal web space, I appreciate your time to visit my webpage.
                                    </h3>
                                    <h3 className="text-center font-weight-light m-5">
                                        Sheridan College Graduate class of 2020
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center p-0 m-0 my-5">
                {social ?
                    social.social.map((socialCard)=>{
                        return (
                            <Social name={socialCard.name} image={socialCard.image} desc={socialCard.desc} link={socialCard.link}/>
                        )
                    })
                    :
                    <h3 className="display-4">No Data</h3>
                }
            </div>

            <div className="container-fluid">
                <h1 className="display-4 text-center">What I Know</h1>
                <div className="row justify-content-center slider m-4">
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faReact} className="display-1"/>
                                <p className="card-text">
                                    <h3 className="font-weight-light">React</h3>
                                </p>
                            </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faJs} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">JavaScript</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faLaravel} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">Laravel</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faPhp} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">PHP</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faVuejs} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">Vue</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faJava} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">Java</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faBootstrap} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">Bootstrap</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faDatabase} className="display-1"/>
                            <p className="card-text m-2">
                                <h3 className="font-weight-light">MySql</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faEnvira} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">MongoDB</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faCuttlefish} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">C</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faCss3} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">CSS</h3>
                            </p>
                        </div>
                    </div>
                    <div className="card text-center border-0" style={{width: "14rem"}}>
                        <div className="card-body">
                            <FontAwesomeIcon icon={faFire} className="display-1"/>
                            <p className="card-text">
                                <h3 className="font-weight-light">Firebase</h3>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </motion.div>
    )

}

export default Home;
