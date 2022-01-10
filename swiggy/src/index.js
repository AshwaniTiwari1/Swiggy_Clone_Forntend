import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Home,
    About,
    Contact,

} from "./components";
import Offers from "./components/Offers";
import LandingPg from "./components/LandingPage/LandingPg";


ReactDOM.render( 
    <Router>
     <Navigation />
      <Routes >

        <Route path = " "element = { < LandingPg /> }/>
        // <Route path = "/"element = { < LandingPg /> }/>  
        <Route path = "/home" element = { < Home /> }/> 
        <Route path = "/about" element = { < About /> }/>  
        <Route path = "/contact" element = { < Contact /> }/> 
        <Route path = "/offers" element = { < Offers/> }/> 
      </Routes> 
   
    </Router>,

    document.getElementById("root")
);

serviceWorker.unregister();