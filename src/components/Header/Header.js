import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Menu from "components/Menu";
import CartIcon from "components/CartIcon";

function Header(props) {
    return (
        <header key="header">
            <div className="wrapper">
                <Link to="/">
                    <div className="logo">
                        <img src="./assets/img/logo.png" alt="logo" />
                    </div>
                </Link>
                <form action="post" id="search-form">
                    <input type="search" name="search-field" />
                    <button type="submit" className="flaticon-search" />
                </form>
                <CartIcon />
            </div>
            <Menu menu={props.links} />
        </header>
    );
}

Header.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Header;
