import React from 'react';
import {Outlet, Link} from "react-router-dom";

function UniformMovement () {
  return (
    <div className="about-us">
      <h2>О нас</h2>
      <ul className="links">
        <li><Link to={`site-history`}>История сайта</Link></li>
        <li><Link to={`site-mission`}>Наша миссия</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default UniformMovement;