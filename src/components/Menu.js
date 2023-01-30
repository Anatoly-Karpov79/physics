import React from "react";

class Menu extends React.Component {
   render() {
    let menus =[
        "1",
        "2",
        "3",
        "4",
        "5"
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
            <a href={url}>{this.props.label}</a>
        </div>
    }
}
export default Menu;