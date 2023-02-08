import React, { useState } from "react";
import Greeting from "./Greeting";
import MainMenu from "./MainMenu";


function Main() {

    
        
    return(
<div className="main">
    <div className="main__left">
    <MainMenu />
       
    
       
    
    </div>
    <div className="main__right">
      <Greeting />
    </div>
</div>
    )
}

export default Main;