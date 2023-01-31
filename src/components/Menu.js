import React from "react";
import { NavLink } from 'react-router-dom';


function NavBarMain() {
    return (
      <nav className="menu">
        <NavLink to="/" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>СОДЕРЖАНИЕ</NavLink>
        <NavLink to="/speed" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>1. Скорость</NavLink>
        <NavLink to="/equationOfMotion" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>2. Уравнение движения</NavLink>
        <NavLink to="/charts" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>3. Графики</NavLink>
        <NavLink to="/addition" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>4. Сложение скоростей</NavLink>
        <NavLink to="/InstantAndAverageSpeed" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>5. Мгновенная и средняя скорость</NavLink>
      </nav>
    );
  }
  
  export default NavBarMain;
 

//        "2. Уравнение движения",
//        "3. Графики",
//        "4. Сложение скоростей",
//        "5. Мгновенная и средняя скорость"
//    ]
   

 //   return <div className="menu">
 //   {menus.map((value, index) => {
 //       return <div key={index}><Link label={value} /></div>
 //   })}
//</div>
//   }   
//}

//class Link extends React.Component {
//    render() {
//        const url ="/" + this.props.label;
//        return <div>
//            <a className="menu__link" href={url}> {this.props.label}</a>
//        </div>
//    }
// }
// export default mainMenu;}}