import React from "react";

class Menu extends React.Component {
   render() {
    let menus =[
        "1. Скорость",
        "2. Уравнение движения",
        "3. Графики",
        "4. Сложение скоростей",
        "5. Мгновенная и средняя скорость"
    ]
   

    return <div className="menu">
    {menus.map((value, index) => {
        return <div key={index}><Link label={value} /></div>
    })}
</div>
   }   
}

class Link extends React.Component {
    render() {
        const url ="/" + this.props.label;
        return <div>
            <a className="menu__link" href={url}> {this.props.label}</a>
        </div>
    }
}
export default Menu;