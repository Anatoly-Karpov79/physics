import React from "react";
import { NavLink } from 'react-router-dom';


function Motion() {
    return (
      <nav className="menu">
        <NavLink to="/" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>СОДЕРЖАНИЕ</NavLink>
        <NavLink to="/speed" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>2.1</NavLink>
        <NavLink to="/equationOfMotion" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>2.2</NavLink>
        <NavLink to="/charts" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>2/3. Графики</NavLink>
        <NavLink to="/addition" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>2/4. Сложение скоростей</NavLink>
        <NavLink to="/InstantAndAverageSpeed" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>5. Мгновенная и средняя скорость</NavLink>
      </nav>
    );
  }
  
  export default Motion;