import React from "react";
import PropTypes from "prop-types";

import "./Menu.less";

function Menu(props) {
    return props.menu.length ? (
        <nav className="main-menu">
            <ul className="main-menu__container wrapper">
                {props.menu.map(item => {
                    return (
                        <li className="main-menu__item" key={item.name}>
                            <a className="main-menu__link" href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    ) : null;
}

Menu.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Menu;
