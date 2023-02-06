import { Routes, Route, Link } from 'react-router-dom';
import Main from "./Main";
import Speed from "./Speed/Speed.js"
import Motion from './Motion';
import NavBarMain from './MainMenu';
import MainMenu from './MainMenu';
import React, {useState} from 'react';


function App() {
  const [isMainMenuOpen, setIsMainMenupOpen] = useState(false);
  
  function handleMainMenuClick() {
    setIsMainMenupOpen(true);
    console.log('Рaботает');
  }
  return (
    <>
    <p onClick={handleMainMenuClick} >Содержание</p>

      <Main >
        
        onMainMenu={handleMainMenuClick}
        <MainMenu 
        isOpen={isMainMenuOpen}>
      
      </MainMenu>
      </Main>
     
     
      
        
    
    
      
      
      
    </>
  );
}

export default App;
