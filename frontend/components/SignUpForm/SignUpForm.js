import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./SignUpForm.less";

class Signup extends Component {
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

        const reqBody = JSON.stringify({
            username: this.state.username.value,
            password: this.state.password.value
        });

        fetch("/api/auth/signup", {
            method: "post",
            body: reqBody,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    render() {
        return (
            <form className={classnames("signup", this.props.className)}>
                <label className="signup__label" htmlFor="username">
                    Enter your username
                </label>
                <input
                    className="signup__input"
                    id="username"
                    name="username"
                    onChange={e => this.handleInputChange(e)}
                    type="text"
                />
                <label className="signup__label" htmlFor="password">
                    Enter your password
                </label>
                <input
                    className="signup__input"
                    id="password"
                    name="password"
                    onChange={e => this.handleInputChange(e)}
                    type="password"
                />
                <label className="signup__label" htmlFor="retypePassword">
                    Type your password again
                </label>
                <input
                    className="signup__input"
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
        );
    }
}

Signup.propTypes = {
    className: PropTypes.string
};

Signup.defaultProps = {
    className: ""
};

export default Signup;
