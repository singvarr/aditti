import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { postSignUp } from "actions/auth";
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

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.isRegistrationCompleted) {
            this.setState({ isRegistrationCompleted: false });
        }

        const requestBody = JSON.stringify({
            username: this.state.username.value,
            password: this.state.password.value
        });

        this.props.onSignUp(requestBody).then(response => {
            if (!response.payload.error) {
                this.setState({ isRegistrationCompleted: true });
            }
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
                            "signup__input_error": this.state.username.error
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
                            "signup__input_error": this.state.password.error
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
                            "signup__input_error": this.state.repeatPassword
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
                        <Link className="signup__redirect-link" to="/signin">
                            sign in
                        </Link>
                        , to enter your account
                    </div>
                )}
            </div>
        );
    }
}

SignUpForm.propTypes = {
    className: PropTypes.string,
    onSignUp: PropTypes.func.isRequired
};

SignUpForm.defaultProps = {
    className: ""
};

function mapDispatchToProps(dispatch) {
    return {
        onSignUp: body => dispatch(postSignUp(body))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(SignUpForm);

//TODO:
// 1. Add form validation
// 2. Handle server errors
