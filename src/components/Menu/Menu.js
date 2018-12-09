import React from "react";
import PropTypes from "prop-types";

import "./Menu.less";

function Menu(props) {
    return (
        <nav className="main-menu">
            <ul className="main-menu__container">
                {props.menu.map(item => {
                    return (
                        <li key={item.name} className="main-menu__item">
                            <a className="main-menu__link" href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

Menu.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Menu;
