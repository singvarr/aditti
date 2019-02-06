import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSignOut } from "actions/auth";
import "./Menu.less";

function Menu(props) {
    return props.menu.length ? (
        <nav className="main-menu">
            <ul className="main-menu__container wrapper">
                {props.menu.map(item => {
                    return (
                        <li className="main-menu__item" key={item.name}>
                            <NavLink
                                activeClassName="main-menu__link_active"
                                className="main-menu__link"
                                to={item.href}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    );
                })}
                {props.isAuthenticated ? (
                    <li className="main-menu__item">
                        <button
                            className="main-menu__link"
                            onClick={props.onSignOut}
                            type="button"
                        >
                            Sign out
                        </button>
                    </li>
                ) : (
                    <Fragment>
                        <li className="main-menu__item">
                            <NavLink
                                activeClassName="main-menu__link_active"
                                className="main-menu__link"
                                to="/signup"
                            >
                                Sign up
                            </NavLink>
                        </li>
                        <li className="main-menu__item">
                            <NavLink
                                activeClassName="main-menu__link_active"
                                className="main-menu__link"
                                to="/signin"
                            >
                                Sign in
                            </NavLink>
                        </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    ) : null;
}

Menu.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    ).isRequired,
    onSignOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSignOut: () => dispatch(postSignOut())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
