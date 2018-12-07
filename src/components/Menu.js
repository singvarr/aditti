import React from "react";
import PropTypes from "prop-types";

function Menu(props) {
    return (
        <nav id="main-menu">
            <ul>
                {props.menu.map((item, i) => {
                    return (
                        <li key={i}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

Menu.propTypes = {
    menu: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    }).isRequired
};

export default Menu;
