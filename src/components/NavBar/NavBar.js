import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function NavBar () {
  
  return (

  <nav className="navbar__menu">
      <NavLink to="/" className="navbar__link-main">Содержание</NavLink>
      <NavLink to="/speed" className="navbar__link">Скорость</NavLink>
      <NavLink to="/equationofmotion" className="navbar__link">Уравнение движения</NavLink>
    </nav>

)
 
  
}

export default NavBar; 