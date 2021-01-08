import logo from './logo.svg';
import './App.css';
import Navigation from "./Common/Navigation";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Activities from "./Activities/Activities";
import Aboutme from './Aboutme/Aboutme';
import NotFound from "./Common/NotFound";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

function App() {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projects" exact component={Projects}/>
                <Route path="/activities" exact component={Activities}/>
                <Route path="/aboutme" exact component={Aboutme}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
);
}

export default App;
