import React from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MainMenu(props) {
 
  return( 
    <MainMenu
    isOpen={props.isOpen}
    >
    <div isopen className="menu">
       <Link reloadDocument  to="/speed" >Скорость</Link>
        <Link to="/speed">2. Уравнение движения</Link>
       <Link to="/speed">3. Графики</Link>
       <Link to="/speed">Сложение скоростей</Link>
       <Link to="/speed">5. Мгновенная и средняя скорость</Link>

    </div>
    </MainMenu>
  )  
  
  
}

 
 export default MainMenu;