import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./SignUpForm.less";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: {
                value: "",
                error: ""
            },
            password: {
                value: "",
                error: ""
            },
            repeatPassword: {
                value: "",
                error: ""
            },
            isRegistrationCompleted: false
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

    resetFormState() {
        this.setState(prevState => {
            return {
                isRegistrationCompleted: false,
                username: {
                    ...prevState.username,
                    error: ""
                },
                password: {
                    ...prevState.password,
                    error: ""
                },
                repeatPassword: {
                    ...prevState.repeatPassword,
                    error: ""
                }
            };
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.isRegistrationCompleted) {
            this.resetFormState();
        }

        const requestBody = JSON.stringify({
            username: this.state.username.value,
            password: this.state.password.value
        });

        fetch("/api/auth/signup", {
            method: "post",
            body: requestBody,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(payload => {
                payload.error
                    ? this.setState(prevState => ({
                        username: {
                            ...prevState.username,
                            error: payload.data.username
                        }
                    }))
                    : this.setState({ isRegistrationCompleted: true });
            });
    }

    render() {
        return (
            <div className="signup">
                <form
                    className={classnames("signup__form", this.props.className)}
                >
                    <div className="signup__title">
                        Complete form to start shopping
                    </div>
                    <label className="signup__label" htmlFor="username">
                        Enter your username
                    </label>
                    <input
                        className={classnames("signup__input", {
                            ["signup__input_error"]: this.state.username.error
                        })}
                        id="username"
                        name="username"
                        onChange={e => this.handleInputChange(e)}
                        type="text"
                    />
                    <label className="signup__label" htmlFor="password">
                        Enter your password
                    </label>
                    <input
                        className={classnames("signup__input", {
                            ["signup__input_error"]: this.state.password.error
                        })}
                        id="password"
                        name="password"
                        onChange={e => this.handleInputChange(e)}
                        type="password"
                    />
                    <label className="signup__label" htmlFor="retypePassword">
                        Type your password again
                    </label>
                    <input
                        className={classnames("signup__input", {
                            ["signup__input_error"]: this.state.repeatPassword
                                .error
                        })}
                        id="retypePassword"
                        name="repeatPassword"
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
                {this.state.isRegistrationCompleted && (
                    <div className="signup__redirect">
                        {"Now you are registered. Please, "}
                        <Link className="signup__redirect-link" to="/login">
                            login
                        </Link>
                        , to enter your account
                    </div>
                )}
            </div>
        );
    }
}

SignUpForm.propTypes = {
    className: PropTypes.string
};

SignUpForm.defaultProps = {
    className: ""
};

export default SignUpForm;
