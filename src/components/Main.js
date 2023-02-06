import React, { useState } from "react";
import MainMenu from "./MainMenu";
import Greeting from "./Greeting";
import Motion from "./Motion";
import SpeedMenu from "./SpeedMenu";
import Speed from "./Speed/Speed";
import { Routes, Route, Link } from 'react-router-dom';
function Main() {

    
        
    return(
<div className="main">
    <div className="main__left">
    
       
    
       
    
    </div>
    <div className="main__right">
      <Greeting />
    </div>
</div>
    )
}

export default Main;