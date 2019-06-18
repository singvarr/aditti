import React, { Component } from "react";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { postSignUp } from "actions/auth";
import { default as AppState } from "store/state";
import "./SignUpForm.less";

type Props = {
    className?: string;
    onSignUp: (
        body: string
    ) => Promise<{
        payload: {
            error: boolean;
        };
    }>;
};

type State = {
    username: {
        value: string;
        error: string;
    };
    password: {
        value: string;
        error: string;
    };
    repeatPassword: {
        value: string;
        error: string;
    };
    isRegistrationCompleted: boolean;
};

class SignUpForm extends Component<Props, State> {
    constructor(props: Props) {
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

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;

        this.setState(prevState => ({
            ...prevState,
            [name as keyof State]: {
                value,
                isError: false
            }
        }));
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();

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
                            signup__input_error: this.state.username.error
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
                            signup__input_error: this.state.password.error
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
                            signup__input_error: this.state.repeatPassword.error
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

function mapDispatchToProps(
    dispatch: ThunkDispatch<AppState, null, Action<string>>
) {
    return {
        onSignUp: (body: string) => dispatch(postSignUp(body))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(SignUpForm);

//TODO:
// 1. Add form validation
// 2. Handle server errors
