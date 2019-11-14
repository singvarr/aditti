import React from "react";
import { Link } from "react-router-dom";
import routes from "constants/routes";
import Autosuggest from "components/Autosuggest";
import CartTotal from "components/CartTotal";
import "./Header.less";

function Header() {
    return (
        <header className="header wrapper">
            <Link className="logo-link" to={routes.MAIN}>
                <img alt="logo" className="logo" src="img/logo.png" />
            </Link>
            <Autosuggest />
            <CartTotal />
        </header>
    );
}

export default Header;
