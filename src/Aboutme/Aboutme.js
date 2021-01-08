import './Aboutme.css';
import React, { useEffect, useState } from 'react';
import {motion} from "framer-motion";
import {Timeline} from 'primereact/timeline';
import {Card} from 'primereact/card';
import {Sidebar} from 'primereact/sidebar';
import PrimeReact from 'primereact/utils';
import {FaSchool} from 'react-icons/fa';

const Aboutme = props => {

    const [sidebarVisibility,setSidebarVisibility] = useState({visible:false});
    const [sidebarContent,setSidebarContent] = useState();
    
    const events = [
        { id:1, status: 'School', date: '2010', icon: <FaSchool/>, color: '#9C27B0', image: 'https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg' },
        { id:2, status: 'Diploma in Computer Engineering', date: '2011', icon: <FaSchool/>, color: '#673AB7' },
        { id:3, status: 'Bachelors in Computer Engineering', date: '2015', icon: <FaSchool/>, color: '#FF9800',image: 'https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg' },
        { id:4, status: 'Computer Systems Technician - Software Engineering ', date: '2020', icon: <FaSchool/>, color: '#607D8B' }
    ];
    
    useEffect(()=>{
        document.title="Aboutme - Gaurav Tayade";
        PrimeReact.ripple = true;
    },[]);
    
    const showSideBar = (content) =>{
        setSidebarVisibility({visible:!sidebarVisibility.visible});
        sidebarData(content);
        
    }
    
    const sidebarData=(content)=>{
        setSidebarContent(content);
    } 
    
    return(
        <motion.div className="container-fluid h-100 d-inline-block" initial={{opacity:0}}  animate={{opacity:1}} transition={{duration:0.6}}>
            <Card>            
            <Timeline value={events} marker={(item) => <span className="custom-marker p-shadow-2" style={{backgroundColor:item.color}}>{item.icon}</span>}  align="alternate" content={(item)=>
                <div className="p-card p-component">
                    <div className="p-card-body">
                        <div className="p-card-title">{item.status}</div>
                        <div className="p-card-subtitle">{item.date}</div>
                        <div className="p-card-content">
                            <img src={item.image} className="p-shadow-2" width="200"/>
                            <button onClick={()=>showSideBar(item.status)} class="p-button p-component p-button-text ">
                                <span class="p-button-label p-c">Read more</span>
                                <span class="p-ink" style={{height: "97px", width: "97px", top: "-29.8281px", left: "8px"}}></span>
                            </button>
                        </div>
                    </div>
                </div>
            }/>
            </Card>
            <Sidebar visible={sidebarVisibility.visible} position="right" onHide={showSideBar} style={{width:'30em'}}>
                {sidebarContent}
            </Sidebar>
        </motion.div>
    )

}

export default Aboutme;