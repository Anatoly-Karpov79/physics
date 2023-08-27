import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar () {
  
  return (

  <nav className="navbar__menu">
      <NavLink to="/" className="navbar__link-main">Содержание</NavLink>
      <NavLink to="/speed" className="navbar__link">Скорость</NavLink>
      <NavLink to="/equationofmotion" className="navbar__link">Уравнение движения</NavLink>
      <NavLink to="/xo" className="navbar__link">Крестики</NavLink>
    </nav>

)
 
  
}

export default NavBar; 