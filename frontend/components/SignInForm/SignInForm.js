import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import classnames from "classnames";
import { postSignIn } from "actions/auth";
import "./SignInForm.less";

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: {
                value: "",
                isError: false
            },
            password: {
                value: "",
                isError: false
            }
        };
    }

    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: {
                value,
                error: ""
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!(this.state.username.error || this.state.password.error)) {
            const requestBody = JSON.stringify({
                username: this.state.username.value,
                password: this.state.password.value
            });

            this.props
                .onSignIn(requestBody)
                .then(response => {
                    if (!response.payload.error) {
                        this.props.history.push("/");
                    }
                });
        }
    }

    render() {
        return (
            <div className="signin">
                <form
                    className={classnames("signin__form", this.props.className)}
                >
                    <div className="signin__title">
                        Complete form to start shopping
                    </div>
                    <label className="signin__label" htmlFor="username">
                        Enter your username
                    </label>
                    <input
                        className={classnames("signin__input", {
                            "signin__input_error": this.state.username.error
                        })}
                        id="username"
                        name="username"
                        onChange={e => this.handleInputChange(e)}
                        type="text"
                    />
                    <label className="signin__label" htmlFor="password">
                        Enter your password
                    </label>
                    <input
                        className={classnames("signin__input", {
                            "signin__input_error": this.state.password.error
                        })}
                        id="password"
                        name="password"
                        onChange={e => this.handleInputChange(e)}
                        type="password"
                    />
                    <button
                        className="signup__submit"
                        onClick={e => this.handleSubmit(e)}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

SignInForm.propTypes = {
    className: PropTypes.string,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    onSignIn: PropTypes.func.isRequired
};

SignInForm.defaultProps = {
    className: ""
};

function mapDispatchToProps(dispatch) {
    return {
        onSignIn: body => dispatch(postSignIn(body))
    };
}

export default compose(
    withRouter,
    connect(
        null,
        mapDispatchToProps
    )
)(SignInForm);

// TODO:
// 1. Add form validation
// 2. Handle error cases
