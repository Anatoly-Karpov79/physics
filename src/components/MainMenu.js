import React from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MainMenu() {
 
  return( 
    <div className="menu">
       <Link   to="https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&oq=%D0%BF%D0%B5%D1%80%D0%B5&aqs=chrome.0.69i59j69i57j35i39j0i131i433i512l2j69i61l3.1315j0j7&sourceid=chrome&ie=UTF-8" >Скорость</Link>
        <Link to="/speed">2. Уравнение движения</Link>
       <Link to="/speed">3. Графики</Link>
       <Link to="/speed">Сложение скоростей</Link>
       <Link to="/speed">5. Мгновенная и средняя скорость</Link>

    </div>
  )  
  
  
}

 
 export default MainMenu;