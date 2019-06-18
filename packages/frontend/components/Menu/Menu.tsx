import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { postSignOut } from "actions/auth";
import State from "types/state";
import "./Menu.less";

type Props = {
    isAuthenticated: boolean;
    menu: Array<{
        name: string;
        href: string;
    }>;
    onSignOut: () => void;
};

export function Menu(props: Props) {
    return props.menu.length ? (
        <nav className="main-menu">
            <ul className="main-menu__container wrapper">
                {props.menu.map(item => {
                    return (
                        <li className="main-menu__item" key={item.name}>
                            <Link className="main-menu__link" to={item.href}>
                                {item.name}
                            </Link>
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
                            <Link className="main-menu__link" to="/signup">
                                Sign up
                            </Link>
                        </li>
                        <li className="main-menu__item">
                            <Link className="main-menu__link" to="/signin">
                                Sign in
                            </Link>
                        </li>
                    </Fragment>
                )}
            </ul>
        </nav>
    ) : null;
}

function mapStateToProps(state: State) {
    return {
        isAuthenticated: state.auth.status
    };
}

function mapDispatchToProps(
    dispatch: ThunkDispatch<State, null, Action<string>>
) {
    return {
        onSignOut: () => dispatch(postSignOut())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
