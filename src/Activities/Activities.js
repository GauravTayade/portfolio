import React, {useEffect} from 'react';
import {motion} from "framer-motion";
import GameList from "../Games/GameList";
import MusicList from "../Music/MusicList";
import Footer from "../Common/Footer";

const Activities = (props) =>{

    useEffect(()=>{
        document.title="Activities - Gaurav Tayade";
    },[])

    return(
        <motion.div className="container-fluid m-0 p-0" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
            <h1 className="display-4 text-center m-5">Things I Love</h1>
            <h1 className="display-4 text-center m-5">Gaming</h1>
                <GameList/>
            <h1 className="display-4 text-center m-5">Music</h1>
                <MusicList/>
            <Footer/>
        </motion.div>
    )

}

export default Activities;
