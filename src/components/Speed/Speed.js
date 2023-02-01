import React from "react";
import { NavLink } from 'react-router-dom';


function Speed() {
    return (
      <nav className="menu">
        <NavLink to="/" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>СОДЕРЖАНИЕ</NavLink>
        <NavLink to="/uniformmovement" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>1.1 Равномерное движение</NavLink>
        <NavLink to="/equationOfMotion" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>1.2</NavLink>
        <NavLink to="/charts" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>3. Графики</NavLink>
        <NavLink to="/addition" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>4. Сложение скоростей</NavLink>
        <NavLink to="/InstantAndAverageSpeed" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>5. Мгновенная и средняя скорость</NavLink>
      </nav>
    );
  }
  
  export default Speed;