import React from 'react';
import { NavLink} from 'react-router-dom';
import '../NavBar/NavBar.css';


function NavBarSpeed () {
 
  return (

    <nav className="navbar__menu">
    <NavLink to="/" className="navbar__link-main">Содержание</NavLink>
    <NavLink to="/speed/Uniformmovement" className="navbar__link">1.1 Равномерное движение</NavLink>
    <NavLink to="/speed/speedtask" className="navbar__link">Скорость</NavLink>
    </nav>
    

)
 
  
}

export default NavBarSpeed; 

