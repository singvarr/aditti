import React from "react";
import { Link } from "react-router-dom";

import Autosuggest from "components/Autosuggest";
import CartTotal from "components/CartTotal";

import "./Header.less";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img className="logo" src="./assets/img/logo.png" alt="logo" />
            </Link>
            <Autosuggest />
            <CartTotal />
        </header>
    );
}

export default Header;
